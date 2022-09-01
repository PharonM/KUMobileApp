import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image , TouchableOpacity} from 'react-native'


const ResultList = ({ title, result }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={result}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate('ShowResult',{id: item.id})}>
                            <View style={styles.resultContainer}>
                            <Text style={styles.resultTitle}> {item.name}</Text>
                            <Image source={{ uri: item.image_url }} style={styles.image} />
                            <Text>
                                {item.rating} Stars, {item.review_count} Reviews
                            </Text>
                        </View>
                        </TouchableOpacity>
                        
                    )
                }}
            />
        </View>)
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,

    },
    resultTitle: {
        fontSize: 15,

    },
    image: {
        width: 200,
        height: 150,
        borderRadius: 5,
        marginBottom: 10,

    },
    container: {
        marginBottom: 5,
        marginTop:10
    },
    resultContainer: {
        marginLeft: 15,
    }
}
)

export default ResultList;