import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'
import { Feather} from '@expo/vector-icons'
import fonts from '../styles/fonts'
import { useNavigation } from '@react-navigation/core'


export function Welcome(){

    const navigation=useNavigation()

    function handleStart(){
        navigation.navigate('UserIdentification')
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'} 
                suas plantas de{'\n'} 
                de forma facil
            </Text>
            <Image 
                source={wateringImg}
                style={styles.image}
            />

            <Text style={styles.subtitle}>
                Nao esqueça mais de regar suas plantas
                Nos cuidamos de lembrar voçe sempre que precisar.
            </Text>

            <TouchableOpacity
             style={styles.button}  
             onPress={handleStart}  
            >
                 <Text> 
                    <Feather 
                        name='chevron-right'
                        style={styles.buttonIcon}    
                    />
                  </Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}


const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around'
    },
    title:{
        fontSize:28,
        fontWeight:'bold',
        textAlign:'center',
        color:colors.heading, 
        marginTop:38 , 
        fontFamily:fonts.heading,
        lineHeight:34  
    },
    subtitle:{
        textAlign:'center',
        fontSize:18,
        paddingHorizontal:20,
        color:colors.heading,
        fontFamily:fonts.text,
    },
   
    image:{
        width:292,
        height:284
    },

    button:{
        backgroundColor:colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        marginBottom:10,
        height:56,
        width:56,
        paddingHorizontal:10
    },

    buttonIcon:{
        color:colors.white,
        fontSize:32
    }



})