import { ID } from "react-native-appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite/client";
import { toast } from "../lib/toast";

interface UserContextType {
  current: any | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  toast: (msg: string) => void;
}

const UserContext = createContext<UserContextType | null>(null);

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export function UserProvider(props: { children: React.ReactNode }) {
  const [user, setUser] = useState<null | any>(null);

  async function login(email: string, password: string) {
    const loggedIn = await account.createEmailPasswordSession(email, password);
    setUser(loggedIn);
    toast("Welcome back. You are logged in");
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
    toast("Logged out");
  }

  async function register(email: string, password: string) {
    await account.create(ID.unique(), email, password);
    await login(email, password);
    toast("Account created");
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
      toast("Welcome back. You are logged in");
    } catch (err) {
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider
      value={{ current: user, login, logout, register, toast }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
