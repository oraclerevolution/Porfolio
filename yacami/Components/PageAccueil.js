import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import {Header, Button as Btns} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 

export default class PageAccueil extends Component {
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
                    centerComponent={{ text: `YACAMI`, style: { color: '#fff', fontSize:19 } }}
                    
                    
                />
                <View style={styles.container_fluid}>
                    <View style={{flex:1, flexDirection:'column', margin:5}}>
                        <ImageBackground source={require('../assets/shopping.jpg')} style={{width: '100%', height:200, marginBottom:5}}>
                            <View style={{flex:1, alignItems:'center', justifyContent:'center', padding:5}}>
                                <Text style={styles.text}>SHOPPING</Text>
                                <Btns
                                    title="Cliquez ici"
                                    onPress={()=>console.log("ok")}
                                    buttonStyle={{margin:5}}
                                />
                            </View>
                        </ImageBackground>

                        <ImageBackground source={require('../assets/livreur.jpg')} style={{width: '100%', height:200, marginBottom:5}}>
                            <View style={{flex:1, alignItems:'center', justifyContent:'center', padding:5}}>
                                <Text style={styles.text}>TROUVER UN LIVREUR</Text>
                                <Btns
                                    title="Cliquez ici"
                                    onPress={()=>console.log("ok")}
                                    buttonStyle={{margin:5}}
                                />
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{flex:1, flexDirection:'column', margin:5}}>
                        <ImageBackground source={require('../assets/ticket.jpg')} style={{width: '100%', height:200, marginBottom:5}}>
                            <View style={{flex:1, alignItems:'center', justifyContent:'center', padding:5}}>
                                <Text style={styles.text}>ACHAT DE TICKET</Text>
                                <Btns
                                    title="Cliquez ici"
                                    onPress={()=>console.log("ok")}
                                    buttonStyle={{margin:5}}
                                />
                            </View>
                        </ImageBackground>

                        <ImageBackground source={require('../assets/gas.jpg')} style={{width: '100%', height:200, marginBottom:5}}>
                            <View style={{flex:1, alignItems:'center', justifyContent:'center', padding:5}}>
                                <Text style={styles.text}>POINT DE VENTE DE GAZ</Text>
                                <Btns
                                    title="Cliquez ici"
                                    onPress={()=>console.log("ok")}
                                    buttonStyle={{margin:5}}
                                />
                            </View>
                        </ImageBackground>

                    </View>
                </View>
                <View style={{backgroundColor:'#557CE3', height:80,}}>
                    <Text style={{textAlign:'center', color:'white',fontSize:12, padding:10}}>© YACAMI - TOUS DROITS RESERVES</Text>
                    <Text style={{textAlign:'center', color:'white',fontSize:12}}>App powered by KLAMA SERVICES ®</Text>
                </View>
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
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize:19,
        textAlign:'center',
        color:'white'
    }
})
