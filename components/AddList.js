import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Picker, Modal, Pressable } from "react-native";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { supabase } from "../supabase";
import { format } from "date-fns";

const AddList = () => {
  const [name, setName] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [description, setDescription] = useState("");
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  //handle input date
  const handleDateChange = (date) => {
    const selectedDate = date instanceof Date ? date : new Date(date);
    setSelectedDate(selectedDate);
  };
  //handle autorefresh

  useEffect(() => {
    // handle Fetch categories from Supabase
    const fetchCategory = async () => {
      try {
        const { data, error } = await supabase.from("category").select("*");
        if (error) {
          throw error;
        }
        setCategory(data.map((category) => category.name));
      } catch (error) {
        console.error("Error fetching category:", error.message);
      }
    };

    fetchCategory();
  }, []);
  // handle upload ke db
  const handleAddList = async () => {
    try {
      const { data, error } = await supabase
        .from("list")
        .insert([
          { name, category: selectedValue, date: selectedDate, description },
        ]);

      if (error) {
        throw error;
      }
      setName("");
      setSelectedValue("");
      setSelectedDate("");
      setDescription("");
      setSuccessModalVisible(true);
      console.log("List added successfully:", data);
    } catch (error) {
      console.error("Error adding list:", error.message);
    }
  };

  const handleCloseSuccessModal = () => {
    // Hide the success modal
    setSuccessModalVisible(false);
  };
  return (
    <View style={{ padding: 15 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Add List</Text>
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
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Picker
        style={{
          backgroundColor: "#cfd0d1",
          marginTop: 15,
          borderRadius: "15",
          padding: 15,
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 10,
          fontSize: 17,
        }}
        placeholderTextColor="#9fa0a1"
        placeholdertext="Category"
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item
          label="Category"
          value={category}
          enabled={false}
          style={{ color: "#9fa0a1" }}
        />
        {category.map((category, index) => (
          <Picker.Item key={index} label={category} value={category} />
        ))}
      </Picker>

      <DatePicker
        selected={selectedDate ? new Date(selectedDate) : null}
        dateFormat="dd/MM/yyyy"
        onChange={handleDateChange}
        placeholder="Choose Date"
        customInput={
          <input
            style={{
              backgroundColor: "#cfd0d1",
              marginTop: 15,
              borderRadius: "15",
              padding: 15,
              borderWidth: "1px",
              borderColor: "black",
              borderRadius: 10,
              fontSize: 17,
              flex: 1,
              width: "91%",
            }}
          />
        }
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
        placeholder="Description"
        placeholderTextColor="#9fa0a1"
        multiline={true}
        numberOfLines={4}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      <Pressable
        style={{
          backgroundColor: "#FF5555",
          padding: 15,
          borderRadius: 10,
          marginTop: "2rem",
        }}
        onPress={handleAddList}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          ADD LIST
        </Text>
      </Pressable>
      <Modal
        animationType="fade"
        transparent={true}
        visible={successModalVisible}
        onRequestClose={handleCloseSuccessModal}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Success!</Text>
            <Text>List Berhasil Ditambahkan.</Text>
            <Pressable onPress={handleCloseSuccessModal}>
              <Text style={{ color: "#007BFF", marginTop: 10 }}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default AddList;
