import React from 'react'
import { TouchableOpacity,Text,StyleSheet, TouchableOpacityProps } from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'


interface buttonProps extends TouchableOpacityProps{
    title:string
}



export function Button({title, ...rest}:buttonProps){
    return(
    <TouchableOpacity style={styles.button}>
     
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    )
}



const styles =StyleSheet.create({
    button:{
        backgroundColor:colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        marginBottom:10,
        height:56,
        paddingHorizontal:10
    },

    buttonText:{
        color:colors.white,
        fontSize:24,
        fontFamily:fonts.heading
        
    }


})