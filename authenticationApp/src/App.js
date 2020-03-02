import React, { Component } from 'react'
import {View,StyleSheet, Button } from 'react-native'
import firebase from 'firebase'
import Banner from './components/banner'
import LoginForm from './components/loginForm'
import {Spinner,MyButton} from './components/cammon'
export class App extends Component {

state={
    loggedIn:null
}

    componentDidMount(){
        !firebase.apps.length ?
        firebase.initializeApp(
            {
                apiKey: "AIzaSyBNRe1G3ESUIFR7HF9eOo73j4Ky8XF9zoo",
                authDomain: "authapp-15783.firebaseapp.com",
                databaseURL: "https://authapp-15783.firebaseio.com",
                projectId: "authapp-15783",
                storageBucket: "authapp-15783.appspot.com",
                messagingSenderId: "640550799195",
                appId: "1:640550799195:web:a1fe539828cddbf8d0fc7e",
                measurementId: "G-PZSKQRC411"
              }
        ):firebase.app();

        firebase.auth().onAuthStateChanged((user)=>{
            const loggedIn=user ? true: false ;
            this.setState({
                loggedIn
            })
        })
    
    }

    renderContent(){
        const {loggedIn}=this.state;
        switch(loggedIn){
        case true: 
        return(
            <MyButton spinner={false}
             onPress={()=>firebase.auth().signOut()}
            color="#1ab3c1"  title="Logout"/>
           
        )
        case false:
            return(
                <LoginForm/>
            )
            default:
                (
                    <Spinner/>
                )
        }
     
    }
    render() {
        return (
            <View style={styles.appContainer}>
                <Banner text="Authentication"/>  
                {this.renderContent()}
            </View>
        )
    }
}

export default App

const styles=StyleSheet.create({
    appContainer:{
        backgroundColor:'#f1f4f2',
        flex:1
    }
})