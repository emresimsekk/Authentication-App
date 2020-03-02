import React, { Component } from 'react'
import {ActivityIndicator,View,StyleSheet } from 'react-native'

const Spinner =()=>{
    return(
        <View style={styles.spinner}>
            <ActivityIndicator/>

        </View>
    )
}
export {Spinner}


const styles=StyleSheet.create({
    spinner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})