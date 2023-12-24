import { Linking,StyleSheet,Text, View,TouchableOpacity,Image} from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>VQA App</Text>
      <Text style={styles.paraStyle}>I am a full Stack Developer</Text>
      <View>
        <Image
        style={styles.imgStyle} source={{uri:"https://img.icons8.com/stickers/100/000000/about.png",}}
         />

      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}>About Me</Text>
        <Text style={[styles.paraStyle,styles.aboutPara, ]}>
          
        Visual question answering systems attempt to correctly answer questions in natural language regarding an image input. The broader idea of this problem is to design systems that can understand the contents of an video similar to how humans do,</Text>

      </View>
      <Text style={styles.mainHeader}>Follow me on Social Network</Text>
      <View style={styles.menuContainer}>

        <TouchableOpacity
        style={styles.buttonStyle}
          onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ")}
          >
            <Image 
            style={styles.iconStyle}
            source={{uri:"https://cdn-icons-png.flaticon.com/512/187/187210.png"}}
            />

        </TouchableOpacity>


        <TouchableOpacity
        style={styles.buttonStyle}
          onPress={()=>Linking.openURL("https://www.cdn-icons-png.flaticon.com/512/187/187210.png")}
          >
            <Image 
            style={styles.iconStyle}
            source={{uri:"https://cdn-icons-png.flaticon.com/512/906/906361.png"}}
            />

        </TouchableOpacity>


        <TouchableOpacity
        style={styles.buttonStyle}
          onPress={()=>Linking.openURL("https://www.instagram.com/thapatechnical/")}
          >
            <Image 
            style={styles.iconStyle}
            source={{uri:"https://cdn-icons-png.flaticon.com/512/2111/2111463.png"}}
            />
            

        </TouchableOpacity>



      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  aboutContainer:{
    display:"flex",
    alignItems:"center",


  },
  imgStyle:{
    width:150,
    height:150,
    borderRadius:100,

  },
  mainHeader:{
    fontSize:18,
    color:"#344055",
    textTransform:"uppercase",
    paddingBottom:10,
    fontFamily:"JosefinSans_400Bold",

  },

  paraStyle:{
    fontSize:18,
    color:"#7d7d7d",
    paddingBottom:30,
  },

  aboutLayout:{
    backgroundColor:"#4c5dab",
    paddingHorizontal:30,
    marginVertical:30,

  },
  aboutSubHeader:{
    fontSize:18,
    color:"#fff",
    textTransform:"uppercase",
    fontWeight:"500",
    marginVertical:15,
    fontFamily:"josefinSans_700_Bold",
    lineHeight:30,
    alignSelf:"center",
  },
  aboutPara:{
    color:"#fff"

  },
  menuContainer:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-evenly",


  },
  iconStyle:{
    width:"100%",
    height:50,
    aspectRatio:1,

  }

});

export default About;

