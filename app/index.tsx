import { Redirect } from "expo-router";

export default function Index() {
  // Later read from expo-secure-store (SMART on FHIR launch)

  return <Redirect href="/(auth)/login" />;
}
