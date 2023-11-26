import { StyleSheet, View, Text, Image, Pressable, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const ListRowView = ({ id, title, price, imageUrl }) => {
    const navigation = useNavigation();

    function listItemPressHandler() {
        navigation.navigate('ItemDetailsView', {productId: id});
    };

    return (
        <View style={styles.container}>
            <Pressable 
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => [
                            styles.pressable,
                            pressed ? styles.buttonPress : null
                        ]}
                onPress={listItemPressHandler}
                >
                <Image 
                    style={styles.image} 
                    source={{uri: imageUrl}} />
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>{'£' + price}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        marginHorizontal: 8,
        marginVertical: 13,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        shadowOffSet: { width: 0, height: 0 },
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    pressable: {
        flex: 1,
    },
    buttonPress: {
        opacity: 0.5
    },
    image: {
        flex: 1,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    innerContainer: {
        flexDirection: 'row',
        padding: 12,
    },
    title: {
        fontWeight: 'bold',
        flex: 1,
        alignSelf: 'center'
    },
    priceContainer: {
        backgroundColor: 'black',
        paddingVertical: 4,
        paddingHorizontal: 14,
        borderRadius: 20,
        justifyContent: 'center'
    },
    price: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
});