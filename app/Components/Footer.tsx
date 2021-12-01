import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OpenURLButton from './OpenURLButton';

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                By{' '}
                <OpenURLButton url='https://github.com/m0hammedimran'>
                    Mohammed Imran
                </OpenURLButton>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        alignItems: 'center',
    },
    text: { color: '#777', fontWeight: '700' },
});
