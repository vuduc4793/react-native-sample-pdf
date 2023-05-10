import React, { useEffect, useState } from "react"
import { SafeAreaView } from "react-native"
import { Indicator, Text } from "/components"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import { log } from "/utils"

const Home = () => {
  const navigator = useNavigation()
  const [isLoading, setIsLoading] = useState<Boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {!isLoading && <Text>Home</Text>}
      {isLoading && <Indicator />}
    </SafeAreaView>
  )
}

export default Home
