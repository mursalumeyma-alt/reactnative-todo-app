
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { TodoProvider } from "../context/TodoContext";

// Each file next to this layout is a screen.
// Tabs shows one screen at a time and puts buttons along the bottom.
export default function RootLayout() {
  return (
    <TodoProvider>
      <StatusBar style="light" />

      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: "#14532d" },
          headerTintColor: "#ffffff",
          headerTitleStyle: { fontWeight: "700" },
          tabBarActiveTintColor: "#d4a017",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "My To-Dos",
            tabBarLabel: "Tasks",
            tabBarIcon: ({ color }) => (
              <Text style={{ fontSize: 18, color }}>📝</Text>
            ),
          }}
        />

        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            tabBarIcon: ({ color }) => (
              <Text style={{ fontSize: 18, color }}>ℹ️</Text>
            ),
          }}
        />

        <Tabs.Screen
          name="done"
          options={{
            title: "Completed Tasks",
            tabBarLabel: "Done",
            tabBarIcon: ({ color }) => (
              <Text style={{ fontSize: 18, color }}>✅</Text>
            ),
          }}
        />
      </Tabs>
    </TodoProvider>
  );
}
