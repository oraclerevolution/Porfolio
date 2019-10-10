import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, ScrollView } from 'react-native'
import {Header, Button as Btns} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import data from '../Helpers/produits'
import ProduitItem from "./Partials/ProduitItem"

export default class PageShopping extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    containerStyle={{margin:0}}
                    leftComponent={
                        <Btns
                            type="clear"
                            icon={
                                <Icon
                                    name="ios-menu"
                                    size={25}
                                    color="white"
                                />
                            }
                            onPress={()=>this.props.navigation.openDrawer()}
                        />
                    }
                    centerComponent={{ text: `SHOPPING`, style: { color: '#fff', fontSize:19 } }} 
                />
                <ScrollView style={styles.container_fluid}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item})=> <ProduitItem produit={item} />}
                        numColumns={2}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    container_fluid:{
        flex:1,
    },
})
