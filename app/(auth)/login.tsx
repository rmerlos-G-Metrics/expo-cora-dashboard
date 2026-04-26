import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RoleSelector, { UserRole } from "../../components/auth/RoleSelector";

export default function LoginScreen() {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  const dictionary = {
    auth: {
      roleSelector: {
        title: "Welcome!",
        subtitle: "How would you like to access the dashboard?",
        patient: { title: "Patient", description: "Access your CORA data" },
        medicalProfessional: {
          title: "Eye Specialist",
          description: "Manage patient IOP data",
        },
      },
    },
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <View style={[styles.blob, styles.blobTop]} />
        <View style={[styles.blob, styles.blobBottom]} />

        <View style={styles.contentContainer}>
          {!selectedRole ? (
            <RoleSelector
              dictionary={dictionary}
              onSelect={(role) => setSelectedRole(role)}
            />
          ) : (
            <View>
              <Text style={{ textAlign: "center" }}>
                Next Step Component Goes Here
              </Text>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  keyboardView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  contentContainer: {
    width: "100%",
    maxWidth: 400,
    zIndex: 10,
  },
  blob: {
    position: "absolute",
    borderRadius: 9999,
    opacity: 0.4,
  },
  blobTop: {
    top: "-10%",
    left: "-20%",
    width: 500,
    height: 500,
    backgroundColor: "#dbeafe",
  },
  blobBottom: {
    bottom: "-0%",
    right: "-10%",
    width: 500,
    height: 500,
    backgroundColor: "#d1fae5",
  },
});
