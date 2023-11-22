import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesView from './views/CategoriesView'
import ItemsView from './views/ItemsView'
import ItemDetailsView from './views/ItemDetailsView'

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <stack.Navigator>
            <stack.Screen name='CategoriesView' component={CategoriesView} options={{
                title: 'Home',
            }} />
            <stack.Screen name='ItemsView' component={ItemsView} />
            <stack.Screen name='ItemDetailsView' component={ItemDetailsView} />
          </stack.Navigator>
    </NavigationContainer>
  );
}
