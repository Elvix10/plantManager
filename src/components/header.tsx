import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../styles/colors'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import userImg from '../assets/perfil.jpg'
import fonts from '../styles/fonts'
import AsyncStorage from '@react-native-async-storage/async-storage'


export function Header(){
    const[userName,setUserName]=useState<string>()

    useEffect(()=>{
        async function loadStorageUsername() {
            const user= await AsyncStorage.getItem('@plantmanager:user')
            setUserName(user||'')
        }
    },[])

    return(
        <View style={styles.container}>

            <View>
                <Text style={styles.greeting}>Ola</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>
            <Image source={userImg} style={styles.img} />

        </View>
    )
}



const styles=StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:20,
        marginTop:getStatusBarHeight(),
        
        
    },
    img:{
        width:75,
        height:75,
        borderRadius:38
    },
    greeting:{
        fontSize:32,
        color:colors.heading,
        fontFamily:fonts.text
    },

    userName:{
        fontSize:32,
        fontFamily:fonts.heading,
        color:colors.heading,
        lineHeight:40

    }
})
