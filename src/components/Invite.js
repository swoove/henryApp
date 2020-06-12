import React from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';



//Invite object
//Displays the name of the event, a picture, and a date

const Invite = (props) =>
{
    var icon = props.image;
    return(
        <View style = {styles.button}>
        
            <Image style = {styles.image} 
            source={{uri: props.image}} />
            <Content style= {styles.content} 
            title = {props.title} 
            accepted = {props.accepted}
            date = {props.date}>
            
            </Content>

        </View>

    );
    
}

//the content of the invite such as the title
//date and if it was accepted
const Content = (props) =>
{
    let text;
    let color;
    let textAccepted;
    if(props.accepted === true)
    {
        text = "Accepted";

        textAccepted={
            fontSize:15,
            alignSelf:"flex-start",
            flexDirection:'column',
            left:15,
            margin:5,
            color:'green'
            }
        
    }

    else
    {
        text = "Not Accepted";
        textAccepted={
            fontSize:15,
            alignSelf:"flex-start",
            flexDirection:'column',
            left:15,
            margin:5,
            color:'red'
            }
    }

    return (
        <View style = {styles.content}>
            <Text style = {styles.textMetaData}>{props.date.toString()}</Text>
            <Text style = {styles.textTitle}>Test</Text>
            <Text style = {textAccepted}>{text}</Text>
        </View>

        
       
    );
    
}

const styles = StyleSheet.create({
    image:{
        width:100,
        height:100,
        borderRadius: 4
    },

    button:{
        margin:10, 
        flexDirection: 'row'
    },

    textTitle:{
        fontSize: 30,
        left:20,
        alignSelf: 'flex-start',
        flexDirection:"column"
        
    },

    textMetaData:{
        fontSize:15,
        alignSelf:"flex-start",
        left: 15 ,
        flexDirection:'column',
        margin:5
    },

    textAccepted:{
        fontSize:15,
        alignSelf:"flex-start",
        flexDirection:'column',
        left:15,
        margin:5
    },


    content:{
        flexDirection:'column',
        alignSelf:'center'
        
    }
});

export default Invite;