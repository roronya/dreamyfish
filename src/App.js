import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'
import Loading from './components/Loading'
import Game from './components/Game'

export default () => {
  const [games, setGames] = useState([])
  useEffect(() => {
    // ref: https://developer.chrome.com/extensions/messaging
    // Simple one-time requestsではFirestoreに問い合わせている時間の間コネクションを維持してくれずチャンネルが落ちてしまったのでconnectを使っている
    // connectの引数はnameというキーを持ったオブジェクトでなければならない
    // postMessageの引数は任意のオブジェクトを渡してメッセージとしてevent.jsに渡せるが、メッセージによる処理の場合分けは無いので適当に送っている
    const port = chrome.runtime.connect({ name: 'dreamyfish' })
    port.postMessage('hello')
    port.onMessage.addListener(msg => {
      setGames(msg.games)
    })
  }, [])
  return (
    <div>
      <h3>このゲームに似ているゲーム</h3>
      <Layout>
        {games ? (
          games.map(game => <Game key={game.id} game={game} />)
        ) : (
          <Loading />
        )}
      </Layout>
    </div>
  )
}
