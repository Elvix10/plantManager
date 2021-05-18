import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import {SvgFromUri} from 'react-native-svg'



export function Plantsave(){
    return(
        <ScrollView>
            <SvgFromUri
                uri=''
                height={150}
                width={150}
            />

            <Text style={styles.plantName}>
                Nome da Planta
            </Text>
            <Text style={styles.aboutPlant}>
                Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit. Culpa corrupti quasi 
                tenetur assumenda tempora. Voluptatibus 
               
            </Text>
            <View>

            </View>
        </ScrollView>
    )
}


const styles=StyleSheet.create({
    container:{

    }

})

