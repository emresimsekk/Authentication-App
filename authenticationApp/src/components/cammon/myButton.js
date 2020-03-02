import React, { Component } from 'react'
import { Text, View,StyleSheet,Button } from 'react-native'
import {Spinner} from './spinner'

const MyButton = ({spinner,title,onPress,color})=>{
  
    const content= spinner ? (
            <Spinner/>
    ) : (

       <Button onPress={onPress}

    color={color}  title={title}/>
                   
        
    )

        return(
            <View style={styles.buttonWrapper}>
                {content}
            </View>
        )
}
export { MyButton}
const styles=StyleSheet.create({

    buttonWrapper:{
        borderRadius:10,
        marginTop:25,
        justifyContent:'center'

    },
})