import React, { useEffect, useState } from "react"
import { Button, SafeAreaView, TextInput } from "react-native"
import { Indicator, Text } from "/components"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import { getFileNameFromUrl, log } from "/utils"
import RNFetchBlob from "rn-fetch-blob"

const Home = () => {
  const navigator = useNavigation()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pdfSource, setPdfSource] = useState<string>(
    "https://file-examples.com/storage/fe563fce08645a90397f28d/2017/10/file-example_PDF_1MB.pdf",
  )
  const [filename, setFilename] = useState<string>("")

  useEffect(() => {
    const timer = setTimeout(() => {
      let name = getFileNameFromUrl(pdfSource)
      const lastDotIndex = name.lastIndexOf('.');
      name = name.substring(0, lastDotIndex);
      setFilename(name)
    }, 500)
    return () => clearTimeout(timer)
  }, [pdfSource])

  const onDownload = () => {
    setIsLoading(true)
    const downloadDest = `${RNFetchBlob.fs.dirs.DownloadDir}/SamplePDF/${filename}.pdf`
    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: downloadDest,
        description: "Downloading PDF...",
      },
    })
      .fetch("GET", pdfSource)
      .then((res) => {
        RNFetchBlob.fs
          .readFile(downloadDest, "base64")
          .then((pdfData) => {
            setIsLoading(false)
            // Handle the downloaded PDF data here
          })
          .catch((error) => {
            setIsLoading(false)
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={pdfSource}
        onChangeText={setPdfSource}
        style={styles.sourceInputField}
        placeholder="PDF's source"
      />
      <TextInput
        value={filename}
        onChangeText={setFilename}
        style={styles.sourceInputField}
        placeholder="File's name"
      />
      <Button title="Download" onPress={onDownload} disabled={isLoading} />
      {isLoading && <Indicator />}
    </SafeAreaView>
  )
}

export default Home
