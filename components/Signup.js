import { Amarante_400Regular } from "@expo-google-fonts/amarante";
import { useFonts } from "expo-font";
import React from "react";
import {Image,Text,View,StyleSheet, TouchableOpacity,TextInput} from "react-native";


export default function Signup({navigation}){
const [fontsLoaded]=useFonts({
    Amarante_400Regular
})
if(!fontsLoaded){
    return <Text>font not loading</Text>
}
 return(
      <View style={styles.screen}>
           <View style={styles.logo}>
               <Image 
               source={require("../assets/app.png")}
               style={styles.applogo}/>
           <View style={styles.line1}/>
           <View style={styles.line2}/>
           <View style={styles.line3}/>
           </View>
    
               <Text style={styles.text}>Signup!</Text>
           <View style={styles.container}>
                <TextInput
                   placeholder="Name"
                   style={[styles.fields,{marginTop:20}]}
                   placeholderTextColor="white"
                  />
                   <TextInput
                   placeholder="Email"
                   style={[styles.fields,{marginTop:20}]}
                   placeholderTextColor="white"
                   keyboardType="email-address"
                  />
               <TextInput
                   placeholder="Password"
                   style={[styles.fields,{marginTop:20}]}
                   secureTextEntry= {true}
                   placeholderTextColor="white"
                  />
                    <TextInput
                   placeholder=" Confirm Password"
                   style={[styles.fields,{marginTop:20}]}
                   secureTextEntry= {true}
                   placeholderTextColor="white"
                  />
                 
                   <TouchableOpacity style={[styles.button]}>
                      <Text style={styles.buttontext}>Signup</Text> 
                   </TouchableOpacity>
                   <TouchableOpacity style={{marginLeft:19}} onPress={()=>navigation.navigate("Login")}>
                       <Text style={[styles.link,{alignSelf:"center"}]}>Already have an account? Login</Text>
                   </TouchableOpacity>
                   </View>
                <View>
           <View style={[styles.line4,{right:97}]}>
           </View>
           <Text style={styles.Navigationtext}>or Signup using</Text>
           <View style={[styles.line4,{left:100,bottom:50}]}>
           </View>
           <View style={{flexDirection:"row"}}>
               <TouchableOpacity>
               <Image
               source={require("../assets/instagram.png")}
               style={styles.icon}
               /></TouchableOpacity>
             <TouchableOpacity>
                <Image
               source={require("../assets/google.png")}
               style={styles.icon}
               />  </TouchableOpacity>
               <TouchableOpacity>
                <Image
               source={require("../assets/twitter.png")}
               style={styles.icon}
               />
               </TouchableOpacity>
           </View>
           </View>
        </View>  
       )
   }
const styles=StyleSheet.create({
    screen:{
        backgroundColor:"#FDFDFC",
        justifyContent:"center",
        alignItems: "center",
        flex:1,
    }, 
   
    applogo:{
        resizeMode:"contain",
        width:200,
        height:200,
        top:-10,  
    },
    line1:{
        height:1,
        width:85,
        backgroundColor:"#3C2A1A",
        marginTop:-85,
        alignSelf:"center",
    },
    line2:{
        height:1,
        width:63,
        backgroundColor:"#3C2A1A",
        marginTop:8,
        alignSelf:"center",
    },
    line3:{
        height:1,
        width:30,
        backgroundColor:"#3C2A1A",
        marginTop:8,
        alignSelf:"center",
    },
    text:{
        fontFamily:"Amarante_400Regular",
        fontSize:30,
        color:"#3C2A1A",
        alignSelf:"flex-start",
        top:30,
        left:30,
    },
    container:{
        borderColor:"#826042",
        borderWidth:2,
        borderRadius:15,
        width:300,
        height:450,
        top:50,
        backgroundColor:"#D9D9D9",
        alignSelf:"center",
        elevation:100,
    },
    fields:{  
       color:"white",
        borderColor:"#3C2A1A",
        borderWidth:2,
        height:40,
        width:260,
        backgroundColor:"#826042",
        borderRadius:10,
        marginLeft:10,
        marginTop:20,
        padding:5,
        fontSize:20,
    },
    link:{
        color:"#3C2A1A",
        margin:30,
    },
    button:{
        borderColor:"#3C2A1A",
        backgroundColor:"#826042",
        borderWidth:1,
        width:80,
        height:40,
        alignSelf:"center",
        borderRadius:10,
        top:18,
        padding:5,
    },
    line4:{
        height:1,
        width:90,
        backgroundColor:"#3C2A1A",
        alignSelf:"center",
        bottom:30,
    },
    buttontext:{
        color:"white",
        left:7,
        top:4,
        fontWeight:600,
        
    },
    Navigationtext:{
        bottom:40,
        color:"#3C2A1A",
        fontSize:14,
        alignSelf:"center",
    },
    icon:{
        width:25,
        height:25,  
        margin:10,
        bottom:28,
    }

});