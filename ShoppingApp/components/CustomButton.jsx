import { StyleSheet, View, Text, Pressable, Platform } from "react-native";

export const CustomButton = ({ title, style, onPress }) => {
    return (
        <View style={[styles.container, style]}>
            <Pressable 
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => [pressed ? styles.onPressStyle : null,]}
                onPress={onPress}>
                <Text style ={styles.label}>{title.toUpperCase()}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        borderRadius: 8,
        marginVertical: 15,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.55,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    onPressStyle: {
        opacity: 0.5
    },
    label: {
        fontSize: 23,
        fontWeight: '900',
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 10
    }
});