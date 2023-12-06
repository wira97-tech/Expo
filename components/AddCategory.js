import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { supabase } from "../supabase";

const AddCategory = ({ navigation }) => {
  // handle upload
  const [categoryName, setCategoryName] = useState("");
  const [isDataUploaded, setIsDataUploaded] = useState(false);

  const addCategory = async () => {
    try {
      const { data, error } = await supabase
        .from("category")
        .insert([{ name: categoryName }]);

      console.log(categoryName);
      if (error) {
        console.error(error);
      } else {
        console.log("Success add category");
        setIsDataUploaded(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //handle downlistcategory
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase.from("category").select("*");

        if (error) {
          console.error(error);
        } else {
          setCategories(data || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
    // // Set up real-time subscription to Supabase changes
    // const subscription = supabase
    //   .from("category")
    //   .on("*", () => {
    //     // When there is any change in the 'categories' table, fetch the updated data
    //     fetchCategories();
    //   })
    //   .subscribe();

    // // Clean up the subscription when the component unmounts
    // return () => {
    //   subscription.unsubscribe();
    // };
  }, [isDataUploaded]);

  useEffect(() => {
    if (isDataUploaded) {
      navigation.navigate("Category");
      setIsDataUploaded(false);
    }
  }, [isDataUploaded, navigation]);
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
        placeholder="Category Name"
        placeholderTextColor="#9fa0a1"
        value={categoryName}
        onChangeText={(text) => setCategoryName(text)}
      />
      <Pressable
        style={{
          backgroundColor: "#FF5555",
          padding: 15,
          borderRadius: 10,
          marginTop: "2rem",
        }}
        onPress={addCategory}
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
      </Pressable>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: "3rem" }}>
        List Category
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          fontWeight: "bold",
          marginTop: "2rem",
        }}
      >
        {categories.map((category, index) => (
          <View
            key={category.id}
            style={{
              width: "auto",
              height: 20,
              backgroundColor: getColorForIndex(index),
              borderRadius: 3,
              alignItems: "center",
              fontWeight: "bold",
              fontSize: 20,
              marginBottom: 8,
              marginRight: 8,
            }}
          >
            <Text>{category.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const getColorForIndex = (index) => {
  const colors = ["#81C8FF", "#FFA07A", "#98FB98", "#FFD700", "#DDA0DD"];
  return colors[index % colors.length];
};
export default AddCategory;
