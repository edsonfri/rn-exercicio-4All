import React, { Component } from 'react'
import {
	StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ImageBackground,
    FlatList,
    TouchableOpacity,
    Platform,
    Button
} from 'react-native'
import axios from 'axios'
import moment from 'moment'
import { server, showError} from '../common'
import commonStyles from '../commonStyles'
import Task from '../components/Task'

const initialState = {
    tarefas: []
}

class TelaInicial extends Component {
    state = {
        ...initialState
    }

    componentDidMount = async () => {
        this.loadTasks()
    }

    loadTasks = async () => {
        try {
            const res = await axios.get(`${server}/tarefa`)
            this.setState({ tarefas: res.data.lista })
        } catch (err) {
            showError(err)
        }
    }
    

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
                        
                            <View>
                            <FlatList data={this.state.tarefas} 
                                keyExtractor={item => `${item.id}`} renderItem={(item)  => 
                                
                                    <TouchableHighlight onPress={() => this.props.navigation.navigate(
                                        'TelaPrincipal', {id: item.item})}>
                                        <Task {...item}/>
                                    </TouchableHighlight>                                
                                
                                }/>
                                
                            </View>
                        
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
        borderColor: '#F2F2F2',
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