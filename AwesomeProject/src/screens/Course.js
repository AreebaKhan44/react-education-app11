import { FlatList, StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native'
import React from 'react';
import Courses from '../api/Coourseapi';

const Course = ({ navigation }) => {
  const courseCard=({item})=>{
    return (
          <View style={styles.mainContainer}>
          <View style={styles.courseContainer}>
        <View>
          <Image style={styles.cardImage} source={item.image} resizeMode="contain"/>

        </View>

        <Text style={styles.mainHeader}>{item.title}</Text>

        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate("CourseDetails",
          {
            courseId: item.id,
          })
        }>
          <Text style={styles.buttonText}>Course Details</Text>
          </TouchableOpacity>

    </View>
        
        </View>
      </View>
    );
  
  };
  return (
   <FlatList 
   keyExtractor={(item)=>item.id}
   data={Courses}
   renderItem={courseCard}
    />
  );
};
const styles = StyleSheet.create({
  cardImage:{
    width:"100%",
    height:undefined,
    aspectRatio:1,
  },
  mainContainer:{
    paddingHorizontal:20,
  },
  courseContainer :{
    padding:30,
    backgroundColor : "rgba(255,255,255,0.90)",
    textAlign:"center",
    borderRadius:5,
    shadowColor:"grey",
    shadowOffeset:{width:0, height: 0},
    shadowOpacity:0.5,
    shadowRadius:8,
    elevation:8,
    marginVertical:30,
  },
  mainHeader:{
    fontSize:22,
    color:"#344055",
    textTransform:"uppercase",
    paddingBottom:15,
    textAlign:"center",

  },

  description:{
    textAlign:"center",
    fontSize:16,
    color:"#7d7d7d",
    paddingBottom:20,
    fontFamily:"JosefinSans_300Light",
    lineHeight:20,
    
    
  },

  buttonContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",

  },
  price:{
    backgroundColor:"#344055",
    color:"#eee",
    paddingVertical:10,
    paddingHorizontal:15,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderBottomLeftRadius:1,
    borderTopLeftRadius:1,
    fontSize:20,
    fontFamily:"josefinSans_400Regular",
    textAlign:"center",

  },
  buttonStyle:{
    backgroundColor:"#809fff",
    borderBottomRightRadius:5,
    borderTopRightRadius:5,
    paddingVertical:10,
    paddingHorizontal:18,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },

  buttonText:{
    fontSize:20,
    color:"#eee",
    fontFamily:"JosefinSans_500Medium",
    textTransform:"capitalize",

  }
});


export default Course;

