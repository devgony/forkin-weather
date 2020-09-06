import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { getAppLoadingLifecycleEmitter } from "expo/build/launch/AppLoading";

export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
    </View>
  );
}

Weather.propType = {
  temp: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
