import { StyleSheet, View, Text, ImageBackground, ScrollView, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
 
import { BaseView } from '../components/BaseView';
import { NavigationBarView } from '../components/NavigationBarView';
import { CustomButton } from '../components/CustomButton';
import { addItem } from '../store/bucket';

export const ItemDetailsView = ({ route }) => {
    const product = useSelector((state) => state.products.items).filter((item) => item.id === route.params.productId)[0];
    const dispatch = useDispatch();

    const customButtonOnPressHandler = () => {
        dispatch(addItem({id: product.id}));
        Alert.alert('Added To Cart', '\nItem successfully added to your shopping cart.', [
            {text: 'OK'},
        ]);
    };

    return (
        <ImageBackground style={styles.imageBackground} source={{url: product.imageUrl}}>
            <NavigationBarView withBackButton={true}>Products</NavigationBarView>
            <BaseView style={styles.container}>
                <View style={styles.detailsContainer}>
                    <View style={styles.textTopContaier}>
                        <Text style={styles.title}>{product.title}</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>{'£' + product.price}</Text>
                        </View>
                    </View>
                    <ScrollView>
                        <Text style={styles.description}>{product.description}</Text>
                    </ScrollView>
                    <CustomButton
                        style={styles.overlay} title={'Add To Cart'} 
                        onPress={customButtonOnPressHandler} />
                </View>
            </BaseView>
        </ImageBackground>
    );
 }

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        height: 400
    },
    container: {
        marginTop: 240,
        backgroundColor: 'white',
    },
    detailsContainer: {
        flex: 1,
        fontSize: 18
    },
    overlay: {
        position: 'absolute',
        right: 0,
        bottom: 30,
        left: 0
    },
    title: {
        flex: 1,
        fontSize: 23,
        fontWeight: '700',
        marginRight: 5,
    },
    price: {
        fontSize: 20,
        fontWeight: '900',
        color: 'white',
        paddingHorizontal: 6
    },
    priceContainer: {
        borderRadius: 20,
        backgroundColor: 'black',
        padding: 8
    },
    textTopContaier: {
        flexDirection: 'row',
        paddingVertical: 12,
        textAlignVertical: 'center',
        alignItems: 'center'
    },
    description: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 150
    }
});