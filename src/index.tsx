import * as React from 'react'
import { render } from 'react-dom'
// import { hot } from 'react-hot-loader'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.styl'

// declare var module: any

// const HotApp = hot(module)(App)

render(<App />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
