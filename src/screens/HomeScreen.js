import React from "react";
import { Text, StyleSheet ,View,Button} from "react-native";
import Invite from "../components/Invite"
import faker from 'faker';
import { TouchableOpacity } from "react-native-gesture-handler";

//homescreen which displays all of your invites

const HomeScreen = ({navigation}) =>
{
    return (
        <View>
            <TouchableOpacity onPress={() =>
                navigation.navigate("Test")
            }>
                <Invite image = {faker.image.avatar()} 
                accepted = {true} 
                date = {new Date()}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>
                navigation.navigate("Test")
            }>
                <Invite image = {faker.image.avatar()}
                accepted = {false} 
                date = {new Date()}/>
            </TouchableOpacity>
            
        </View>
    );
}

export default HomeScreen;