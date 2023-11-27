import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import { CategoriesView } from './views/CategoriesView';
import { ItemsView } from './views/ItemsView';
import { ItemDetailsView } from './views/ItemDetailsView';
import { CartView } from './views/CartView';
import { store } from './store/store';

const stack = createStackNavigator();

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
                  <stack.Group>
                    <stack.Screen name='CategoriesView' component={CategoriesView} options={{
                        title: 'Home'
                    }} />
                    <stack.Screen name='ItemsView' component={ItemsView} />
                    <stack.Screen name='ItemDetailsView' component={ItemDetailsView} />
                  </stack.Group>
                  <stack.Group screenOptions={{ presentation: 'modal' }}>
                    <stack.Screen name='CartView' component={CartView} />
                  </stack.Group>
                </stack.Navigator>
          </NavigationContainer>
      </Provider>
    </>
  );
}
