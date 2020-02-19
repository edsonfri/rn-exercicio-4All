import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	Text,
	Linking,
	TouchableHighlight,
	FlatList,
	Image,
	Alert
} from 'react-native'
import axios from 'axios'
import { MapView, Polyline } from 'react-native-maps'
import { server, showError} from '../common'


import foto from '../../assets/Imagens/FOTO.png'
import mapa from '../../assets/Imagens/MAPA2.png'
import ligar from '../../assets/Imagens/LIGAR_copy.png'
import avatar from '../../assets/Imagens/ListaTopo.jpg'
import endereco from '../../assets/Imagens/ENDERECO.png'
import servicos from '../../assets/Imagens/SERVICOS.png'
import comentarios from '../../assets/Imagens/COMENTARIOS.png'
import favoritos from '../../assets/Imagens/FAVORITOS_copy.png'


const initialState = {
    tarefa: []
}

const initialRegion={
	latitude: 37.78825,
	longitude: -122.4324,
	latitudeDelta: 0.0922,
	longitudeDelta: 0.0421,
  }

class TelaPrincipal extends Component {

	state = {
        ...initialState
	}
	
	componentDidMount = () => {
		this.loadTasksById()
	}

	loadTasksById = async () => {
        try {
            const res = await axios.get(`${server}/tarefa/${this.props.navigation.state.params.id}`)
			this.setState({ tarefa: res.data })
			
		} 
		catch (err) {
            showError(err)
        }
    }
	endereco = (endereco) =>{
		Alert.alert(  
            'Edereco:',  
            `${endereco}`,  
            [{  
				text: 'Cancel',  
				onPress: () => console.log('Cancel Pressed'),  
				style: 'cancel',  
			},{text: 'OK', onPress: () => console.log('OK Pressed')},  
            ]  
        )
	}

	dialCall = (number) => {
		let phoneNumber = '';
		if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
		else {phoneNumber = `telprompt:${number}`; }
		Linking.openURL(phoneNumber);
	 };

    render() {
		
		
		return (
            <View style={styles.container}>
                
				<Image source={{uri: this.state.tarefa.urlFoto}} style={styles.background}/>

				<View style={styles.nomeContainer}>
                    <Text style={styles.textTitulo}>{this.state.tarefa.titulo}</Text>
					<View style={styles.imagePerf}>
						<Image source={{uri: this.state.tarefa.urlLogo}} style={styles.avatar} />
					</View>
                </View>
               
                <View style={styles.detalheContainer}>
					<View style={styles.buttonBar}>
						<View style={styles.button} >
							<TouchableHighlight onPress={()=>{this.dialCall(this.state.tarefa.telefone)}}>
								<View>		
									<Image source={ligar} style={styles.imageBar} />
									<Text style={styles.textButtonBar}>Ligar</Text>
								</View>
                            </TouchableHighlight> 
						</View>
						<View style={styles.button} >
							<TouchableHighlight onPress={() => this.props.navigation.navigate('TelaServicos')}>
								<View>		
									<Image source={servicos} style={styles.imageBar} />
									<Text style={styles.textButtonBar}>Serviços</Text>
								</View>
                            </TouchableHighlight> 
						</View>
						<View style={styles.button} >
							
							<TouchableHighlight onPress={() => {this.endereco(this.state.tarefa.endereco)}} >
								<View>
									<Image source={endereco} style={styles.imageBar} />
									<Text style={styles.textButtonBar}>Endereço</Text>
								</View>
							</TouchableHighlight>
							
						</View>
						<View style={styles.button} >
							<Image source={comentarios} style={styles.imageBar} />
							<Text style={styles.textButtonBar}>Comentarios</Text>
						</View>
						<View style={styles.button} >
							<Image source={favoritos} style={styles.imageBar} />
							<Text style={styles.textButtonBar}>Favoritos</Text>
						</View>
					</View>
					<View style={styles.descriptionContainer}>
						<Text style={styles.descriptionText}>{this.state.tarefa.texto}</Text>	
					</View>
                </View>
				
				<View style={styles.mapaContainer}>	
					<View style={styles.mapa}>
						<Image source={mapa} style={styles.mapa}/>
					</View>
					<View style={styles.mapaEndereco}>
						<Text style={styles.textEndereco}>{this.state.tarefa.endereco}</Text>	
						<View style={styles.enderecoPeq}>
							<Image source={endereco} style={styles.imageEnderecoPeq} />
						</View>
					</View>
				</View>

				<View style={styles.comentariosContainer}>
					<FlatList data={this.state.tarefa.comentarios} 
                                keyExtractor={item => `${item.id}`} renderItem={(item)  => 
						<View style={styles.comentariosContainer}>
							<View >
								<Image source={{uri: item.item.urlFoto}} style={styles.avatarComen} />
							</View>
							<View style={{width:'70%', paddingTop:20}}>
								<View >
									<Text style={styles.descriptionComen}>{item.item.nome}</Text>
									<Text style={styles.descriptionComen}>{item.item.titulo}</Text>
									<Text style={styles.descriptionComen}>{item.item.comentario}</Text>
								</View>
							</View>
							<View style={{paddingTop:20}}>
								<Text style={styles.descriptionComen}>{item.item.nota}</Text>
							</View>
						</View>
                    }/>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
		paddingRight: 20,
		paddingLeft: 20,
		backgroundColor: '#F2F3F2'
    },
    background: {
        flex: 3,
	},
	nomeContainer: {
        flex: 0.8,
		fontSize: 30,
		flexDirection: 'row',
		
	},
	textTitulo: {
        color: '#E08B00',
		fontSize: 30,
		alignSelf:'center',
		width: '73%',
		paddingLeft:15
	},
	imagePerf: {
        width: 75, 
        height: 75, 
        bottom: 40, 
        borderRadius: 100,
        backgroundColor: '#ffffff',
        borderColor: '#C0C0C0',
		borderWidth: 0.5,
		alignItems: 'center'
	},
	enderecoPeq: {
        width: 35, 
        height: 35, 
        bottom: 30, 
        borderRadius: 100,
        backgroundColor: '#ffffff',
        borderColor: '#C0C0C0',
		borderWidth: 0.5,
		alignItems: 'center'
	},
	imageEnderecoPeq: {
        width: 40,
        height: 40,
		borderRadius: 100,
		alignContent: 'flex-start',
		justifyContent:'flex-start',
		zIndex: 1,
		
	},
    detalheContainer: {
		flex: 2.3,
		width: '100%',
		backgroundColor: '#fff',
		flexDirection: 'column',
		alignContent: 'center',
		alignItems: 'center',
	},
	mapaContainer: {
        flex: 1.5,
	},
	mapa: {
		height: '80%',
        width: '100%',
	},
	mapaEndereco: {
        alignItems: 'flex-end',
        backgroundColor: '#E08B00',
	},
	textEndereco: {
        paddingRight: 40,
		color: '#fff',
		fontSize: 10,
		alignItems: 'center'
	},
	comentariosContainer: {
		flex: 1.5,
		width: '100%',
		backgroundColor: '#fff',
		flexDirection: 'row',
		paddingLeft: 10
	},
	buttonBar: {
		flexDirection: 'row',
		borderColor: '#F2F2F2',  
        borderBottomWidth: 1,
	},
	button: {
		flexDirection: 'column',
		width: 70,
        height: 70,
       
	},
	descriptionContainer: {
		flexDirection: 'row',
		paddingTop: 10,
		width: '100%',
	},
	descriptionText: {
		color: '#E08B00',
		alignSelf: 'center',
		paddingLeft: 20
	},
	descriptionComen: {
		color: '#E08B00',
		alignSelf: 'flex-start',
		paddingLeft: 15,
		
	},
	textButtonBar: {
        color: '#E08B00',
        fontSize: 11,
		alignSelf: 'center',
		flexDirection: 'column',
		
	},
	imageBar: {
        height: 50,
		width: 50,
		alignSelf: 'center',
		
	},
	avatar: {
        width: 60,
        height: 60,
		borderRadius: 100,
		alignContent: 'flex-start',
		justifyContent:'flex-start',
		zIndex: 1,
		
	},
	avatarComen: {
        width: 75,
        height: 75,
		borderRadius: 100,
        
    },
})

export default TelaPrincipal