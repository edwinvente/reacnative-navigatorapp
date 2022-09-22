import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
// import { Tab3Screen } from "../screens/Tab3Screen";
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TobTapNavigator } from './TopTabNavigator';


export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS /> 
        : <TabsAndoid />
};


const btnTabAndroid = createMaterialBottomTabNavigator();
const TabsAndoid = () => {
  return (
    <btnTabAndroid.Navigator
        sceneAnimationEnabled={true}
        barStyle={{
            backgroundColor: colors.pruple
        }}
        screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
                let iconName:string = '';
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = '⚽️';
                        break;
                    case 'Tab2Screen':
                        iconName = '🦷';
                        break;
                    case 'StackNavigator':
                        iconName = '🍾';
                        break;
                }
                return <Text style={{ color }}>{iconName}</Text>
            }
        })}
    >
      <btnTabAndroid.Screen name="Tab1Screen" options={{title:'Usuario'}} component={ Tab1Screen } />
      <btnTabAndroid.Screen name="Tab2Screen" options={{title:'Equipos'}} component={ TobTapNavigator } />
      <btnTabAndroid.Screen name="StackNavigator" options={{title:'Partidos'}} component={ StackNavigator } />
    </btnTabAndroid.Navigator>
  );
};

const btnTabIOS = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    <btnTabIOS.Navigator
        sceneContainerStyle={{
            backgroundColor:'white'
        }}
        tabBarOptions={{
            activeTintColor:colors.pruple,
            style:{
                borderTopColor:colors.pruple,
                borderTopWidth:0,
                elevation:0
            },
            labelStyle:{
                fontSize: 20
            }
        }}
        screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
                let iconName:string = '';
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = '⚽️';
                        break;
                    case 'Tab2Screen':
                        iconName = '🦷';
                        break;
                    case 'StackNavigator':
                        iconName = '🍾';
                        break;
                }
                return <Text style={{ color }}>{iconName}</Text>
            }
        })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{title:'Usuario', tabBarIcon: (props) => <Text style={{color:props.color}}>⚽️</Text>}} component={ Tab1Screen } /> */}
      <btnTabIOS.Screen name="Tab1Screen" options={{title:'Usuario'}} component={ Tab1Screen } />
      <btnTabIOS.Screen name="Tab2Screen" options={{title:'Equipos'}} component={ TobTapNavigator } />
      <btnTabIOS.Screen name="StackNavigator" options={{title:'Partidos'}} component={ StackNavigator } />
    </btnTabIOS.Navigator>
  );
};