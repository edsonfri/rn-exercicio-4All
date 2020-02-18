import { Alert, Platform } from 'react-native'

const server = 'http://dev.4all.com:3003'

function showError(err) {
    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
}

export { server, showError }