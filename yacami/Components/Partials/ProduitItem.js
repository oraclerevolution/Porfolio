import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Alert } from 'react-native'
import { Button as Btns } from 'react-native-elements';

export default class ProduitItem extends Component {

    constructor(props){
        super(props)
        this.state={}
        this.alertFunction = this.alertFunction.bind(this)
    }

    alertFunction(){
        return(
            Alert.alert(
                'Attention !',
                'Voulez-vous vraiment commander ce produit ?',
                [
                  {text: 'Plus de details', onPress: () => console.log('Ask me later pressed')},
                  {
                    text: 'Annuler',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                ],
                {cancelable: false},
              )
        )
    }
    render() {
        const { produit } = this.props
        const image = produit.image
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: image}}
                    style={{borderWidth:1,borderColor:'black', height:100}}
                />
                <Text style={{fontWeight:'bold', textAlign:'center', fontSize:16}}>{produit.nom}</Text>
                <Text style={{fontWeight:'bold', textAlign:'center', fontSize:16}}>{produit.prix}</Text>
                <Btns 
                    title="commander"
                    onPress={()=> this.alertFunction()}
                    buttonStyle={{alignSelf:"center"}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderWidth:1,
        margin:6,
        padding:6,
        backgroundColor:'#E4E5E8'
    }
})
