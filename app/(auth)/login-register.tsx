import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { useUser } from "~/contexts/UserContext";
import { router } from "expo-router";

export default function LoginRegisterScreen() {
  const [activeTab, setActiveTab] = useState("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

  const { login, register, current: user } = useUser();

  // useEffect(() => {
  //   if (user) {
  //     router.replace("/(chat)/chat");
  //   }
  // }, [user]);

  const handleLogin = async () => {
    await login(loginEmail, loginPassword);
    setLoginEmail("");
    setLoginPassword("");
  };

  const handleRegister = async () => {
    await register(registerEmail, registerPassword);
    setRegisterEmail("");
    setRegisterPassword("");
    setRegisterConfirmPassword("");
  };

  return (
    <View className="flex-1 justify-center p-6 bg-background">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full max-w-[400px] mx-auto flex-col gap-1.5"
      >
        <TabsList className="flex-row w-full">
          <TabsTrigger value="login" className="flex-1">
            <Text>Login</Text>
          </TabsTrigger>
          <TabsTrigger value="register" className="flex-1">
            <Text>Register</Text>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="login" className="mt-2">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your credentials to access your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="gap-4 native:gap-2">
              <View className="gap-1">
                <Label nativeID="email">Email</Label>
                <Input
                  aria-labelledby="email"
                  value={loginEmail}
                  onChangeText={setLoginEmail}
                  placeholder="email@example.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              <View className="gap-1">
                <Label nativeID="password">Password</Label>
                <Input
                  aria-labelledby="password"
                  value={loginPassword}
                  onChangeText={setLoginPassword}
                  placeholder="********"
                  secureTextEntry
                />
              </View>
            </CardContent>
            <CardFooter>
              <Button onPress={handleLogin}>
                <Text>Login</Text>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="register" className="mt-2">
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>
                Create a new account to get started.
              </CardDescription>
            </CardHeader>
            <CardContent className="gap-4 native:gap-2">
              <View className="gap-1">
                <Label nativeID="reg-email">Email</Label>
                <Input
                  aria-labelledby="reg-email"
                  value={registerEmail}
                  onChangeText={setRegisterEmail}
                  placeholder="email@example.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              <View className="gap-1">
                <Label nativeID="reg-password">Password</Label>
                <Input
                  aria-labelledby="reg-password"
                  value={registerPassword}
                  onChangeText={setRegisterPassword}
                  placeholder="********"
                  secureTextEntry
                />
              </View>
              <View className="gap-1">
                <Label nativeID="confirm-password">Confirm Password</Label>
                <Input
                  aria-labelledby="confirm-password"
                  value={registerConfirmPassword}
                  onChangeText={setRegisterConfirmPassword}
                  placeholder="********"
                  secureTextEntry
                />
              </View>
            </CardContent>
            <CardFooter>
              <Button onPress={handleRegister}>
                <Text>Register</Text>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </View>
  );
}
