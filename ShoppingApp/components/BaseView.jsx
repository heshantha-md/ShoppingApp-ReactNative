import { StyleSheet, View } from 'react-native';

export const BaseView = ({ children, style }) => {
    return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12
    }
});