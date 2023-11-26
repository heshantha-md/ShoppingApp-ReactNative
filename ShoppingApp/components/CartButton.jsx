import { StyleSheet, View, Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const CartButton = ({ count, onPress }) => {
    function bla() {
        console.log('bla');
    }

    if (count > 0) {
        return (
            <Pressable 
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => [pressed ? styles.onPressStyle : null,]}
                onPress={onPress}>
                <Ionicons name="cart" size={45} />
                <View style={styles.countContainer}>
                    <Text style={styles.count}>{count}</Text>
                </View>
            </Pressable>
        );   
    }

    return <Ionicons name="cart" size={45} />;
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
    onPressStyle: {
        opacity: 0.5
    },
    count: {
        fontSize: 10,
        fontWeight: '900',
        color: 'white',
        textAlign: 'center',
        width: 23
    }
});