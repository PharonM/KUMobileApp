import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput,ScrollView} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import yelpApi from '../api/yelpApi';
import ResultList from '../components/ResultList';
import searchApi from '../api/searchApi';

const SearchScreen = () => {
    const [term, setTerm] = useState("")
    const [searchFunc,result,errMessage] = searchApi()

    const filterResult = price =>{
        return result.filter(result=>{
            return result.price === price
        })
    }

    return (
        <View>
            <View style={styles.inputView} >
                <FontAwesome
                    name="search"
                    size={20}
                    color="black"
                    style={styles.iconStyle} />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Search by name"
                    value={term}
                    onChangeText={(term) => {setTerm(term)}}
                    onEndEditing={() => searchFunc(term) }
                />
                
            </View>
            {errMessage? <Text style={{marginLeft:15}}>errMessage</Text>:null}
            <ScrollView >
                <ResultList title="Cost Effective" result={filterResult("$")}/>
                <ResultList title="Bit Pricer" result={filterResult("$$")}/>
                <ResultList title="Cost Expensive" result={filterResult("$$$")}/>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({

    inputStyle: {
        flex: 1,
        fontSize: 20,

    },
    inputView: {
        height: 50,
        margin: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        borderRadius: 25,
        borderWidth: 2,
    },
    iconStyle: {
        fontSize: 20,
        marginHorizontal: 15,
        alignSelf: "center"

    },
    image:{
        width:150,
        height:100,
        borderRadius:5,
        marginBottom:5,

    }
})

export default SearchScreen