import { useTodos } from "../context/TodoContext";
import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
} from "react-native";

export default function Done() {
  const { todos, toggleTodo, removeTodo, clearCompleted } = useTodos();

  const completedTodos = todos.filter((todo) => todo.done);

  return (
    <View style={styles.screen}>
      <Text style={styles.count}>
        {completedTodos.length} completed tasks
      </Text>

      <Pressable
        style={styles.clearButton}
        onPress={clearCompleted}
        disabled={completedTodos.length === 0}
      >
        <Text style={styles.clearButtonText}>Clear Completed</Text>
      </Pressable>

      <FlatList
        data={completedTodos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.empty}>No completed tasks yet.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Pressable
              style={styles.task}
              onPress={() => toggleTodo(item.id)}
            >
              <Text style={styles.check}>✓</Text>
              <Text style={styles.taskText}>{item.text}</Text>
            </Pressable>

            <Pressable onPress={() => removeTodo(item.id)} hitSlop={10}>
              <Text style={styles.delete}>✕</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f4f5fb",
    padding: 20,
    gap: 16,
  },
  count: {
    color: "#14532d",
    fontSize: 15,
    fontWeight: "700",
  },
  clearButton: {
    backgroundColor: "#14532d",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  clearButtonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 16,
  },
  list: {
    gap: 12,
    paddingBottom: 28,
  },
  empty: {
    textAlign: "center",
    color: "#8a8fa3",
    marginTop: 48,
    fontSize: 15,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 16,
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  check: {
    color: "#d4a017",
    fontSize: 20,
    fontWeight: "800",
  },
  taskText: {
    color: "#14532d",
    fontSize: 16,
    flexShrink: 1,
  },
  delete: {
    color: "#c7cad8",
    fontSize: 18,
    fontWeight: "700",
    paddingLeft: 10,
  },
});