import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 56,
        backgroundColor: '#1f1e25',

        borderRadius: 8,

        flexDirection: 'row',
        alignItems: 'center',

        marginBottom: 16,
    },

    name: {
        color: '#fff',
        flex: 1,
        fontSize: 16,

        marginLeft: 24
    },

    confirmButton: {
        width: 56,
        height: 56,

        borderRadius: 8,
        backgroundColor: '#31cf67',

        alignItems: 'center',
        justifyContent: 'center'
    },


    deleteButton: {
        width: 56,
        height: 56,

        marginLeft: 8,

        borderRadius: 8,
        backgroundColor: '#e23c44',

        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: '#fff',
        fontSize: 18
    }
});