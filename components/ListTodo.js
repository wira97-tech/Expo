import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Picker,
  CheckBox,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { supabase } from "../supabase";

const List = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data, error } = await supabase.from("list").select("*");
        if (error) {
          throw error;
        }
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error.message);
      }
    };

    fetchTodos();
  }, []);
  //elemen dropdown
  const [selectedValue, setSelectedValue] = useState(null);

  //elemen checkbox
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected4, setSelection4] = useState(false);

  // element input date
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 3) {
      return words.slice(0, 3).join(" ") + "...";
    }
    return description;
  };

  const backgroundColor = (index) => {
    const colors = ["#b0e9f7", "#eefaa7", "#f7b0c6", "#d3b0f7", "#cfd0d1"];
    return colors[index % colors.length];
  };

  const backgroundColorCategory = (index) => {
    const colors = ["#7ef1f7", "#f77eb5", "#f77e7e", "#f7f17e", "#9ef77e"];
    return colors[index % colors.length];
  };

  return (
    <View style={{ padding: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Hi Putu</Text>
        <Image
          source={require("../assets/logo.png")}
          style={{
            borderRadius: 100,
            width: 50,
            height: 50,
            borderColor: "red",
            borderWidth: 1,
          }}
        />
      </View>
      <View>
        <TextInput
          style={{
            backgroundColor: "#cfd0d1",
            marginTop: 8,
            borderRadius: "15",
            padding: 8,
            borderwidth: "5px",
            borderColor: "gray",
            borderRadius: 10,
            fontSize: 17,
          }}
          placeholder="Search List..."
          placeholderTextColor="#9fa0a1"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Choose Date"
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
                  width: "67%",
                }}
              />
            }
            popperPlacement="bottom-start"
            popperModifiers={{
              preventOverflow: {
                enabled: true,
              },
            }}
          />
        </SafeAreaView>
        <Picker
          style={{
            backgroundColor: "#cfd0d1",
            marginTop: 15,
            borderRadius: "15",
            padding: 2,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 10,
            fontSize: 17,
            marginRight: 7,
          }}
          placeholderTextColor="#9fa0a1"
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item
            label="Category"
            value={null}
            enabled={false}
            style={{ color: "#9fa0a1" }}
          />
          <Picker.Item label="Category 1" value="Category1" />
          <Picker.Item label="Category 2" value="Category2" />
          <Picker.Item label="Category 3" value="Category3" />
        </Picker>
        <Picker
          style={{
            backgroundColor: "#cfd0d1",
            marginTop: 15,
            borderRadius: "15",
            padding: 10,
            borderwidth: "5px",
            borderColor: "gray",
            borderRadius: 10,
            fontSize: 17,
          }}
          placeholderTextColor="#9fa0a1"
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item
            label="Status"
            value={null}
            enabled={false}
            style={{ color: "#9fa0a1" }}
          />
          <Picker.Item label="Category 1" value="Category1" />
          <Picker.Item label="Category 2" value="Category2" />
          <Picker.Item label="Category 3" value="Category3" />
        </Picker>
      </View>
      <View style={{ marginTop: 10, flex: 1 }}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View
              style={{
                width: "auto",
                height: 100,
                backgroundColor: backgroundColor(index),
                borderRadius: 10,
                borderWidth: 1,
                borderColor: backgroundColor(index),
                padding: 5,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 5,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={[
                      styles.todoText,
                      isSelected1 && styles.strikethrough,
                    ]}
                  >
                    {item.category} - {item.name}
                  </Text>
                  <Text style={[isSelected1 && styles.strikethrough]}>
                    {truncateDescription(item.description)}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 7,
                    }}
                  >
                    <Icon name="calendar" size={20} color="#82817c" />
                    <Text style={{ marginLeft: 8 }}>{item.date}</Text>
                  </View>
                </View>
                <View style={{ alignItems: "center" }}>
                  <View
                    style={{
                      width: 60,
                      height: 20,
                      backgroundColor: backgroundColorCategory(index),
                      borderRadius: 6,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>{item.category}</Text>
                  </View>
                  <CheckBox
                    value={isSelected1}
                    onValueChange={setSelection1}
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                      marginTop: 10,
                    }}
                  />
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  todoText: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  strikethrough: {
    textDecorationLine: "line-through",
  },
  item: {
    fontSize: 9,
  },
});
