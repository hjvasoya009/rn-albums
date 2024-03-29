import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={buttonStyle}
        >
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: '#007AFF',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }, 
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007AFF',
        marginRight:5 ,
        marginLeft: 5
    }
});

export default Button;
