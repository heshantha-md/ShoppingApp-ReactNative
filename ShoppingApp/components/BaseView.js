import { StyleSheet, View } from 'react-native';

function BaseView({ children }) {
    return <View style={styles.container}>{children}</View>;
};

export default BaseView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12
    }
});