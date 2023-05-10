import React from "react"
import { SafeAreaView } from "react-native"
import { Text } from "/components"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import { log } from "/utils"

const Template = () => {
  const navigator = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <Text>Template</Text>
    </SafeAreaView>
  )
}

export default Template
