import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Logo = () => {
  return (
    <Text style={styles.logo}>InstaCat</Text>
  )
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 50,
    fontSize: 40,
    fontWeight: 'bold',
  }
})

export default Logo