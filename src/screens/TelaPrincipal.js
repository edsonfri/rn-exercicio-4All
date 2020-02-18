import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	Text,
	Linking,
	TouchableHighlight,
	ImageBackground,
	Image,
	Alert
} from 'react-native'
import axios from 'axios'
import { server, showError} from '../common'

import foto from '../../assets/Imagens/FOTO.png'
import mapa from '../../assets/Imagens/MAPA.png'
import ligar from '../../assets/Imagens/LIGAR_copy.png'
import avatar from '../../assets/Imagens/ListaTopo.jpg'
import endereco from '../../assets/Imagens/ENDERECO.png'
import servicos from '../../assets/Imagens/SERVICOS.png'
import comentarios from '../../assets/Imagens/COMENTARIOS.png'
import favoritos from '../../assets/Imagens/FAVORITOS_copy.png'


const initialState = {
    tarefa: []
}

class TelaPrincipal extends Component {

	state = {
        ...initialState
	}
	
	componentDidMount() {
		this.loadTasksById()
	}

	loadTasksById = async () => {
        try {
            const res = await axios.get(`${server}/tarefa/${this.props.navigation.state.params.id}`)
            this.setState({ tarefa: res.data })
        } catch (err) {
            showError(err)
        }
    }
	endereco(){
		Alert.alert(  
            'Edereco',  
            'My Alert Msg',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => console.log('OK Pressed')},  
            ]  
        );  
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
                    <Text style={styles.textTitulo}>
                        {this.state.tarefa.titulo}
                    </Text>
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
							
							<TouchableHighlight title="" onPress={() => this.endereco()} >
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
				
				<ImageBackground source={mapa} style={styles.mapaContainer}>	
					<View style={styles.mapa}>
						<Text >mapa</Text>	
					</View>
					<View style={styles.mapaEndereco}>
						<Text style={styles.textEndereco}>{this.state.tarefa.endereco}</Text>	
					</View>
				</ImageBackground>

				<View style={styles.comentariosContainer}>
					<Image source={{uri: this.state.tarefa.urlLogo}} style={styles.avatar} />
					<Text>
                        comentarios
                    </Text>
                    
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
        flex: 1,
		fontSize: 30
		
	},
	textTitulo: {
        color: '#E08B00',
		fontSize: 30,
		paddingTop: 12
    },
    detalheContainer: {
        flex: 2,
		backgroundColor: '#fff',
		flexDirection: 'column',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center'
	},
	mapaContainer: {
        flex: 1.5,
        
	},
	mapa: {
        
        height:80,
	},
	mapaEndereco: {
        alignItems: 'flex-end',
        backgroundColor: '#E08B00',
	},
	textEndereco: {
        
        color: '#fff',
	},
	comentariosContainer: {
        flex: 1.5,
        backgroundColor: '#fff'
	},
	buttonBar: {
		flexDirection: 'row',
		borderColor: '#AAA',  
        
	},
	button: {
		flexDirection: 'column',
		width: 70,
        height: 70,
       
	},
	descriptionContainer: {
		flexDirection: 'row',
		paddingTop: 10
	},
	descriptionText: {
		color: '#E08B00'
	},
	textButtonBar: {
        color: '#E08B00',
        fontSize: 11,
		alignSelf: 'center',
		flexDirection: 'column',
		borderBottomWidth: 1,
	},
	imageBar: {
        height: 50,
		width: 50,
		alignSelf: 'center',
		
	},
	avatar: {
        width: 75,
        height: 75,
		borderRadius: 100,
        
        resizeMode: 'contain',
    },
})

export default TelaPrincipal