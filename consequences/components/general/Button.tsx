import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'

interface ButtonProps {
    text: string;
}
  

const Button: React.FC<ButtonProps> = ({text}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    </View>
    
  )
}

const styles  = StyleSheet.create({
    container: {
        padding: 10
    },

    buttonContainer: {
        backgroundColor: '#3f37c9',
        borderRadius: 5,
        padding: 20
    },

    buttonText: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 2
    }
})

export default Button