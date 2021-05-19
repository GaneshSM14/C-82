import * as React from 'react'
import{View,Text} from 'react-native'
import{SafeAreaProvider} from 'react-native-safe-area-context'
import {Header,Icon} from 'react-native-elements'
export default class MyHeader extends React.Component{
    render(){
        return(
            <SafeAreaProvider>
            <View>
                <Header
  leftComponent={<Icon type='font-awesome'name='bars' onPress={()=>{this.props.navigation.toggleDrawer()}}/> }
  centerComponent={{ text: 'DonateScreen', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
            </View>
            </SafeAreaProvider>
        )
    }
}