import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import {Input,MyButton} from './cammon'
import firebase from 'firebase'

class loginForm extends Component {
    state={
        email:'',
        password:'',
        error:'',
        loading:false
    }
    onButtonClicked(){
        const {email,password}=this.state;
        this.setState({
            error:'',
            loading:true
        })
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSucces.bind(this))
        .catch(()=>{
            
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSucces.bind(this))
            .catch(this.onLoginFailed.bind(this));
        });

    }
    onLoginSucces(){
        this.setState({
            email:'',
            password:'',
            error:'',
            loading:false
        })
    }
    onLoginFailed(){
        this.setState({
            error:'Authenticationfailed',
            loading:false
        })

    }
    render() {
        const {error,loading}=this.state;
        
        const errorMsg=error ? (
        <Text style={styles.errorStyle}>{error}</Text>
        ):
        null;

        
        return (
            <View style={styles.loginForm}>
                <View >

                    <Input text="Email" inputPlaceHolder="Enter Email"
                        onChangeText={(text)=>{
                            this.setState({
                                email:text
                            })
                        }}
                        value={this.state.email}
                        />

                       
                </View>
                <View>
                    <Input text="Password" inputPlaceHolder="Enter Password"
                        onChangeText={(text) => {
                            this.setState({
                                password:text
                            }) 
                        }}
                        secureTextEntry
                        value={this.state.password}
                        />
                </View>
                {errorMsg}
               <MyButton
                spiner={loading}
                title='Login'
                onPress={this.onButtonClicked.bind(this)}
                color='#1ab3c1'
               />
             
            </View>
        )
    }
}

export default loginForm

const styles=StyleSheet.create({
    loginForm:{padding:30},
    buttonWrapper:{
        borderRadius:10,
        marginTop:25,
        justifyContent:'center'

    },
    errorStyle:{
        fontSize:20,
        color:'red',
        paddingTop:10,
        alignSelf:'center'

    }

})