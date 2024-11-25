import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const ProfessionalHelp = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState(null); 

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={20} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Assessment</Text>
        <Text style={styles.stepIndicator}>6 of 14</Text>
      </View>

      {/* Question Section */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          Have you sought professional help before?
        </Text>
      </View>

      {/* Illustration Section */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require("../assets/help.png")} 
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "yes" ? styles.selectedButton : styles.defaultButton,
          ]}
          onPress={() => setSelectedButton("yes")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === "yes" ? styles.selectedText : styles.defaultText,
            ]}
          >
            Yes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "no" ? styles.selectedButton : styles.defaultButton,
          ]}
          onPress={() => setSelectedButton("no")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === "no" ? styles.selectedText : styles.defaultText,
            ]}
          >
            No
          </Text>
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F4EE",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E8DDD9",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4B4B4B",
  },
  stepIndicator: {
    fontSize: 14,
    color: "#B6AFA5",
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4B4B4B",
    textAlign: "center",
  },
  illustrationContainer: {
    flex: 1,
    alignItems: "center",
    marginVertical: 20,
  },
  illustration: {
    width: 200,
    height: 200,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  button: {
    width: "48%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  defaultButton: {
    backgroundColor: "#FFFFFF", 
    borderWidth: 1,
    borderColor: "#C6C6C6", 
  },
  selectedButton: {
    backgroundColor: "#A8C081", 
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  defaultText: {
    color: "#4B4B4B", 
  },
  selectedText: {
    color: "#FFFFFF", 
  },
  continueButton: {
    backgroundColor: "#6B4A3D",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ProfessionalHelp;
