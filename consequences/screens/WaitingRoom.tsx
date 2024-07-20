import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react'
import Button from '../components/general/Button'
import PlayerTag from '../components/general/PlayerTag';

const WaitingRoom = () => {
    const [playerCount, setPlayerCount] = useState(0);
    const [players, setPlayers] = useState([])
    const generateGameQRCode = () => {
        return (Math.floor(Math.random() * 8999) + 1000).toString()
    }

    const gameCode = generateGameQRCode()

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.backButton}>
                    <AntDesign name="left" size={24} color="black" />
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.gameCodeCard}>
                <View style={styles.QRCodeContainer}>
                    <QRCode size={200} value={gameCode} backgroundColor='none'/>
                </View>
                <Text style={styles.gameCode}>{gameCode}</Text>
            </View>
            <Button text='Start'/>
            <View>
                {/* {
                    players.map((player) => {
                        <PlayerTag firstName={player.firstName} lastName={player.lastName}/>
                    })
                } */}
            </View>
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: 350 }}>
                <View style={styles.playerCountContainer}>
                    <Text style={styles.playerCount}>Players: {playerCount}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 20
    },

    backButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }, 

    backButtonText: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '600',
        letterSpacing: 1,
    },

    playerCountContainer: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 15,
        width: 125
    },

    playerCount: {
        color: 'white',
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontWeight: 'bold',
        textAlign: 'center',
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

export default WaitingRoom