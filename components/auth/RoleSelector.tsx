import { Stethoscope, User } from "lucide-react-native";
import React from "react";
import {
    Image,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

export type UserRole = "patient" | "practitioner";

interface RoleSelectorProps {
  dictionary: any;
  onSelect: (role: UserRole) => void;
}

export default function RoleSelector({
  dictionary,
  onSelect,
}: RoleSelectorProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/CORA_Logo_v1.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>
          {dictionary?.auth?.roleSelector?.title || "Welcome"}
        </Text>
        <Text style={styles.subtitle}>
          {dictionary?.auth?.roleSelector?.subtitle ||
            "Please select your role"}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => onSelect("patient")}
          style={({ pressed }) => [
            styles.button,
            styles.buttonPatient,
            pressed && styles.buttonPressed,
          ]}
        >
          <View style={[styles.iconContainer, styles.iconPatient]}>
            <User size={24} color="#2563eb" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.buttonTitle}>
              {dictionary?.auth?.roleSelector?.patient?.title || "Patient"}
            </Text>
            <Text style={styles.buttonSubtitle}>
              {dictionary?.auth?.roleSelector?.patient?.description ||
                "Access your clinical data"}
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => onSelect("practitioner")}
          style={({ pressed }) => [
            styles.button,
            styles.buttonPractitioner,
            pressed && styles.buttonPressed,
          ]}
        >
          <View style={[styles.iconContainer, styles.iconPractitioner]}>
            <Stethoscope size={24} color="#059669" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.buttonTitle}>
              {dictionary?.auth?.roleSelector?.medicalProfessional?.title ||
                "Eye Specialist"}
            </Text>
            <Text style={styles.buttonSubtitle}>
              {dictionary?.auth?.roleSelector?.medicalProfessional
                ?.description || "Manage your patients"}
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 32,
    borderWidth: 1,
    borderColor: "rgba(226, 232, 240, 0.8)",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    width: 140,
    height: 48,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    textAlign: "center",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: "#475569",
    marginTop: 8,
    textAlign: "center",
  },
  buttonContainer: {
    gap: 16,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: "#ffffff",
  },
  buttonPatient: {
    borderColor: "#bfdbfe",
  },
  buttonPractitioner: {
    borderColor: "#a7f3d0",
  },
  buttonPressed: {
    transform: [{ scale: 0.98 }],
    backgroundColor: "#f8fafc",
  },
  iconContainer: {
    height: 48,
    width: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  iconPatient: {
    backgroundColor: "#eff6ff",
  },
  iconPractitioner: {
    backgroundColor: "#ecfdf5",
  },
  textContainer: {
    flex: 1,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
  },
  buttonSubtitle: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
  },
});
