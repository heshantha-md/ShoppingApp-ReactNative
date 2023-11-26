import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { GridRowView } from '../components/GridRowView';
import { BaseView } from '../components/BaseView';
import { NavigationBarView } from '../components/NavigationBarView';

export const CategoriesView = () => {
    const categories = useSelector(state => state.categories.items);

    function renderCategoryItem(itemData) {

        return <GridRowView 
                id={itemData.item.id}
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl} />;
    };

    return (
        <BaseView>
            <NavigationBarView>Categories</NavigationBarView>
            <FlatList style={styles.list}
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}
            />
        </BaseView>
    );
}

const styles = StyleSheet.create({
    list: {
        paddingTop: 18
    }
});