import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import colors from '../styles/colors'
import { Welcome } from '../pages/wecome'
import { UserIdentification } from '../pages/userIdentification'
import { Confirmation } from '../pages/confirmation'
import { PlantSelected } from '../pages/plantSeleted'
import { Plantsave } from '../pages/plantSave'

const stackRoutes=createStackNavigator()

const AppRoutes:React.FC=()=>(
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle:{
                backgroundColor:colors.white
            }
        }}
    >

        <stackRoutes.Screen 
            name='Welcome'
            component={Welcome}
        />
        <stackRoutes.Screen 
            name='UserIdentification'
            component={UserIdentification}
        />
        <stackRoutes.Screen 
            name='Confirmation'
            component={Confirmation}
        />
         <stackRoutes.Screen 
            name='PlantSelected'
            component={PlantSelected}
        />

        <stackRoutes.Screen 
            name='PlantSave'
            component={Plantsave}
        />    

    </stackRoutes.Navigator>
)


export default AppRoutes;