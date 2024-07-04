import { View, Text, StyleSheet } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import React, { useEffect, useState } from 'react'
import Button from '../components/general/Button'

const GameRoom = () => {
    const generateGameQRCode = () => {
        return (Math.floor(Math.random() * 8999) + 1000).toString()
    }

    const gameCode = generateGameQRCode()

    return (
        <View style={styles.gameRoomScreenContainer}>
            <View style={styles.gameCodeCard}>
                <View style={styles.QRCodeContainer}>
                    <QRCode size={200} value={gameCode}/>
                </View>
                <Text style={styles.gameCode}>{gameCode}</Text>
            </View>
            <Button text='Start'/>
        </View>
    )
}

const styles = StyleSheet.create({
    gameRoomScreenContainer: {
        padding: 20,
    },

    QRCodeContainer: {
        padding: 20,
        backgroundColor: '#e9ecef',
        borderRadius: 25,
    },
    
    gameCodeCard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        gap: 20
    },

    gameCode: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default GameRoom