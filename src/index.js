import React from 'react'
import ReactDOM from 'react-dom'

const before = document.getElementById('creater_infomation')
const parent = before.parentNode
const newElement = document.createElement('div')
parent.insertBefore(newElement, before)

const App = () => <h3>このゲームに似ているゲーム</h3>
ReactDOM.render(<App />, newElement)
