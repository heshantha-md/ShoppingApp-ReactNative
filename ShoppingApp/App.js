import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';

import { HomeStack } from './views/HomeStack';
import { PurchaseHistoryHomeView } from './views/PurchaseHistoryHomeView';
import { SettingsHomeView } from './views/SettingsHomeView';

export default function App() {
  const Tab = createMaterialBottomTabNavigator()
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent";
  
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
          <NavigationContainer>
              <Tab.Navigator
                initialRouteName='Home'
                activeColor='black'
                inactiveColor='gray'
                barStyle={{backgroundColor: 'white'}}
                screenOptions={{
                  headerShown: false,
                }}
              >
                  <Tab.Screen 
                    name='Home' 
                    component={HomeStack}
                    options={{
                      tabBarLabel: 'Home',
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='home' color={color} size={26} />
                      ),
                    }}
                  />
                  <Tab.Screen
                    name='PurchaseHistory'
                    component={PurchaseHistoryHomeView}
                    options={{
                      tabBarLabel: 'Purchase History',
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='history' color={color} size={26} />
                      ),
                    }}
                  />
                  <Tab.Screen
                    name='Settings'
                    component={SettingsHomeView}
                    options={{
                      tabBarLabel: 'Settings',
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='account-cog' color={color} size={26} />
                      ),
                    }}
                  />
              </Tab.Navigator>
          </NavigationContainer>
      </Provider>
    </>
  );
}
