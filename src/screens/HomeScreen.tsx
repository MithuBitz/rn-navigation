import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@react-navigation/elements";
import DetailScreen from "./DetailScreen";
import { Link, useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigaion = useNavigation<any>();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPressIn={() => navigaion.navigate("Details")}>
        Go to details
      </Button>
      {/* <Link screen={"Details"}>Go to details</Link> */}
      {/* <Button onPressIn={() => navigaion.push("Home")}>Go to Home</Button> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
