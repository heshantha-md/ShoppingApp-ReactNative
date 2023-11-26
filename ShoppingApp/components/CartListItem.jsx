import { StyleSheet, View, Text, Pressable } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

export const CartListItem = ({ index, title, price, quantity, plusButtonOnPress, minusButtonOnPress }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.listFont, styles.title]}>{title}</Text>
            <Text style={[styles.listFont, styles.price]}>{'£' + price}</Text>
            <View style={styles.quantityContainer}>
                <Pressable onPress={plusButtonOnPress}>
                    <View style={styles.buttonContainer}>
                        <Text style={[styles.listFont, styles.buttonIcon]}>+</Text>
                    </View>
                </Pressable>
                <Text style={[styles.listFont, styles.quantity]}>{quantity}</Text>
                <Pressable onPress={minusButtonOnPress}>
                    <View style={styles.buttonContainer}>
                        <Text style={[styles.listFont, styles.buttonIcon]}>-</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 8
    },
    listFont: {
        fontSize: 20,
        fontWeight: '200'
    },
    title: {
        flex: 1
    },
    quantity: {
        width: 25,
        fontWeight: '400',
        textAlign: 'center'
    },
    price: {
        fontWeight: '400',
        marginHorizontal: 8
    },
    quantityContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        width: 25,
        height: 25,
        backgroundColor: 'green',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5
    },
    buttonIcon: {
        fontSize: 15,
        fontWeight: '900',
        color: 'white'
    }
});