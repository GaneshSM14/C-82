import * as React from 'react'
import{createDrawerNavigator} from 'react-navigation-drawer'
import { AppTabNavigator } from './TabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu'
import Settings from '../Screens/Settings'
export const DrawerNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator}, 
    settings:{screen:Settings}
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
})