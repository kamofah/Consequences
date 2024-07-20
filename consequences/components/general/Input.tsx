import { View, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native'
import React from 'react'

interface InputProps {
    type: KeyboardTypeOptions,
}


const Input: React.FC<InputProps> = ({type}) => {
  return (
    <View>
      <TextInput style={styles.input} keyboardType={type}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      borderColor: 'black',
      padding: 15,
      fontSize: 18,
      borderWidth: 2,
      borderRadius: 5
    }
  })

export default Input