import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Picker,
  CheckBox,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const List = () => {
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
      <View style={{ marginTop: "1rem" }}>
        <View
          style={{
            width: "auto",
            height: 100,
            backgroundColor: "#b0e9f7",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#b0e9f7",
            padding: 5,
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
            <View>
              <Text
                style={[styles.todoText, isSelected1 && styles.strikethrough]}
              >
                Study - React
              </Text>
              <Text style={[isSelected1 && styles.strikethrough]}>
                Ampun Sepuh Aku Baru Kenal
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 7,
                }}
              >
                <Icon name="calendar" size={20} color="#82817c" />
                <Text style={{ marginLeft: 8 }}>1 Desember 2023</Text>
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  width: 60,
                  height: 20,
                  backgroundColor: "#eefaa7",
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Text>Study</Text>
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
        <View
          style={{
            width: "auto",
            height: 100,
            backgroundColor: "#eefaa7",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#eefaa7",
            marginTop: 10,
            padding: 5,
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
            <View>
              <Text
                style={[styles.todoText, isSelected2 && styles.strikethrough]}
              >
                Study - React
              </Text>
              <Text style={[isSelected2 && styles.strikethrough]}>
                Ampun Sepuh Aku Baru Kenal
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 7,
                }}
              >
                <Icon name="calendar" size={20} color="#82817c" />
                <Text style={{ marginLeft: 8 }}>1 Desember 2023</Text>
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  width: 60,
                  height: 20,
                  backgroundColor: "#b0e9f7",
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Text>Study</Text>
              </View>
              <CheckBox
                value={isSelected2}
                onValueChange={setSelection2}
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
        <View
          style={{
            width: "auto",
            height: 100,
            backgroundColor: "#f7b0c6",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#f7b0c6",
            marginTop: 10,
            padding: 5,
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
            <View>
              <Text
                style={[styles.todoText, isSelected3 && styles.strikethrough]}
              >
                Study - React
              </Text>
              <Text style={[isSelected3 && styles.strikethrough]}>
                Ampun Sepuh Aku Baru Kenal
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 7,
                }}
              >
                <Icon name="calendar" size={20} color="#82817c" />
                <Text style={{ marginLeft: 8 }}>1 Desember 2023</Text>
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  width: 60,
                  height: 20,
                  backgroundColor: "#d3b0f7",
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Text>Study</Text>
              </View>
              <CheckBox
                value={isSelected3}
                onValueChange={setSelection3}
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
        <View
          style={{
            width: "auto",
            height: 100,
            backgroundColor: "#d3b0f7",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#d3b0f7",
            marginTop: 10,
            padding: 5,
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
            <View>
              <Text
                style={[styles.todoText, isSelected4 && styles.strikethrough]}
              >
                Study - React
              </Text>
              <Text style={[isSelected4 && styles.strikethrough]}>
                Ampun Sepuh Aku Baru Kenal
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 7,
                }}
              >
                <Icon name="calendar" size={20} color="#82817c" />
                <Text style={{ marginLeft: 8 }}>1 Desember 2023</Text>
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  width: 60,
                  height: 20,
                  backgroundColor: "#f7b0c6",
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Text>Study</Text>
              </View>
              <CheckBox
                value={isSelected4}
                onValueChange={setSelection4}
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
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  todoText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  strikethrough: {
    textDecorationLine: "line-through",
  },
  item: {
    fontSize: 9,
  },
});
