import React from 'react'
import { 
    StyleSheet,
    Text,
    View
} from 'react-native'
import commonStyles from '../commonStyles'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.containerButton}>
                <Text style={styles.description}>
                    {props.item}
                </Text>
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
        alignSelf: 'center',
        color: 'orange',
        fontSize: 15,
    },
    containerButton: {
       width: '100%'
    },
})