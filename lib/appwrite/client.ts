import { Client, Databases, Account } from "react-native-appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67f196c0001bf98f4ebc")
  .setPlatform("com.octocode.octochat");

export const account = new Account(client);
export const databases = new Databases(client);
