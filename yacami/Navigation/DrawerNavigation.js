import React from 'react'
import {createDrawerNavigator, createAppContainer, createStackNavigator} from 'react-navigation'
import PageAccueil from '../Components/PageAccueil'
import PageShopping from '../Components/PageShopping'
import DetailsPage from '../Components/DetailsPage'
import FormulairePage from '../Components/FormulairePage'

const MyDrawerNavigator = createDrawerNavigator({
    "Accueil": {
        screen: PageAccueil,
    },
    "Shopping": {
        screen: PageShopping,
    },
    "Achat de ticket": {
        screen: PageAccueil,
    },
    "trouver un livreur": {
        screen: PageAccueil,
    },
    "point de vente de gaz": {
        screen: PageAccueil,
    },
    'details':{
        screen: DetailsPage,
        navigationOptions:()=>({
            drawerLabel: ()=>null
        })
    },
    'form':{
        screen: FormulairePage,
        navigationOptions:()=>({
            drawerLabel: ()=>null
        })
    },
},

    {
    initialRouteName:"Accueil",
    contentOptions : {
      activeTintColor: '#6eccde'
    },
})

const MyApp = createAppContainer(MyDrawerNavigator)

export default MyApp