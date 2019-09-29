import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import Layout from './components/Layout'
import Loading from './components/Loading'
import Game from './components/Game'

export default () => {
  const [games, setGames] = useState([])
  const [error, setError] = useState()
  useEffect(() => {
    // ?game=1234をパースして{game: 1234}にする
    const id = queryString.parse(window.location.search).game
    // ref: https://developer.chrome.com/extensions/messaging
    // Simple one-time requestsではFirestoreに問い合わせている時間の間コネクションを維持してくれずチャンネルが落ちてしまったのでconnectを使っている
    // connectの引数はnameというキーを持ったオブジェクトでなければならない
    const port = chrome.runtime.connect({ name: 'dreamyfish' })
    port.postMessage({ id })
    port.onMessage.addListener(msg => {
      if (msg.error) {
        setError(msg.error)
        return
      }
      setGames(msg.games)
    })
  }, [])
  return (
    <div>
      <h3>このゲームに似ているゲーム</h3>
      {error ? (
        <p>データ取得に失敗しました</p>
      ) : (
        <Layout>
          {games ? (
            games.map(game => <Game key={game.id} game={game} />)
          ) : (
            <Loading />
          )}
        </Layout>
      )}
    </div>
  )
}
