
import React, { useState } from 'react'
import { Alert, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Button } from '../components/button'
import { useNavigation } from '@react-navigation/core'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import AsyncStorage from '@react-native-async-storage/async-storage'


export function UserIdentification(){

    const[isFocused,setFocused]=useState(false)
    const[isFiled,setIsFiled]=useState(false)
    const[name,setName]=useState<string>()
    const navigation=useNavigation()

    function handleInputBlur(){
        setFocused(false)
        setIsFiled(!!name)
    }

    function handleInputFocus(){
        setFocused(true)
    }

    function handleInputChange(value:string){
        setIsFiled(true)
        setName(value)
    }

    async function handleSubmit(){
            if(!name)
             return Alert.alert('por favor insira seu nome!!')

        await AsyncStorage.setItem('@plantmanager:user',name)

        navigation.navigate('Confirmation')     
    }

    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                style={styles.container}
                behavior={Platform.OS==='ios'?'padding':'height'}
            >
                <View style={styles.content}>
                    <View style={styles.form}>

                        <Text style={styles.title}>Your Name???</Text>

                        <Text style={styles.emoji}>🌝</Text>

                        <TextInput 
                        style={[
                            styles.imput,
                            (isFocused ||isFiled)&&{borderColor:colors.green}
                        ]}
                        placeholder='put your name here'
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        onChangeText={handleInputChange}
                        />

                        <View style={styles.footer}>
                            <Button 
                                title='confirmar'
                                onPress={handleSubmit}
                            />
                        </View>

                        <TouchableOpacity style={styles.footer}>

                        </TouchableOpacity>
                        
                    </View>               
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around'
    },
    content:{
        flex:1,
        width:'100%'
    },
    form:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:54,
        alignItems:'center'

    },

    title:{
        fontSize:24,
        lineHeight:32,
        textAlign:'center',
        color:colors.heading,
        fontFamily:fonts.heading,
        marginTop:20

    },
    emoji:{
        fontSize:44
    },

    imput:{
       borderBottomWidth:1,
       borderColor: colors.gray,
       color: colors.heading,
       width: '100%',
       fontSize:18, 
       marginTop:50,
       padding:10,
       textAlign:'center'
    },

    footer:{
        marginTop:40
    }

})