import React from 'react';
import { TouchableOpacity, Platform, Linking,  StyleSheet, Alert } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import Octicons from '@expo/vector-icons/Octicons';


const ShareButton = ({backgroundColor, viewRef}) => {

    const captureAndShare = async () => {
        try {
          if (!viewRef.current) {
            Alert.alert('Error', 'View reference is not available.');
            return;
          }
    
          // Capture the screenshot
          const uri = await captureRef(viewRef, {
            format: 'png',
            quality: 1,
          });
    
          // Create a temporary file path for sharing
          const fileUri = FileSystem.cacheDirectory + 'screenshot.png';
          await FileSystem.copyAsync({
            from: uri,
            to: fileUri,
          });
    
          // Check if Instagram is installed
        const instagramURL = Platform.select({
            ios: 'instagram-stories://share',
            android: 'com.instagram.android',
        });

        const canOpen = await Linking.canOpenURL(instagramURL);

        if (canOpen) {
            // For iOS, use URL Scheme
            if (Platform.OS === 'ios') {
            return await Linking.openURL(
                `instagram-stories://share?backgroundImage=${encodeURIComponent(
                fileUri
                )}`
            );
            } else {
            // For Android, use Sharing API as a fallback
            return await Sharing.shareAsync(fileUri);
            }
        } else {
            Alert.alert('Instagram not installed', 'Please install Instagram to share the story.');
        }
        } catch (error) {
            console.error('Error capturing and sharing to Instagram:', error);
        }
    };

    return (
        <TouchableOpacity onPress={captureAndShare} style={[styles.container, { backgroundColor: backgroundColor }]}>
            <Octicons name="share" size={24} color="white" />
        </TouchableOpacity>
    )
}

export default ShareButton

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: ,
        padding: 10,
        width: 50,
        height: 50,
        borderRadius: '100%'
    }
})