import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import CircleButtonLayout from '../../../layouts/CircleButtonLayout'

const SettingsButton = ({backgroundColor, action}) => {
  return (
    <CircleButtonLayout action={action} backgroundColor={backgroundColor}>
        <Feather name="settings" size={32} color="black" />
    </CircleButtonLayout>
  )
}



const styles = StyleSheet.create({})

export default SettingsButton