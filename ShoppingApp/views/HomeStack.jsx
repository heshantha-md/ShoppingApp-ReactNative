import { CategoriesView } from './CategoriesView';
import { ItemsView } from './ItemsView';
import { ItemDetailsView } from './ItemDetailsView';
import { CartView } from './CartView';
import { createStackNavigator } from '@react-navigation/stack';

export const HomeStack = () => {
    const Stack = createStackNavigator();
    
    return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#ffffff'}
            }}
        >
            <Stack.Group>
            <Stack.Screen name='CategoriesView' component={CategoriesView} options={{
                title: 'Home'
            }} />
            <Stack.Screen name='ItemsView' component={ItemsView} />
            <Stack.Screen name='ItemDetailsView' component={ItemDetailsView} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name='CartView' component={CartView} />
            </Stack.Group>
        </Stack.Navigator>
    );
}