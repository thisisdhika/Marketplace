/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler'
import * as React from 'react'
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar'
import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from './screens/Home'
import { Block, Text } from 'galio-framework'
import { StatusBar } from 'react-native'

const Screen404: () => React$Node = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
      <Block flex justifyContent="center" alignItems="center">
        <Text h2 bold style={{ color: '#00AA13' }}>
          404
        </Text>
      </Block>
    </SafeAreaView>
  )
}

const Tab = AnimatedTabBarNavigator()

const App: () => React$Node = () => {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1500)
  }, [])

  return (
    <SafeAreaProvider>
      <StatusBar animated barStyle="dark-content" backgroundColor="#f9f9f9" />
      <NavigationContainer>
        <Tab.Navigator
          appearance={{ floating: true, shadow: true }}
          tabBarOptions={{
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#888888',
            activeBackgroundColor: '#00AA13',
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: string = 'home'

              switch (route.name) {
                case 'Account':
                  iconName = focused ? 'person-circle' : 'person-circle-outline'
                  break

                case 'Orders':
                  iconName = focused ? 'clipboard' : 'clipboard-outline'
                  break

                case 'Chat':
                  iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'
                  break

                default:
                  iconName = focused ? 'home' : 'home-outline'
                  break
              }

              return <Icon name={iconName} size={size} color={color} />
            },
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Orders" component={Screen404} />
          <Tab.Screen name="Chat" component={Screen404} />
          <Tab.Screen name="Account" component={Screen404} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
