import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Participants } from '../../components/Participants'

import { styles } from './styles'

export function Home() {

    function handleAddParticipant() {
        console.log('Você precionou o botão Adicionar!')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>
            <Text style={styles.eventDate}>
                Sexta-feita, 03 de Março de 2023
            </Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input} 
                    placeholder='Nome do participante'
                    placeholderTextColor={'#fff'}    
                    //keyboardType='numeric'
                    autoCapitalize='characters'
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleAddParticipant}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <Participants />
        </View>
    )
}