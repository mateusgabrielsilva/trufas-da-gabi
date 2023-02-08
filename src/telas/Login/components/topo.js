import React from "react";
import { StyleSheet, Image, Dimensions } from 'react-native';

import imageLogin from '../../../../assets/Login/imageLogin.png'

const width = Dimensions.get('screen').width;

export default function Topo(){
    return <>
        <Image source={imageLogin} style={estilos.topo} />
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    }
})