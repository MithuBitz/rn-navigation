import { Button, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = ({ route }: any) => {
  const navigation = useNavigation<any>();
  const { username } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Mithu",
    });
  }, [navigation]);

  return (
    <View>
      <Text>{username}</Text>
      {/* <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
      {/* <Button title="Go Back" onPress={() => navigation.popTo("Home")} /> */}
      <Button title="Go Back" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
