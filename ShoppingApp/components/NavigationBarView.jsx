import { StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { BlurView } from 'expo-blur';
import Ionicons from '@expo/vector-icons/Ionicons';

import { CartButton } from './CartButton';

export const NavigationBarView = ({ children, withBackButton, withCloseButton}) => {
    const items = useSelector(state => state.bucket.ids);
    const navigation = useNavigation();

    function cartButtonPressHandler() {
        navigation.navigate('CartView', {});
    };
    
    return (
        <BlurView intensity={100} style={styles.container}>
            { withBackButton ? 
                    <Pressable  
                        android_ripple={{color: '#ccc'}}
                        style={({pressed}) => [pressed ? styles.onPressStyle : null,]}
                        onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-circle-sharp" size={45} />
                    </Pressable> 
                : null }
            <Text style={[styles.largeTitle, withBackButton ? { textAlign: 'center'} : { textAlign: 'left'}]}>{children}</Text>
            {withCloseButton && !withBackButton ? 
                <Pressable  
                    android_ripple={{color: '#ccc'}}
                    style={({pressed}) => [pressed ? styles.onPressStyle : null,]}
                    onPress={() => navigation.goBack()}>
                    <Ionicons name="close-circle-outline" size={45} />
                </Pressable>
             :  <CartButton count={items.length} onPress={cartButtonPressHandler} />}
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
    onPressStyle: {
        opacity: 0.5
    },
});