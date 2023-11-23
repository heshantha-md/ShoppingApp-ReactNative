import { View, Text } from 'react-native'

import BaseView from '../components/BaseView';
import NavigationBarView from '../components/NavigationBarView';

function ItemsView() {
    return (
        <BaseView>
            <NavigationBarView withBackButton={true}>Categories</NavigationBarView>
        </BaseView>
    );
}

export default ItemsView;