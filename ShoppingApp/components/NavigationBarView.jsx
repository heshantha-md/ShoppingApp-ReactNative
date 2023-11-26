import { StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import Ionicons from '@expo/vector-icons/Ionicons';

import { CartButton } from './CartButton';

export const NavigationBarView = ({ children, withBackButton}) => {
    const navigation = useNavigation();
    
    return (
        <BlurView intensity={100} style={styles.container}>
            { withBackButton ? (
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle-sharp" size={45} />
                </Pressable>
            ) : null }
            <Text style={[styles.largeTitle, withBackButton ? { textAlign: 'center'} : { textAlign: 'left'}]}>{children}</Text>
            <CartButton count={88} />
        </BlurView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 70,
        paddingHorizontal: 19,
        paddingBottom: 7,
        flexDirection: 'row'
    },
    largeTitle: {
        flex: 1,
        fontSize: 40,
        fontWeight: '700',
    },
});