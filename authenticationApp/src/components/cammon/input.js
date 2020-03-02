import React, { Component } from 'react'
import { Text, View,TextInput,StyleSheet } from 'react-native'

const Input = ({text,inputPlaceHolder,onChangeText,value,secureTextEntry})=>
{
    const {inputWrapper,textStyle,inputStyle }=styles;
    return(
        <View style={inputWrapper}>
            <Text style={textStyle}>{text}</Text>
            <TextInput style={inputStyle}
                        secureTextEntry={secureTextEntry}
                        placeholder={inputPlaceHolder}
                        onChangeText={onChangeText}
                        value={value}
            />
        </View>
    )
}

export {Input}

const styles=StyleSheet.create({
    inputWrapper:{
        flexDirection:'row',
        height:50,
        width:'auto',
        borderColor:'#E5E5E5',
        borderBottomWidth:1,
        alignItems:'center'
    },
    textStyle:{
    fontSize:16,
    paddingLeft:20,
    flexGrow:1
    },
    inputStyle:{
        fontSize:16,
        flexGrow:2
    }
})