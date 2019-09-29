import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { DH_CHECK_P_NOT_PRIME } from 'constants'
import { pseudoRandomBytes } from 'crypto'

const before = document.getElementById('creater_infomation')
const parent = before.parentNode
const newElement = document.createElement('div')
parent.insertBefore(newElement, before)

ReactDOM.render(<App />, newElement)

/**
 * ref: https://developer.chrome.com/extensions/messaging
 * Simple one-time requestsではFirestoreに問い合わせている時間の間コネクションを維持してくれずチャンネルが落ちてしまったのでconnectを使っている
 * connectの引数はnameというキーを持ったオブジェクトでなければならない
 * postMessageの引数は任意のオブジェクトを渡してメッセージとしてevent.jsに渡せるが、メッセージによる処理の場合分けは無いので適当に送っている
 */
var port = chrome.runtime.connect({name: 'dreamyfish'});
port.postMessage('hello');
port.onMessage.addListener((msg) => {
  console.log(msg)
});
