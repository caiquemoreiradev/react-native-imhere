import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ParticipantCard } from "../../components/ParticipantCard";
import { styles } from "./styles";

export function Home() {

    const [participants, setParticipants] = useState([]);
    const [newParticipant, setNewParticipant] = useState('');

    function handleAddParticipant() {

        if (participants.includes(newParticipant)) {

            return Alert.alert("Participante existente!", `O participante ${newParticipant} já foi adicionado a lista!`)
        }

        setParticipants([...participants, newParticipant]);
        setNewParticipant('');
    }

    function handleRemoveParticipant(name: string) {

        const updateParticipants = participants.filter(participant => participant !== name);

        Alert.alert("Remover participante", `Tem certeza que deseja remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => {

                    setParticipants(updateParticipants);
                    Alert.alert("Deletado!", `O participante ${name} foi deletado com sucesso!`);
                }
            },

            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Evento React Native
            </Text>

            <Text style={styles.subtitle}>
                Sexta, 25 de agosto de 2022
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='digite o nome do participante...'
                    placeholderTextColor='#6b6b6b'
                    value={newParticipant}
                    onChangeText={(e) => setNewParticipant(e)}
                />

                <TouchableOpacity onPress={handleAddParticipant} style={styles.addButton}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>


            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <ParticipantCard
                        key={item}
                        name={item}
                        onRemove={() => handleRemoveParticipant(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.listEmpty}>
                        <Text style={styles.listEmptyText}>
                            Ainda não existem pessoas na lista? Comece a adicionar agora mesmo
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}