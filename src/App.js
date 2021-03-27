import 'react-native-gesture-handler'
import * as React from 'react'

import { StatusBar } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar'

import { HomeScreen, NotFoundScreen } from './screens'

const Tab = AnimatedTabBarNavigator()

const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1500)
  }, [])

  const tabBarIcon = route => ({ focused, color, size }) => {
    let iconName = 'home'

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
  }

  return (
    <SafeAreaProvider>
      <StatusBar animated barStyle="dark-content" backgroundColor="#f9f9f9" />
      <NavigationContainer>
        <Tab.Navigator
          animatedType="spring"
          animatedOptions={{
            tension: 10,
            friction: 5,
            useNativeDriver: true,
          }}
          appearance={{
            floating: true,
            shadow: true,
          }}
          tabBarOptions={{
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#888888',
            activeBackgroundColor: '#00AA13',
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: tabBarIcon(route),
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Orders" component={NotFoundScreen} />
          <Tab.Screen name="Chat" component={NotFoundScreen} />
          <Tab.Screen name="Account" component={NotFoundScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
