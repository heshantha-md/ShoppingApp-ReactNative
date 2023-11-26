import { StyleSheet, View, Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const CartButton = ({ count }) => {
    return (
        <Pressable>
            <Ionicons name="cart" size={45} />
            <View style={styles.countContainer}>
                <Text style={styles.count}>{count}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    countContainer: {
        position: 'absolute',
        left: 25,
        borderRadius: 100,
        backgroundColor: 'red',
        paddingVertical: 6,
        alignItems: 'center',
        width: 23
    },
    count: {
        fontSize: 10,
        fontWeight: '900',
        color: 'white',
        textAlign: 'center',
        width: 23
    }
});