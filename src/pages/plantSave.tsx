import React, { useState } from 'react'
import {  Alert, Image, Platform, StyleSheet, Text, View } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import {SvgFromUri} from 'react-native-svg'
import waterdrop from '../assets/waterdrop.png'
import { Button } from '../components/button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import {useRoute} from '@react-navigation/core'
import DataTimePicker ,{ Event} from '@react-native-community/datetimepicker'
import { isBefore } from 'date-fns'
import { PlantProps, savePlant } from '../libs/storage'


interface Params{
    plant: PlantProps
}



export function Plantsave(){

    const [selectedDateTime,setSelectedDataTime]=useState(new Date());
    const [showDatePicker,setShowDatePicker]=useState(Platform.OS=='ios')
    const route=useRoute();
    const {plant}=route.params as Params


    function handleChangeTime(event:Event, dateTime:Date |undefined){
        if(Platform.OS==='android'){
            setShowDatePicker(oldState=>!oldState)
        }

        if(dateTime && isBefore(dateTime, new Date())){
            setSelectedDataTime(new Date())
            return Alert.alert('Escolha uma data valida')
        }

        if(dateTime)
            setSelectedDataTime(dateTime)
    }

    async function handleSave(){
        try {
            await savePlant({
                ...plant,
                dateTimeNotification:selectedDateTime
            })
            
        } catch  {
            Alert.alert('Nao foi possivel Salvar')
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri
                    uri={plant.photo}
                    height={150}
                    width={150}
                />

                <Text style={styles.plantName}>
                    {plant.name}
                </Text>
                <Text style={styles.aboutPlant}>

                  {plant.about}   

                </Text>
            </View>    
                
            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                        <Image
                            source={waterdrop}
                            style={styles.tipImage}
                        />
                        <Text style={styles.tipText}>
                            Lorem ipsum dolor sit amet consectetur
                        </Text>
                    </View>

                    <Text style={styles.alertLabel}>
                        Escolha o melhor horario para ser lembrado:
                    </Text>

                    <DataTimePicker
                        value={selectedDateTime}
                        mode='time'
                        display='spinner'
                        onChange={handleChangeTime}
                    />


                    <Button
                        title='cadastrar planta'
                        onPress={handleSave}
                    />

            </View>
            
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        backgroundColor:colors.shape
    },

    plantInfo:{
        flex:1,
        paddingHorizontal:30,
        paddingVertical:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.shape

    },
    plantName:{
        fontFamily:fonts.heading,
        fontSize:24,
        color:colors.heading,
        marginTop:15,
    },
    aboutPlant:{
        textAlign:'center',
        fontFamily:fonts.text,
        color:colors.heading,
        fontSize:17,
        marginTop:10

    },
    controller:{
        backgroundColor:colors.white,
        paddingHorizontal:20,
        paddingTop:20,
        paddingBottom:getBottomSpace()||20
    },
    tipContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colors.blue_light,
        padding:20,
        borderRadius:20,
        position:'relative',
        bottom:60
    },
    tipImage:{
        width:56,
        height:56,

    },
    tipText:{
        flex:1,
        marginLeft:20,
        fontFamily:fonts.text,
        fontSize:17,
        textAlign:'justify'
    },
    alertLabel:{
        textAlign:'center',
        fontFamily:fonts.complement,
        color:colors.heading,
        fontSize:12,
        marginBottom:5
    }

})

