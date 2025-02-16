import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CircleButtonLayout = ({children, backgroundColor, action}) => {
  return (
    <TouchableOpacity onPress={action} style={[styles.container, {backgroundColor}]}>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: 55,
        height: 55,
        borderRadius: 999
    }
})

export default CircleButtonLayout

