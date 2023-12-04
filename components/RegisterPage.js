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
const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        name,
        password,
      });

      if (error) {
        Alert.alert("Error", error.message);
      } else {
        const { data, error } = await supabase.from("user").upsert([
          {
            email,
            name,
            password,
          },
        ]);

        if (error) {
          Alert.alert("Error", "Failed to add user data to the table");
        } else {
          Alert.alert("Success", "Registration successful!");
          navigation.navigate("Login");
        }
      }
    } catch (error) {
      console.error("Error registering:", error.message);
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
      <Text style={{ marginTop: "1rem", fontSize: 30, fontWeight: "bold" }}>
        Register
      </Text>
      <View>
        <TextInput
          style={{
            backgroundColor: "#cfd0d1",
            marginTop: "1rem",
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
            setEmail(text);
            console.log("Email:", text);
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
          placeholder="Name"
          value={name}
          placeholderTextColor="#9fa0a1"
          onChangeText={(text) => {
            setName(text);
            console.log("Name:", text);
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
          placeholder=" Password"
          placeholderTextColor="#9fa0a1"
          secureTextEntry
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            console.log(" Password:", text);
          }}
        />
        <Pressable
          style={{
            backgroundColor: "#FF5555",
            padding: 15,
            borderRadius: 10,
            marginTop: "2rem",
          }}
          onPress={handleRegister}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            REGISTER
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
          <Text>Join Us Before?</Text>
          <Text
            style={{ color: "#FF5555", marginLeft: 5 }}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;
