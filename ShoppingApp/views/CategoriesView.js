import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

function CategoriesView() {
    const categories = useSelector(state => state.categories.items);

    function renderCategoryItem(itemData) {
        return (
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        );
    };

    return (
        <View>
            <Text>Categories View</Text>
            <FlatList 
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            />
        </View>
    );
}

export default CategoriesView;