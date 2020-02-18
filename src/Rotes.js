import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import TelaInicial from './screens/TelaInicial'
import TelaPrincipal from './screens/TelaPrincipal'
import TelaServicos from './screens/Servicos'

const screens = {
    TelaInicial: {
        screen: TelaInicial,        
        navigationOptions: ({ navigation }) => ({
            title: null,
            headerShown: false,
          }),
    },
    TelaPrincipal:{
        screen: TelaPrincipal,
        navigationOptions: ({ navigation }) => ({
            title: 'aaa',
            headerStyle: { backgroundColor: '#E08B00'},
            headerTitleStyle: { fontSize: 20, color: '#fff'},
            headerTitleAlign: 'center',
          }),
    },
    TelaServicos: {
        screen: TelaServicos,        
        navigationOptions: ({ navigation }) => ({
            title: 'Serviços',
            headerStyle: { backgroundColor: '#E08B00'},
            headerTitleStyle: { fontSize: 20, color: '#fff'},
            headerTitleAlign: 'center',
          }),
    }
}

const ScreenStack = createStackNavigator(screens)

export default createAppContainer(ScreenStack)