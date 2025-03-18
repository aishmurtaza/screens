import React ,{useEffect}from "react";
import {View,StyleSheet} from "react-native";
import { Image } from 'expo-image';

const Splash=({navigation})=>{
useEffect(()=>{
    setTimeout(()=>{
    navigation.replace("Login");},2000);
    },[]);
return(
<View style={styles.screen}>
<View>
    <Image 
    source={require("../assets/app.png")}
    style={styles.applogo}/>
<Image 
    source={require("../assets/delivery.gif")}
    style={styles.courier}/>
</View>
</View>
)
}
const styles=StyleSheet.create({
    screen:{
        backgroundColor:"#FDFDFC",
        flex:1,
        justifyContent:"center",
        alignItems: "center",
    },
    applogo:{
        resizeMode:"contain",
        width:400,
        height:400, 
        bottom:50, 
    },
    courier:{
        alignSelf:"center",
        width:60,
        height:60,
        botton:200,
    }
});
export default Splash;
