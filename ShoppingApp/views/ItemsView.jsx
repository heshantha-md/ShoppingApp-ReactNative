import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { BaseView } from '../components/BaseView';
import { NavigationBarView } from '../components/NavigationBarView';
import { ListRowView } from '../components/ListRowView';

export const ItemsView = ({ route }) => {
    const products = useSelector((state) => state.products.items).filter((item) => item.catId === route.params.categoryId);

    function renderListItem(itemData) {
        return <ListRowView
                    id ={itemData.item.id}
                    title={itemData.item.title} 
                    price={itemData.item.price} 
                    imageUrl={itemData.item.imageUrl} />;
    }

    return (
        <BaseView>
            <NavigationBarView withBackButton={true}>Categories</NavigationBarView>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={renderListItem}
                contentInset= {{top: 20, bottom: 40}} />
        </BaseView>
    );
}