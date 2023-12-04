import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { supabase } from "../supabase";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log("Email:", email);
      console.log("Password:", password);

      if (error) {
        console.log(error);

        Alert.alert("Error", errorMessage);
      } else {
        console.log("Login successful!");
        navigation.navigate("Navigator");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{ padding: "1rem" }}>
      <View>
        <Image
          source={require("../assets/img2.png")}
          style={{ width: 300, height: 200, alignSelf: "center" }}
        />
      </View>
      <Text style={{ marginTop: "2rem", fontSize: 30, fontWeight: "bold" }}>
        Login
      </Text>
      <View>
        <TextInput
          style={{
            backgroundColor: "#cfd0d1",
            marginTop: "3rem",
            borderRadius: "15",
            padding: 15,
            borderwidth: "5px",
            borderColor: "gray",
            borderRadius: 10,
            fontSize: 17,
          }}
          placeholder="Email"
          placeholderTextColor="#9fa0a1"
          value={email}
          onChangeText={(text) => {
            console.log("Email input changed:", text);
            setEmail(text);
          }}
        />
        <TextInput
          style={{
            backgroundColor: "#cfd0d1",
            marginTop: 15,
            borderRadius: "15",
            padding: 15,
            borderwidth: "5px",
            borderColor: "gray",
            borderRadius: 10,
            fontSize: 17,
          }}
          placeholder="Password"
          placeholderTextColor="#9fa0a1"
          value={password}
          onChangeText={(text) => {
            console.log("Password input changed:", text);
            setPassword(text);
          }}
        />
        <Pressable
          style={{
            backgroundColor: "#FF5555",
            padding: 15,
            borderRadius: 10,
            marginTop: "2rem",
          }}
          onPress={handleLogin}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            LOGIN
          </Text>
        </Pressable>
        <Text
          style={{
            textAlign: "center",
            marginTop: 10,
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          <Text>New Users?</Text>
          <Text
            style={{ color: "#FF5555", marginLeft: 5 }}
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
