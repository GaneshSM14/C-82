import * as React from 'react'
import react from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import db from '../Config'
import firebase from 'firebase'
export default class Settings extends React.Component{
    constructor(){
        super()
        this.state={
            FirstName:'',
            LastName:'',
            Contact:'',
            Address:'',
            Email:'',
            docid:''
        }
    }
    componentDidMount(){
        this.getUserDetails()
    }
    getUserDetails=()=>{
        db.collection('users').where('Email', '==', firebase.auth().currentUser.email).get()
        .then((doc)=>{
            doc.forEach((document)=>{var details=document.data()
            this.setState({
                Email:details.Email,
                FirstName:details.firstname,
                LastName:details.Lastname,
                Address:details.Address,
                Contact:details.Contact,
                docid:document.id

            })})
        })
    }
    render(){
        return(
            <View>
                <TextInput onChangeText={(Text)=>{this.setState({FirstName:Text})}} placeholder="First Name"/>
                <TextInput onChangeText={(Text)=>{this.setState({LastName:Text})}} placeholder="Last Name"/>
                <TextInput onChangeText={(Text)=>{this.setState({Contact:Text})}} placeholder="Contact"/>
                <TextInput onChangeText={(Text)=>{this.setState({Address:Text})}} placeholder="Address"/>
                <TouchableOpacity>
                    <Text>
                        Save Changes
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}