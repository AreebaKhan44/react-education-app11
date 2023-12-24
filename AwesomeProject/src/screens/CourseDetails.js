import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from "../api/Coourseapi";

const CourseDetails = ({navigation, route}) => {
    const  id= route.params.courseId;
    console.log(id);

    const SelectedCourse = Courses.find((element)=>{
        return id === element.id;
    });
 

    return (
        <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
      <View>
        <Image style={styles.cardImage} source={SelectedCourse.image} resizeMode="contain"/>

      </View>

      <Text style={styles.mainHeader}>{SelectedCourse.title}</Text>

      <Text style={styles.description}>{SelectedCourse.description}</Text>

      <Text style={styles.description}>{SelectedCourse.course1}</Text>
      <Text style={styles.description}>{SelectedCourse.course2}</Text>
      <Text style={styles.description}>{SelectedCourse.course3}</Text>

      <View style={styles.buttonContainer}>
        <Text style={styles.price}>{SelectedCourse.price}</Text>

        <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate("Course")}>
        <Text style={styles.buttonText}>Join Now</Text>
        </TouchableOpacity>

  </View>
      
      </View>
    </View>
  );
  
}


const styles = StyleSheet.create({

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
    textAlign:"left",
    fontFamily:"JosefinSans_400Regular",
    paddingBottom:15,
    lineHeight:20,
    fontSize:16,
    color:"#7d7d7d",
  },

  buttonContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",

  },
  buttonStyle:{
    backgroundColor:"#809fff",
    borderBottomRightRadius:5,
    borderTopRightRadius:5,
    paddingVertical:10,
    paddingHorizontal:18,
    display:"flex",
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

  buttonText:{
    fontSize:20,
    color:"#eee",
    fontFamily:"JosefinSans_500Medium",
    textTransform:"capitalize",

  }
});



export default CourseDetails

