import React from 'react'
import ReactDOM from 'react-dom/client'
import { CometChat } from '@cometchat-pro/chat'
import { App } from './App'
import { COMETCHAT_APP_ID, COMETCHAT_REGION } from 'configs/cometchat'
import 'index.css'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)

const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(COMETCHAT_REGION)
  .build()

//eslint-disable-next-line unicorn/prefer-top-level-await
CometChat.init(COMETCHAT_APP_ID, appSetting).then(
  () => {
    console.log('CometChat initialization completed successfully')
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  },
  error => {
    console.log('CometChat initialization failed with error:', error)
  },
)
