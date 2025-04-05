import { account } from "./client";
import { ID } from "react-native-appwrite";

export const signIn = async (email: string, password: string) => {
  try {
    const response = await account.createEmailPasswordSession(email, password);
    console.log("Login successful:", response);
    return response;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const signUp = async (email: string, password: string) => {
  try {
    const response = await account.create(ID.unique(), email, password);
    console.log("Login successful:", response);
    return response;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
