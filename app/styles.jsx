import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    title: {
        marginBottom: 30,
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        color: '#800f2f',
    },

    layout: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    pressable: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 50,
        borderWidth: 1,
        backgroundColor: '#800f2f',
        borderColor: '#D1D5DB',
        borderRadius: 7,
    }
})

export default styles