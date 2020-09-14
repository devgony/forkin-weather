import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { getAppLoadingLifecycleEmitter } from "expo/build/launch/AppLoading";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Ash: {
    iconName: "weather-hail",
    gradient: ["#2c3e50", "#bdc3c7"],
    title: "Ash",
    subtitle: "run away!",
  },
  Clear: {
    iconName: "weather-suuny",
    gradient: ["#1c92d2", "#f2fcfe"],
    title: "Clear",
    subtitle: "Let's go out",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#2c3e50", "#3498db"],
    title: "Clouds",
    subtitle: "quite cloudy",
  },
  Drizzle: {
    iconName: "weather-partly-rainy",
    gradient: ["#185a9d", "#43cea2"],
    title: "Drizzle",
    subtitle: "partly-rainy",
  },
  Dust: {
    iconName: "weather-hazy",
    gradient: ["#00223E", "#FFA17F"],
    title: "Dust",
    subtitle: "Thanks to China🖕",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#abbaab", "#ffffff"],
    title: "Fog",
    subtitle: "Can't see...",
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#3f4c6b", "#606c88"],
    title: "Haze",
    subtitle: "Haze?",
  },
  Main: {
    iconName: "weather-hail",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Mist: {
    iconName: "weather-hail",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Rain: {
    iconName: "weather-hail",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Sand: {
    iconName: "weather-hail",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Smoke: {
    iconName: "weather-hail",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Snow: {
    iconName: "weather-hail",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Squall: {
    iconName: "weather-hail",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Thunderstorm: {
    iconName: "weather-hail",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Tornado: {
    iconName: "weather-hail",
    gradient: [],
    title: "",
    subtitle: "",
  },
};

export default function Weather({ temp, condition, name }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View
        style={{
          ...styles.halfContainer,
          ...styles.textContailner,
        }}
      >
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
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
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  textContailner: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
