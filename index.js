import 'react-native-gesture-handler'
import React from 'react'
import { AppRegistry } from 'react-native'
import App from '@App'
import { name as appName } from './app.json'

const Root = () => <App />

AppRegistry.registerComponent(appName, () => Root)
