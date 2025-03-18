import React from "react";
import {Image,Text,View,StyleSheet, TouchableOpacity,TextInput} from "react-native";
import {useFonts,  Amarante_400Regular } from "@expo-google-fonts/amarante";
export default function Login({navigation}){
    const [fontsLoaded] = useFonts({
      Amarante_400Regular
    });
    if (!fontsLoaded) {
      return <Text>Didn't load</Text>;
    }
    return(
     <View style={styles.screen}>
        <View >
            <Image 
            source={require("../assets/app.png")}
            style={styles.applogo}/>
        <View style={styles.line1}/>
        <View style={styles.line2}/>
        <View style={styles.line3}/>
        </View>
            <Text style={styles.text}>Login!</Text>
        
        <View style={styles.container}>
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
               <TouchableOpacity >
                    <Text style={styles.link} >
                        Forgot password?
                    </Text>
               </TouchableOpacity>
                <TouchableOpacity style={[styles.button]}>
                   <Text style={styles.buttontext}>Login</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:19}} onPress={()=>navigation.navigate("Signup")}> 
                    <Text style={[styles.link,{alignSelf:"center"}]}>Don't have an account? Signup</Text>
                </TouchableOpacity>
                </View>
             <View>
        <View style={[styles.line4,{right:97}]}>
        </View>
        <Text style={styles.Navigationtext}>or Login using</Text>
        <View style={[styles.line4,{left:100,bottom:30}]}>
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
        width:250,
        height:250,  
    
    },
    line1:{
        height:1,
        width:100,
        backgroundColor:"#3C2A1A",
        marginTop:-90,
        alignSelf:"center",
    },
    line2:{
        height:1,
        width:68,
        backgroundColor:"#3C2A1A",
        marginTop:8,
        alignSelf:"center",
    },
    line3:{
        height:1,
        width:35,
        backgroundColor:"#3C2A1A",
        marginTop:8,
        alignSelf:"center",
    },
    text:{
        fontFamily:"Amarante_400Regular",
        fontSize:30,
        color:"#3C2A1A",
        alignSelf:"flex-start",
        left:30,
        top:40,
    },
    container:{
        borderColor:"#826042",
        borderWidth:2,
        borderRadius:15,
        width:300,
        height:350,
        top:60,
        backgroundColor:"#D9D9D9",
        top:45,
        alignSelf:"center",
        elevation:100,
    },
    fields:{  
       color:"white",
        borderColor:"#3C2A1A",
        borderWidth:2,
        height:50,
        width:260,
        backgroundColor:"#826042",
        margin:5,
        borderRadius:10,
        marginLeft:10,
        marginTop:20,
        padding:10,
        fontSize:20,
    },
    link:{
        color:"#3C2A1A",
        margin:10,
    },
    button:{
        borderColor:"#3C2A1A",
        backgroundColor:"#826042",
        borderwidth:1,
        width:80,
        height:40,
        alignSelf:"center",
        borderRadius:10,
    },
    line4:{
        height:1,
        width:100,
        backgroundColor:"#3C2A1A",
        alignSelf:"center",
        bottom:10,
    },
    buttontext:{
        color:"white",
        left:10,
        fontWeight:600,
        margin:10,
    },
    Navigationtext:{
        bottom:25,
        color:"#3C2A1A",
        fontSize:14,
        alignSelf:"center",
    },
    icon:{
        width:25,
        height:25,  
        margin:10,
        bottom:20,
    }
});


  