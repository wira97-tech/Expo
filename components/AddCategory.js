import React, { useState } from "react";
import { View, Text, TextInput, Picker, TouchableOpacity } from "react-native";

const AddCategory = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  return (
    <View style={{ padding: 15 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Add Category</Text>
      <TextInput
        style={{
          backgroundColor: "#cfd0d1",
          marginTop: "3rem",
          borderRadius: "15",
          padding: 15,
          borderwidth: "1px",
          borderColor: "black",
          borderRadius: 10,
          fontSize: 17,
        }}
        placeholder="Name"
        placeholderTextColor="#9fa0a1"
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#FF5555",
          padding: 15,
          borderRadius: 10,
          marginTop: "2rem",
        }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          ADD CATEGORY
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: "3rem" }}>
        List Category
      </Text>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-around",
          fontWeight: "bold",
          marginTop: "2rem",
        }}
      >
        <View
          style={{
            width: "auto",
            height: 20,
            backgroundColor: "#81C8FF",
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text>Study</Text>
        </View>
        <View
          style={{
            width: "auto",
            height: 20,
            backgroundColor: "#FF8181",
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text>Workout</Text>
        </View>
        <View
          style={{
            width: "auto",
            height: 20,
            backgroundColor: "#FFB681",
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text>Homework</Text>
        </View>
      </View>
    </View>
  );
};
export default AddCategory;
