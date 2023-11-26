import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import { CategoriesView } from './views/CategoriesView';
import { ItemsView } from './views/ItemsView';
import { ItemDetailsView } from './views/ItemDetailsView';
import { store } from './store/store';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
            <NavigationContainer>
                <stack.Navigator
                  screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: '#ffffff'}
                  }}
                >
                  <stack.Screen name='CategoriesView' component={CategoriesView} options={{
                      title: 'Home'
                  }} />
                  <stack.Screen name='ItemsView' component={ItemsView} />
                  <stack.Screen name='ItemDetailsView' component={ItemDetailsView} />
                </stack.Navigator>
          </NavigationContainer>
      </Provider>
    </>
  );
}
