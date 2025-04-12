import { Redirect } from "expo-router";
import { useUser } from "~/contexts/UserContext";

export default function RootRedirect() {
  const { current: user } = useUser();

  if (user) {
    return <Redirect href="/(chat)/list" />;
  } else {
    return <Redirect href="/(auth)/login-register" />;
  }
}
