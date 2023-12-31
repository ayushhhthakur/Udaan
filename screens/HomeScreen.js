import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
  {/* <Posts /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
})

export default HomeScreen
