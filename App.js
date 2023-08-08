import { ScrollView, Text, View } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./Components/Header/Header";
import { CardTodo } from "./Components/CardTodo/CardTodo";
import { useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Sortir le chien", isCompleted: true },
    { id: 2, title: "Aller chez le garagiste", isCompleted: false },
    { id: 3, title: "Faire les courses", isCompleted: true },
    { id: 4, title: "Appeler le vétérinaire", isCompleted: true },
  ]);

  function renderTodoList() {
    return todoList.map((todo) => (
      <View style={s.cardItem} key={todo.id}>
        <CardTodo todo={todo} />
      </View>
    ));
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <ScrollView>{renderTodoList()}</ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Text>footer</Text>
      </View>
    </>
  );
}
