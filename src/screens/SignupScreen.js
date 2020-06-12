import React, {useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text, Input, Button, Alert} from 'react-native-elements';
import Spacer from "../components/Spacer";
import SigninScreen from './SigninScreen';
import login from '../components/login';
import {aList} from '../../App.js';
import { TouchableOpacity } from "react-native-gesture-handler";

/*
Henry made this fuck you tyler for stealing
Funny sign up screen
AMDG 
*/




class SignupScreen extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {isLoggedIn: false,
        email:"",
        password:""}
        
        console.log(aList);
        this.email = this.email.bind(this);
        this.password = this.password.bind(this);
        this.render = this.render.bind(this);

    }

    //contains the password bar input
    password()
    {
        const [password,setPassword] = useState('');
        return(
            <Spacer>
                <Input label = "Password" 
                value = {this.state.password} 
                onChangeText = {(e)=> {this.setState({password: e})}}
                autoCapitalize = "none"
                autoCorrect = {false}
                secureTextEntry/>
            </Spacer>
        );
    }

    //contains the email bar input
    email()
    {
        const [typedEmail,setEmail] = useState('');
        return(
            <Spacer>
                <Input label = "Email"
                value = {this.state.email} 
                onChangeText = {(e)=> {this.setState({email: e})}}
                autoCapitalize = "none"
                autoCorrect = {false}/>
            </Spacer>
        );
    }

    //render method
    //makes a title asking to sign up
    //adds an email bar and a password bar
    
    render()
    {
        return (
            <View style = {this.styles.container}>  

                {//title
                }
                <Spacer>
                    <Text h3>Sign up</Text>
                </Spacer>

                {//email and password
                }
                <this.email/>

                <this.password/>
                
                {//signin button
                }
                <Spacer>
                    <Button title = "Sign in" 
                    onPress = {()=>{

                        
                        aList.addAccount({email:this.state.email, 
                            password:this.state.password});
                            console.log(aList);
                        
                    }
                    }
                    />
                </Spacer>

                {//have an account button
                }
                <Spacer>
                    <TouchableOpacity onPress={() =>
                    this.props.navigation.navigate("Signin")}>
                            <Text>Have an account?</Text>
                        </TouchableOpacity>
                </Spacer>
                
            </View>
        );
    }

    //stylesheet
    styles = StyleSheet.create({
        container:
        {
            flex:1,
            justifyContent: "center",
            marginBottom:100
        }
    });
}



export default SignupScreen; 