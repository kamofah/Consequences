import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../components/general/Button'

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Consequnces</Text>
      <Button text='Start Game'/>
      <Button text='Join Game'/>
      <Button text='Instructions'/>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})

export default HomeScreen