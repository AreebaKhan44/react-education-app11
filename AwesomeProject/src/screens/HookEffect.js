import React, {useEffect,useState} from "react";
import {View,Text,StyleSheet, FlatList,Image, ActivityIndicator} from "react-native";


const HookEffect=()=>{
    const [myUserData, setMyUserData]  = useState();
    const [isLoaded,setIsLoaded]  = useState(true);

    const getUserData = async()=>{
        try{
            const response= await fetch("https://thapatechnical.github.io/userapi/users.json");
            const myData= await response.json();
            setMyUserData(myData)
            setIsLoaded(false)
            console.log(myData)
            
        }catch (error){
            console.log(error)
        }
        
    };
    useEffect(()=>{
        getUserData();

    },[]);

    return(
        <View style={styles.mainContainer}>
            {isLoaded ? (<View style={styles.loader}><ActivityIndicator size="large" color="#000ff" />
            </View>):(<View>  
                
            
            <Text style={styles.mainHeader}>List Of Students</Text>
            <FlatList data={myUserData} renederItem={({item})=>{return(
            <View style= {styles.card}>
            <View style={styles.imgContainer}>
              <Image style={styles.imgStyle}
              resizeMode="cover"
              source={{uri:item.image}}
              />
        </View>
        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}>Bio Data</Text>
            <Text style={styles.idNumber}>
              {item.id<10 ? `#0${item.id}` : `#{item.id}`}
            </Text>
          </View>
    
            <View style={styles.mainContain}>
            <Text style={styles.myName}>Name : {item.name}</Text>
            <Text style={styles.myName}>email : {item.email}</Text>
            <Text style={styles.myName}>mobile: {item.mobile}</Text>
    
          </View>
    
        </View>
          </View>
                
    )}}

            />
        </View>       
    )
};
</View>
                )}

    const styles= StyleSheet.create({
        loader:{
            minHeight:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        },

        mainContainer :{
            width:"100%",
            minHeight:"100%",
            paddingVertical: 50,
            backgroundColor:"#ebedee",
        
          },
          card:{
            width:250,
            height:350,
            backgroundColor:"#fff",
            borderRadius:5,
            margin:20,
          },
          bioDataContainer:{
            width:"100%",
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            backgroundColor:"#353535",
            paddingVertical:10,
            fontFamily:"JosefinSans_400Regular",
          },
          idNumber:{
            fontSize: 20,
            color: 'rgba(255,255,255,0.5)',
            fontFamily: 'josefinSans_400Regular',
            paddingRight: 5,
        
          },
        
          bioData:{
            color:"#fff",
            fontFamily:"JosefinSans_400Regular",
          },
        
          mainHeader:{
            fontSize:30,
            color:"#a18ce5",
            textAlign:"center",
            fontFamily:"JosefinSans400_Regular",
        
          },
          mainContain:{
            padding:10,
            backgroundColor:"#353535",
            borderBottomLeftRadius:5,
            borderBottomRightRadius:5,
        
          },
          imgContainer:{
            padding:10,
          },
          imgStyle:{
            width:"100%",
            height:180,
        
          },
          myName:{
            fontSize:14,
            color:"#fff",
            marginBottom:10,
            alignSelf:"flex-start",
            texTransform:"capitalize",
            fontFamily:"JosefinSans_400Regular",
        
          },


    })
    export default  HookEffect();





