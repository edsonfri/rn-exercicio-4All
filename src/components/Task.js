import React from 'react'
import { 
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Button
} from 'react-native'
import commonStyles from '../commonStyles'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.containerButton}>
                <Button title={props.titulo} onPress={() => this.props.navigation.navigate('TelaPrincipal')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#AAA',
    },
    description: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 15,
    },
    containerButton: {
       width: '100%'
    },
})