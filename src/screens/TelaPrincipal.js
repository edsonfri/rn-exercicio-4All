import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	Text,
	Button,
	TouchableHighlight,
	ImageBackground,
	Image,
	Alert
} from 'react-native'

import foto from '../../assets/Imagens/FOTO.png'
import mapa from '../../assets/Imagens/MAPA.png'
import ligar from '../../assets/Imagens/LIGAR_copy.png'
import avatar from '../../assets/Imagens/ListaTopo.jpg'
import endereco from '../../assets/Imagens/ENDERECO.png'

class TelaPrincipal extends Component {

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

    render() {
		
		return (
            <View style={styles.container}>
                
				<ImageBackground  source={foto} style={styles.background}>
					
					
				</ImageBackground>

				<View style={styles.nomeContainer}>
                    <Text style={styles.textTitulo}>
                        LOREM
                    </Text>
                </View>
               
                <View style={styles.detalheContainer}>
					<View style={styles.buttonBar}>
						<View style={styles.button} >
							<Image source={ligar} style={styles.imageBar} />
							<Text style={styles.textButtonBar}>Ligar</Text>
						</View>
						<View style={styles.button} >
							
							<Text style={styles.textButtonBar}>Serviços</Text>
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
							
							<Text style={styles.textButtonBar}>Comentarios</Text>
						</View>
						<View style={styles.button} >
							
							<Text style={styles.textButtonBar}>Favoritos</Text>
						</View>
					</View>
					<View style={styles.descriptionContainer}>
						<Text style={styles.descriptionText}>asdasfasfasfasfsfsdffsdfsdafsafsafsafsdafafafsadfasdasfasfasfasfsfsdffsdfsdafsafsafsafsdafafafsadfsdfsdfsddsfs</Text>	
					</View>
                </View>
				
				<ImageBackground source={mapa} style={styles.mapaContainer}>	
					<View style={styles.mapa}>
						<Text >mapa</Text>	
					</View>
					<View style={styles.mapaEndereco}>
						<Text style={styles.textEndereco}>asdasadfsdfsdfsddsfs</Text>	
					</View>
				</ImageBackground>

				<View style={styles.comentariosContainer}>
					<Image source={avatar} style={styles.avatar} />
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
		backgroundColor: '#E08B00'
		
	},
	nomeContainer: {
        flex: 1,
		fontSize: 30
		
	},
	textTitulo: {
        color: '#E08B00',
		fontSize: 30
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