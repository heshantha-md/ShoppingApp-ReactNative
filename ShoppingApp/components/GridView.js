import { StyleSheet, View, Text, Pressable, Platform, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function GridView({ id, title, imageUrl }) {
    const navigation = useNavigation();

    function gridItemPressHandler() {
        navigation.navigate('ItemsView', {
            categoryId: id,
        })
    };
    
    return (
        <View style={styles.container}>
            <Pressable 
                android_ripple={{ color: '#ccc'}} 
                style={({pressed}) => [
                            styles.button, 
                            pressed ? styles.buttonPressed : null,
                        ]}
                onPress={gridItemPressHandler}>
                        <ImageBackground style={styles.image} source={{uri: imageUrl}}>
                            <View style={styles.innerContainer}>
                                <Text style={styles.title}>{title}</Text>
                            </View>
                        </ImageBackground>
            </Pressable>
        </View>
    );
}

export default GridView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 8,
        height: 130,
        margin: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowRadius: 5,
        shadowOffSet: { width: 0, height: 0 },
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    image: {
        flex: 1,
        borderRadius: 8,
        overflow: 'hidden'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    }
});