import { StyleSheet, View, Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

function NavigationBarView({ children, withBackButton }) {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            {withBackButton ? (
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle-sharp" size={45} />
                </Pressable>
            ) : null}
            <Text style={[styles.largeTitle, withBackButton ? { textAlign: 'center'} : { textAlign: 'left'}]}>{children}</Text>
            <Pressable>
                <Ionicons name="cart" size={45} />
            </Pressable>
        </View>
    );
}

export default NavigationBarView;

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        marginHorizontal: 7,
        paddingBottom: 7,
        flexDirection: 'row'
    },
    largeTitle: {
        flex: 1,
        fontSize: 40,
        fontWeight: '700',
    },
});