import { StyleSheet, Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';

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
            <Pressable>
                <Ionicons name="cart" size={45} />
            </Pressable>
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