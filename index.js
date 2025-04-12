import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import { UserProvider } from "~/contexts/UserContext";

// https://docs.expo.dev/router/reference/troubleshooting/#expo_router_app_root-not-defined

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context("./app");
  return (
    <UserProvider>
      <ExpoRoot context={ctx} />
    </UserProvider>
  );
}

registerRootComponent(App);
