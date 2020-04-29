import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {View, Text, StyleSheet,Image, ScrollView, FlatList,TouchableOpacity,ActivityIndicator} from "react-native";
import {getProhotTC} from "../bll/ListPhotoReducer";



export const ListPhoto = ({navigation: {navigate}}) => {


    const {photo, loading, error} = useSelector(    (store) =>store.photo );
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProhotTC())
    }, []);



    return (
         <ScrollView>
            <View style={styles.listPhotowrapper}>
                <Text style={styles.errorMessage}>{error}</Text>
                {loading ? <ActivityIndicator size="large" color="#0000ff"/> : (
                    <FlatList
                        data={photo}
                        renderItem={({item}) =>
                            <TouchableOpacity onPress={() => navigate('Itemphoto', {uri: item.urls.full})}>
                                <Text style={styles.userName}>{item.user.name}</Text>
                                <Image key={item.id} source={{uri: item.urls.regular}} style={styles.image}/>
                                <Text style={styles.userDescription}>{item.alt_description}</Text>
                            </TouchableOpacity>
                        }
                    />
                )}
            </View>
         </ScrollView>
    )
}


const styles = StyleSheet.create({
    listPhotowrapper: {
        marginTop: '15px',
        display:'flex',
        backgroundColor: '#bfbfbf',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userName: {
        marginTop: '15px',
        fontWeight: 'bold',
        fontSize: 18,
    },
    userDescription: {

        fontSize: 13,
    },
    errorMessage:{
        fontWeight: 'bold',
        fontSize: 28,
        color:'#ff0066'
    },
    image: {
        height: 500,
        width: 500
    }
})
