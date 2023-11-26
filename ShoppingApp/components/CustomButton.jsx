import { StyleSheet, View, Text, Pressable, Platform } from "react-native";

export const CustomButton = ({ title, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Pressable 
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => [pressed ? styles.onPress : null,]}>
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
        shadowRadius: 5,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    onPress: {
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