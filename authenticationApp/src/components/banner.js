import React, { Component } from 'react'
import { Text, View,StyleSheet} from 'react-native'

class banner extends Component {
    render() {
        return (
            <View style={styles.bannerContainer}>
                <Text style={styles.bannerText}>{this.props.text}</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    bannerContainer:{
        width:'auto',
        height:180,
        backgroundColor:'#1ab3c1',
        justifyContent:'center',
        alignItems:'center'
    },
    bannerText:{
        fontSize:34,
        color:'#fff',
        textAlign:"center"

    }
})
export default banner
