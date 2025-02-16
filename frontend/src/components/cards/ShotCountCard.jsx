import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import InfoCardLayout from '../../layouts/InfoCardLayout'
import { Colors } from '../../constants/colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const ShotCountCard = ({shotCount}) => {

    const getCardColorByShotCount = () => {
        if(shotCount >= 0 && shotCount < 5){
            return Colors.SUCCESS
        } else if(shotCount <= 8) {
            return Colors.CAUTION
        } else {
            return Colors.DANGER
        }
    }
    
    return (
        <InfoCardLayout backgroundColor={getCardColorByShotCount()}>
            <View style={[styles.content, {gap: shotCount == 12 ? 20 : 0}]}>
                {
                   shotCount == 12 ?
                        <>
                            <FontAwesome6 name="face-dizzy" size={128} color="white" />
                            <Text style={{fontSize: 30, textTransform: 'uppercase', fontWeight: 'bold', color: 'white',}}>Game Over</Text>
                        </>
                    :
                        <>
                            <Text style={{fontSize: 30, textTransform: 'uppercase', fontWeight: 'bold', color: 'white',}}>You are:</Text>
                            <Text style={{fontSize: 150, color: 'white',}}>{shotCount}</Text>
                            <Text style={{fontSize: 30, textTransform: 'uppercase', fontWeight: 'bold', color: 'white',}}>Shots Deep</Text>
                        </> 
                }
            </View>   
            
        </InfoCardLayout>
    )
}

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ShotCountCard