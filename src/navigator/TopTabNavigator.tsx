import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from "../screens/ChatScreen";
import { ContasScreen } from '../screens/ContasScreen';
import { AlbumsScreen } from "../screens/AlbumsScreen";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from "react-native";

const Tab = createMaterialTopTabNavigator();

export const TobTapNavigator = () => {
  const { top:paddingTop } =  useSafeAreaInsets();
  return (
    <Tab.Navigator
        style={{ paddingTop }}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        tabBarOptions={{
            pressColor: colors.pruple,
            showIcon: true,
            indicatorStyle:{
                backgroundColor: colors.pruple
            },
            style:{
                elevation:0,
                shadowColor:'transparent'
            }
        }}
        screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
                let iconName:string = '';
                switch (route.name) {
                    case 'Chat':
                        iconName = '⚽️';
                        break;
                    case 'Contas':
                        iconName = '🦷';
                        break;
                    case 'Albums':
                        iconName = '🍾';
                        break;
                }
                return <Text style={{ color }}>{iconName}</Text>
            }
        })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contas" component={ContasScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}