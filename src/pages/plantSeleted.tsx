import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { EnviromentButton } from '../components/enviromentButton'
import { Header } from '../components/header'
import { Load } from '../components/load'
import { PlantCardprimary } from '../components/plantCardPrimary'
import api from '../services/api'
import colors from '../styles/colors'
import fonts from '../styles/fonts'



interface EnviromentsProps{
    key:string
    title:string
};

interface PlantsProps{
    id:string
    name:string
    about:string
    water_tips:string
    photo:string
    environments:[string]
    frequency:{
        times:number
        repeat_every:string
    }
};




export function PlantSelected(){

    const[enviroments,setEnviroments]=useState<EnviromentsProps[]>([])
    const[plants,setPlants]=useState<PlantsProps[]>([])
    const[filterPlants,setFilteredPlants]=useState<PlantsProps[]>([])
    const[activeEnvironment,setActiveEnviroment]=useState('all')
    const[loading,setLoading]=useState(true)

    function handleEnvironmentSelected(enviroment:string){
        setActiveEnviroment(enviroment)

        if(enviroment==='all')
            return setFilteredPlants(plants)

        const filtered=plants.filter(plant=>
            plant.environments.includes(enviroment)
            )

        setFilteredPlants(filtered)    
    }

    useEffect(()=>{
        async function fectchEnviroment() {
            const {data}=await api
            .get('plants_environments?_sort=title&_order=asc')
            setEnviroments([{
                key:'all',
                title:'Todos'
            },
            ...data
         ])
        }
        fectchEnviroment()

    },[])


    useEffect(()=>{
        async function fectchEnviroment() {
            const {data}=await api
            .get('plants?_sort=name&_order=asc')
            setPlants(data)
            setLoading(false)
        }
        fectchEnviroment()

    },[])


    if(loading)
        return <Load/>

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Header/>
                <Text style={styles.title}>Em qual ambiente </Text>
                <Text style={styles.subtitle}>Voçe quer colocar sua planta</Text>
            </View>

            <View>
                <FlatList
                    data={enviroments}
                    renderItem={({item})=>(
                        <EnviromentButton
                            title={item.title}
                            active={item.key===activeEnvironment}
                            onPress={()=>handleEnvironmentSelected(item.key)}
                            
                        />
                    )}  
                    horizontal     
                    showsHorizontalScrollIndicator={false} 
                    contentContainerStyle={styles.enviromentList}    
                />
            </View>

            <View style={styles.plants}>
                <FlatList
                    data={filterPlants}
                    renderItem={({item})=>(
                        <PlantCardprimary data={item}/>

                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                />

            </View>
            
          
        </View>


    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,   
        backgroundColor:colors.background   
    },

    header:{
        paddingHorizontal:25
    },
    title:{
        fontSize:17,
        color:colors.heading,
        fontFamily:fonts.heading,
        lineHeight:20,
        marginTop:15
    },
    subtitle:{
        fontFamily:fonts.text,
        fontSize:17,
        lineHeight:20,
        color:colors.heading
    },
    enviromentList:{
        height:40,
        justifyContent:'center',
        paddingBottom:5,
        marginLeft:32,
        marginVertical:32
    },

    plants:{
        flex:1,
        paddingHorizontal:32,
        justifyContent:'center'
    },

    plantCard:{
        
    }
})