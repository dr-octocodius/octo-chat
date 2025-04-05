import { Stack } from "expo-router";
import React from "react";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="login-register"
        options={{ title: "Login", headerShown: true }}
      />
    </Stack>
  );
}
