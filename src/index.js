import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const before = document.getElementById('creater_infomation')
const parent = before.parentNode
const newElement = document.createElement('div')
parent.insertBefore(newElement, before)

ReactDOM.render(<App />, newElement)
