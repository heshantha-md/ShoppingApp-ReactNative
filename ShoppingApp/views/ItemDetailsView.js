import { View, Text } from 'react-native'

import BaseView from '../components/BaseView';
import NavigationBarView from '../components/NavigationBarView';

function ItemDetailsView() {
    return (
        <BaseView>
            <NavigationBarView withBackButton={true}>Products</NavigationBarView>
        </BaseView>
    );
}

export default ItemDetailsView;