import { StyleSheet, SafeAreaView, Platform, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import Header from "./src/components/Header.jsx";
import Timer from "./src/components/Timer.jsx";

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" || "SHORT" || "BREAK");
  const {isActive, setIsActive}=useState(false)



  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[currentTime] }]}
    >
      <View
        style={{
          flex:1,
          paddingHorizontal: 15,
          paddingTop: Platform.OS === "android" && 30,
        }}
      >
        <Text style={styles.text}>Pomodoro</Text>
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}
        />
        <Timer time={time} />
        <TouchableOpacity style={styles.button}>
          <Text style={{color:"white", fontWeight:"bold"}}>{isActive?"STOP":"START"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: { fontSize: 32, fontWeight: "bold" },
  button:{
    backgroundColor:"#333333",
    padding:15,
    marginTop:15,
    borderRadius:15,
    alignItems:"center"
  }
});
