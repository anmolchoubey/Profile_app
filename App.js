import React from 'react';
import {ScrollView, StyleSheet, Text, View,Image ,ImageBackground,Component,TouchableOpacity,Linking} from 'react-native';

export default function App() {
  
  return (
    
    <ScrollView>
    
      <View style={{marginTop:10, justifyContent:"center", flexDirection:"row",backgroundColor:"#34495E"}}>
      <Image style ={{width:60,height:70,borderRadius:100,backgroundColor:"black"}} source={require('./assets/me2.jpg')}></Image>
      <View style={{marginLeft: 0}}>
      <Text style={{fontSize: 25}}>Anmol Choubey</Text>
      <Text style={{fontSize:17}}>Computer Science Engineering</Text>
      <Text style={{fontSize:17}}>VIT University,Chennai</Text>
      
      <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/anmol-choubey-439816177/')}>
  <Text style={{color: 'blue',marginLeft:3}}>LinkedIn Profile
  </Text>
</TouchableOpacity>
</View>
      </View>



     <View style={{marginTop:0,backgroundColor:"#00ccff", justifyContent:"center",flexDirection:"row"}}>
       <Text style={{fontSize:20}}>◤BASIC INFO◢</Text>
       </View>
       <View style={{justifyContent:'center',backgroundColor:"#154360"}}>
          <View style={{marginTop:0,backgroundColor:"red", justifyContent:"center",backgroundColor:"#FA8072"}}>
            <Text style={{fontSize:18,marginTop:15}}>⦿Undergraduate B.Tech Student At Vellore Institute Of Tecnology,Chennai</Text> 
          </View>
          <View style={{marginTop:0,backgroundColor:"#D10A30", justifyContent:"center",backgroundColor:"#FA8072"}}>
            <Text style={{fontSize:18,marginTop:0}}>⦿Stream Of Graduation-Computer Science Engineering(CSE) </Text> 
          </View>
          <View style={{marginTop:0,backgroundColor:"#D10A30", justifyContent:"center",backgroundColor:"#FA8072"}}>
            <Text style={{fontSize:18,marginTop:0}}>⦿App Development Enthusiast,Worked on Android Studio(3.1,3.2,3.3,3.4,3.5) versions</Text> 
          </View>
          <View style={{marginTop:0,backgroundColor:"#D10A30", justifyContent:"center",backgroundColor:"#FA8072"}}>
            <Text style={{fontSize:18,marginTop:0}}>⦿Working On Native App Development Via React Native and Expo</Text> 
          </View>
          <View style={{marginTop:0,backgroundColor:"#D10A30", justifyContent:"center",backgroundColor:"#FA8072"}}>
            <Text style={{fontSize:18,marginTop:0}}>⦿Machine learning Aspirant </Text> 
          </View>
      </View>
<View style={{backgroundColor:"#00ccff",justifyContent:"center", flexDirection:"row"}}>
      <Text style={{fontSize:20}}>◤SKILLS◢</Text>
</View>
<View style={{marginTop:0,backgroundColor:"#FA8072", justifyContent:"center",backgroundColor:"#FA8072"}}>
         <Text style={{fontSize:18,marginTop:0}}>★Excel Business Essentials</Text> 
      </View>
<View style={{marginTop:0,backgroundColor:"#FA8072", justifyContent:"center",backgroundColor:"#FA8072"}}>
         <Text style={{fontSize:18,marginTop:0}}>★Data Science</Text> 
      </View>
<View style={{marginTop:0,backgroundColor:"#FA8072", justifyContent:"center",backgroundColor:"#FA8072"}}>
         <Text style={{fontSize:18,marginTop:0}}>★Python</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#FA8072", justifyContent:"center",backgroundColor:"#FA8072"}}>
         <Text style={{fontSize:18,marginTop:0}}>★c++</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#FA8072", justifyContent:"center",backgroundColor:"#FA8072"}}>
         <Text style={{fontSize:18,marginTop:0}}>★Android Studio</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#FA8072", justifyContent:"center",backgroundColor:"#FA8072"}}>
         <Text style={{fontSize:18,marginTop:0}}>★HTML</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#FA8072", justifyContent:"center",backgroundColor:"#FA8072"}}>
         <Text style={{fontSize:18,marginTop:0}}>★CSS</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#FA8072", justifyContent:"center",backgroundColor:"#FA8072"}}>
         <Text style={{fontSize:18,marginTop:0}}>★JavaScript</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#FA8072", justifyContent:"center",backgroundColor:"#FA8072"}}>
         <Text style={{fontSize:18,marginTop:0}}>★React Native</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#FA8072", justifyContent:"center",backgroundColor:"#FA8072"}}>
         <Text style={{fontSize:18,marginTop:0}}>★MATLAB</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#FA8072", justifyContent:"center",backgroundColor:"#FA8072"}}>
         <Text style={{fontSize:18,marginTop:0}}>★R Studio</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#FA8072", justifyContent:"center",backgroundColor:"#FA8072"}}>
         <Text style={{fontSize:18,marginTop:0}}>★Problem Solving</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#FA8072", justifyContent:"center",backgroundColor:"#FA8072"}}>
         <Text style={{fontSize:18,marginTop:0}}>★Data Structures And Algorithms</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#FA8072", justifyContent:"center",backgroundColor:"#FA8072"}}>
         <Text style={{fontSize:18,marginTop:0}}>★Scratch(UI/UX Design)</Text> 
      </View>
      <View style={{backgroundColor:"#00ccff",justifyContent:"center", flexDirection:"row"}}>
      <Text style={{fontSize:20}}>◤Projects And Contributions◢ </Text>
  </View>
 
      <View style={{marginTop:0,backgroundColor:"#FA8072", justifyContent:"center",backgroundColor:"#FA8072"}}>
  <TouchableOpacity onPress={() => Linking.openURL('https://github.com/anmolchoubey')}>
  <Text style={{fontSize:18,color: 'black',backgroundColor:"#FA8072", justifyContent:"center"}}>
  ★ To view my projects go to my github account
  </Text>
</TouchableOpacity> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#FA8072", justifyContent:"center",backgroundColor:"#FA8072"}}>
  <TouchableOpacity onPress={() => Linking.openURL('https://www.hackerrank.com/anmolchoubey1999')}>
  <Text style={{fontSize:18,color: 'black',backgroundColor:"#FA8072", justifyContent:"center"}}>
  ★ Hacker Rank Profile  [Click Here To Open My HackerRank Profile !]
  </Text>
</TouchableOpacity> 
      </View>
      
  
     

   
    <View style={{backgroundColor:"#00ccff",justifyContent:"center", flexDirection:"row"}}>
      <Text style={{fontSize:20}}>◤Prior Education◢ </Text>
  </View>
  
      <View style={{marginTop:0,backgroundColor:"#FA8072", justifyContent:"center",backgroundColor:"#FA8072"}}>
         <Text style={{fontSize:18,marginTop:0}}>⦿S.J.D.A.V.PUBLIC SCHOOL,CBSA -Class XII(PCMC)(CBSE)</Text> 
      </View>
 
  <View style={{backgroundColor:"#00ccff",justifyContent:"center", flexDirection:"row"}}>
      <Text style={{fontSize:20}}>◤Co-Extra Curricular And Non Academic Experiences◢ </Text>
  </View>
  <View style={{marginTop:0,backgroundColor:"#FA8072", justifyContent:"center",backgroundColor:"#FA8072"}}>
         <Text style={{fontSize:18,marginTop:0}}>⦿Vice Captain of VIT chennai cricket team</Text> 
      </View>

  
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
});