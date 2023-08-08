import { Text } from "react-native";
import s from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Hello</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
