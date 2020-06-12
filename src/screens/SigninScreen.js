import React, {useState} from 'react';
import {View,StyleSheet} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import {Text, Input, Button} from 'react-native-elements';
import Spacer from "../components/Spacer";
import SignupScreen from './SignupScreen';
import login from '../components/login';
import {aList} from '../../App.js';

/*
Henry made this fuck you tyler for stealing
Funny sign in screen
AMDG
*/


class SigninScreen extends React.Component
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
                <Spacer>
                    <Text h3>Sign in</Text>
                </Spacer>
                <this.email/>

                <this.password/>
                
                <Spacer>
                    <Button title = "Sign in" 
                    onPress = {()=>{

                        if(aList.containsAccount({
                        email:this.state.email,
                        password:this.state.password}) == true)
                        {
                            console.log("ArrayList");
                            this.props.navigation.navigate('Account')
                        }
                        
                    }
                    }
                    />
                </Spacer>
                <Spacer>
                    <TouchableOpacity onPress={() =>
                this.props.navigation.navigate("Signup")}>
                        <Text>Need an account?</Text>
                    </TouchableOpacity>
                </Spacer>
                
                

                
            </View>
        );
    }

    styles = StyleSheet.create({
        container:
        {
            flex:1,
            justifyContent: "center",
            marginBottom:100
        }
    });
}


export default SigninScreen; 