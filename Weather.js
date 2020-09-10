import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { getAppLoadingLifecycleEmitter } from "expo/build/launch/AppLoading";

export default function Weather({ temp, condition, name }) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{temp}</Text>
      <Text>{condition}</Text>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Ash",
    "Clear",
    "Clouds",
    "Drizzle",
    "Dust",
    "Fog",
    "Haze",
    "Main",
    "Mist",
    "Rain",
    "Sand",
    "Smoke",
    "Snow",
    "Squall",
    "Thunderstorm",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
