import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, } from 'react-native'
import {Header, Button as Btns} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import Textarea from 'react-native-textarea'

export default class FormulairePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            numero:"",
            commentaire:""
        }
    }
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
                    centerComponent={{ text: `FORMULAIRE DE COMMANDE`, style: { color: '#fff', fontSize:19 } }}
                    
                    
                />
                <Text style={styles.title}>Remplissez les champs ci-dessous:</Text>
                <View style={{flex:1}}>
                    <View style={{margin:10}}>
                        <Text style={{marginBottom:5}}>Saisissez votre nom:</Text>
                        <TextInput
                            style={{borderWidth:1, height:40, padding:6}}
                            placeholder="Assia Jean N'Goran"
                            onChangeText={(name) => this.setState({name})}
                            value={this.state.name}
                        />
                    </View>
                    <View style={{margin:10}}>
                        <Text style={{marginBottom:5}}>Saisissez votre numero de téléphone:</Text>
                        <TextInput
                            style={{borderWidth:1, height:40, padding:6}}
                            placeholder="+22571902253"
                            onChangeText={(numero) => this.setState({numero})}
                            value={this.state.numero}
                        />
                    </View>
                    <View style={{margin:10}}>
                        <Text style={{marginBottom:5}}>Saisissez votre numero de téléphone:</Text>
                        <TextInput
                            style={{borderWidth:1, height:40, padding:6}}
                            placeholder="+22571902253"
                            onChangeText={(numero) => this.setState({numero})}
                            value={this.state.numero}
                        />
                    </View>
                    <View style={{margin:10}}>
                        <Text style={{marginBottom:5}}>Votre commentaire:</Text>
                        <Textarea
                            containerStyle={styles.textareaContainer}
                            style={styles.textarea}
                            onChangeText={message => this.setState({ message })}
                            maxLength={200}
                            placeholder={"Ecrivez vos commentaires ici ..."}
                        />
                    </View>
                    <View style={{margin:10}}>
                        <Btns
                            title="ENVOYER"
                            onPress={()=>console.log('ok')}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    title:{
        textAlign:'center', 
        fontWeight:'bold', 
        fontSize:19, 
        marginTop:5
    },
    textareaContainer:{
        height:180,
        padding:5,
        backgroundColor: '#efefef'
    },
    textarea:{
        textAlignVertical: 'top',
        height: 170,
        fontSize: 15,
        color: "#000"
    },
})
