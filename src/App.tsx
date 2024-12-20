import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { UserContext, UserProvider } from './context/UserContext'
import Login from './components/Login'

const App = () => {
  return (
  <UserProvider>
      <Login/>
  </UserProvider>
  )
}

export default App

const styles = StyleSheet.create({})