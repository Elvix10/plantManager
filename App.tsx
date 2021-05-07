import React from 'react'
import { Welcome } from './src/pages/wecome'
import {useFonts,Jost_400Regular,Jost_600SemiBold} from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading'
import { UserIdentification } from './src/pages/userIdentification'
export default function App(){

  const [fontsLoaded]=useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })


  if(!fontsLoaded)
      return <AppLoading/>
  return(
   //<Welcome/>
    <UserIdentification/>
  )
}