import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, FlatList, ScrollView } from 'react-native'
import yelpApi from '../api/yelpApi'

const ShowResultScreen = ({ route }) => {
    const item = route.params
    const id = item.id
    const [result, setResult] = useState("")
    const [photo, setPhoto] = useState([])
    const [location, setLocation] = useState("")

    const getResult = async () => {
        const response = await yelpApi.get(`/${id}`)
        setResult(response.data)
        setPhoto(response.data.photos)
        setLocation(response.data.location)
    }
    useEffect(() => {
        getResult(id)
    }, [])
    return (
        <View >
            <View style={styles.imageWrapper}>
                <ImageBackground source={{ uri: result.image_url }} style={styles.ImgBackground}>
                    <View style={styles.textimg}>
                        <Text style={styles.headerText}>{result.name}</Text>
                    </View>
                </ImageBackground>
            </View>
            <FlatList
                horizontal
                data={photo}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.resultContainer}>
                            <Image source={{ uri: item }} style={styles.image} />
                        </View>
                        
                    )
                }}
            />
            <View>
                <Text style={styles.infoText}>🗺Location: {location.display_address}</Text>
                <Text style={styles.infoText}>☎Phone: {result.display_phone}</Text>
                <Text style={styles.infoText}>⭐Rating: {result.rating}</Text>
                
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 150,
        borderRadius: 5,
        marginBottom: 10,

    },
    imageWrapper: {
        height: 200,
        width: "100%",
        overflow: "hidden",
        marginBottom:20
    },
    textimg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImgBackground: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    headerText: {
        fontSize: 40,
        color: 'white',
        fontWeight:'bold',
        padding:10,
    },
    resultContainer: {
        marginLeft: 15,
    },
    infoText:{
        fontSize:20,
        marginBottom:10
    }

})

export default ShowResultScreen
