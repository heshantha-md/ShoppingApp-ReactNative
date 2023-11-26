import { StyleSheet, View, Text, FlatList } from "react-native"
import { NavigationBarView } from "../components/NavigationBarView";
import { BaseView } from "../components/BaseView";
import { CustomButton } from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { CartListItem } from "../components/CartListItem";
import { addItem, removeItem } from "../store/bucket";

export const CartView = () => {
    const savedCart = useSelector(state => state.bucket.ids);
    const cart = useSelector(state => state.products.items).filter( item => {
        return savedCart.find( cartItem => cartItem.prodId === item.id );
    });
    const total = cart.reduce((total, current) => title = total + (current.price * savedCart.filter(item => item.prodId === current.id).length), 0);
    const dispatch = useDispatch();

    const plusButtonOnPressHandler = (id) => {
        dispatch(addItem({id: id}));
    }

    const minusButtonOnPressHandler = (id) => {
        dispatch(removeItem({id: savedCart.filter(item => item.prodId === id)[0].id}));
    }
    
    const renderCartItems = (itemData) => {
        return <CartListItem 
                    title={itemData.item.title}
                    price={itemData.item.price}
                    quantity={savedCart.filter(item => item.prodId === itemData.item.id).length}
                    plusButtonOnPress={() => plusButtonOnPressHandler(itemData.item.id)}
                    minusButtonOnPress={() => minusButtonOnPressHandler(itemData.item.id)} />;
    }

    return (
        <>
            <NavigationBarView withCloseButton={true}>Cart</NavigationBarView>
            <BaseView style={styles.baseContainer}>
                <View style={styles.container}>
                    <Text style={styles.listHeaderTitle}>Items in your cart</Text>
                    <FlatList
                        data={cart}
                        keyExtractor={(item) => item.id}
                        renderItem={renderCartItems}
                    />
                </View>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalLable}>Total</Text>
                    <Text style={styles.totalText}>{'£' + total}</Text>
                </View>
                <CustomButton style={styles.buyButton} title={'Pay'} />
            </BaseView>
        </>
    );
}

const styles = StyleSheet.create({
    baseContainer: {
        marginHorizontal: 10,
        marginTop: 10
    },
    container: {
        flex: 1
    },
    totalContainer: {
        marginVertical: 13,
        flexDirection: 'row'
    },
    listHeaderTitle: {
        paddingVertical: 10
    },
    buyButton: {
        marginBottom: 46
    },
    totalLable: {
        flex: 1,
        fontSize: 20,
        fontWeight: '300'
    },
    totalText: {
        fontSize: 20,
        fontWeight: '900',
        color: 'green'
    }
});