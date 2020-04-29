import React from 'react';
import { View,Image, StyleSheet } from 'react-native';





export const Itemphoto =(props)=>{

    return(
        <View style={styles.photoWrapper}>
            <Image
                source={{uri:props.route.params.uri}} style={styles.photo}
            />
        </View>
    )
}


    const styles = StyleSheet.create({
        photoWrapper: {
            marginTop:'15px',
            alignItems: 'center',
            justifyContent: 'center',
        },
        photo: {
            width: 500,
            height: 500,

        }
    });
