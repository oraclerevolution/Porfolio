import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TextInput } from 'react-native'
import {Header, Button as Btns} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

export default class DetailsPage extends Component {
    constructor(props){
        super(props)
        this.state={
            heartState: false,
            quantite:1,
            prix: 25000
        }
        this.addLike = this.addLike.bind(this)
    }

    addLike(){
        this.setState({heartState: !this.state.heartState})
    }

    addPlusOne(){
        this.setState({quantite: this.state.quantite + 1})
    }

    addMinusOne(){
        this.setState({quantite: this.state.quantite - 1})
    }

    render() {
        let likeBtns = null
        if (this.state.heartState) {
            likeBtns = <Btns
                type="clear"
                icon={
                    <Icon
                        name="ios-heart"
                        size={23}
                        color="black"
                    />
                }
                buttonStyle={{alignSelf:'flex-end'}}
                onPress={()=>this.addLike()}
            />
        } else {
            likeBtns = <Btns
                type="clear"
                icon={
                    <Icon
                        name="ios-heart-empty"
                        size={23}
                        color="black"
                    />
                }
                buttonStyle={{alignSelf:'flex-end'}}
                onPress={()=>this.addLike()}
            />
        }
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
                    centerComponent={{ text: `DETAILS DU PRODUIT`, style: { color: '#fff', fontSize:19 } }} 
                />
                <Text style={styles.title}> Details de Nike Air Force 2017 </Text>
                <Image
                    source={{uri : "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
                    style={{height:200, margin:6}}
                />
                
                <View style={{flex:0.3, flexDirection:'row',}}>
                    <View style={{alignSelf:'flex-start', width:'50%', padding:5}}>
                        <Text style={{alignSelf:'flex-start', fontWeight:'bold', fontSize:17}}>Nike Air Force 2017</Text>
                        <Text style={{alignSelf:'flex-start', fontWeight:'bold', fontSize:19, color:'#667AB6'}}>{this.state.prix} FCFA</Text>
                    </View>
                    <View style={{alignSelf:'flex-start', width: '50%'}}>
                        {likeBtns}
                    </View>
                </View>
                <Text style={styles.title}>Description</Text>
                <Text style={{margin:3, padding:5, fontSize:16}}>
                    Lorem ipsum dolor site amet Lorem ipsum dolor site amet Lorem ipsum dolor site amet Lorem ipsum dolor site amet Lorem ipsum dolor site amet Lorem ipsum dolor site amet Lorem ipsum dolor site amet Lorem ipsum dolor site amet Lorem ipsum dolor site amet
                </Text>
                <View style={{flex:1,}}>

                    <Text style={styles.title}>Quantité</Text>
                    <View style={{flex:1, flexDirection:'row', margin:3}}>
                        <View style={{flex:0.5}}>
                            <Btns
                                title="-1"
                                onPress={()=> this.addMinusOne()}
                            />
                        </View>
                        <View style={{flex:1}}>
                            <TextInput
                                style={{height:40, textAlign:'center', fontWeight:'bold', fontSize:16}}
                                editable={false}
                                value={this.state.quantite.toString()}
                            />
                        </View>
                        <View style={{flex:0.5}}>
                            <Btns
                                title="+1"
                                onPress={()=> this.addPlusOne()}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={{textAlign:"center", fontSize:17, fontWeight:'bold'}}>Prix total à payer</Text>
                        <Text style={{textAlign:"center", fontSize:17, fontWeight:'bold'}}>{this.state.prix * this.state.quantite} FCFA</Text>
                    </View>
                    <Btns
                        icon={
                            <Icon
                                name="ios-basket"
                                size={23}
                                color="white"
                            />
                        }
                        title="  Commander"
                        buttonStyle={{alignSelf:'center', margin:6}}
                        onPress={()=>console.log('ok')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    title:{
        textAlign:'center', 
        fontWeight:'bold', 
        fontSize:19, 
        marginTop:5
    }
})
