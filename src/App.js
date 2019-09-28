import React from 'react'
import Layout from './components/Layout'
import Loading from './components/Loading'

export default () => (
  <div>
    <h3>このゲームに似ているゲーム</h3>
    <Layout>
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
    </Layout>
  </div>
)
