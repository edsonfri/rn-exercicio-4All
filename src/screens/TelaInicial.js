import React, { Component } from 'react'
import {
	StyleSheet,
    Text,
    View,
    ImageBackground,
    FlatList,
    TouchableOpacity,
    Platform,
    Button
} from 'react-native'

import todayImage from '../../assets/Imagens/ListaTopo.jpg'
import moment from 'moment'
import commonStyles from '../commonStyles'
import Task from '../components/Task'


class TelaInicial extends Component {
    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

		return (
            <View style={styles.container}>
                <View  style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.title2}>{today}</Text>
                    </View>
                </View>
                <View style={styles.taskContainer}>
                    <View>
                        <Button title="aa" onPress={() => this.props.navigation.navigate('TelaPrincipal')} />
                    </View>
                    
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    background: {
        flex: 3,
        backgroundColor: '#E08B00',
    },
    taskContainer: {
        flex: 7,
        borderBottomWidth: 2,
        borderColor: '#AAA',
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
        
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10,
    },
    title2: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        
        marginLeft: 20,
        marginBottom: 10,
    },
    
})

export default TelaInicial