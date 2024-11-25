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

const PhysicalDistress = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option

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
        <Text style={styles.stepIndicator}>7 of 14</Text>
      </View>

      {/* Question Section */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          Are you experiencing any physical distress?
        </Text>
      </View>

      {/* Options Section */}
      <View style={styles.optionsContainer}>
        {/* Option 1 */}
        <TouchableOpacity
          style={[
            styles.optionCard,
            selectedOption === "yes" ? styles.selectedOption : styles.defaultOption,
          ]}
          onPress={() => setSelectedOption("yes")}
        >
          <View style={styles.optionHeader}>
            <Ionicons
              name={selectedOption === "yes" ? "checkmark-circle" : "ellipse-outline"}
              size={24}
              color={selectedOption === "yes" ? "#FFF" : "#4B4B4B"}
              style={styles.icon}
            />
            <Text
              style={[
                styles.optionTitle,
                selectedOption === "yes" ? styles.selectedText : styles.defaultText,
              ]}
            >
              Yes, one or multiple
            </Text>
          </View>
          <Text style={styles.optionDescription}>
            I’m experiencing physical pain in different places over my body.
          </Text>
        </TouchableOpacity>

        {/* Option 2 */}
        <TouchableOpacity
          style={[
            styles.optionCard,
            selectedOption === "no" ? styles.selectedOption : styles.defaultOption,
          ]}
          onPress={() => setSelectedOption("no")}
        >
          <View style={styles.optionHeader}>
            <Ionicons
              name={selectedOption === "no" ? "close-circle" : "ellipse-outline"}
              size={24}
              color={selectedOption === "no" ? "#FFF" : "#4B4B4B"}
              style={styles.icon}
            />
            <Text
              style={[
                styles.optionTitle,
                selectedOption === "no" ? styles.selectedText : styles.defaultText,
              ]}
            >
              No Physical Pain At All
            </Text>
          </View>
          <Text style={styles.optionDescription}>
            I’m not experiencing any physical pain in my body at all :)
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
  optionsContainer: {
    marginBottom: 30,
  },
  optionCard: {
    padding: 15,
    borderRadius: 12,
    marginVertical: 10,
    borderWidth: 1,
    justifyContent: "center",
  },
  defaultOption: {
    backgroundColor: "#FFFFFF", // Default white background
    borderColor: "#C6C6C6", // Light gray border
  },
  selectedOption: {
    backgroundColor: "#A8C081", // Green background for selected option
    borderColor: "#A8C081",
  },
  optionHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  defaultText: {
    color: "#4B4B4B", // Default text color (dark gray)
  },
  selectedText: {
    color: "#FFFFFF", // White text for selected option
  },
  optionDescription: {
    fontSize: 14,
    color: "#6B6B6B",
    marginTop: 5,
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

export default PhysicalDistress;
