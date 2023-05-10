import "react-native-gesture-handler"

import React from "react"
import AppNavigator from "/navigators"
import { useDoubleBackPressExit } from "./utils"
import { BackHandler } from "react-native"

const Root = () => {
  useDoubleBackPressExit(() => {
    BackHandler.exitApp()
  })

  return <AppNavigator />
}

export default Root
