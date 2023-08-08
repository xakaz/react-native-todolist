import { Alert, ScrollView, View } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./Components/Header/Header";
import { CardTodo } from "./Components/CardTodo/CardTodo";
import { useEffect, useState } from "react";
import TabBottomMenu from "./Components/TabBottomMenu/TabBottomMenu";
import { ButtonAdd } from "./Components/ButtonAdd/ButtonAdd";
import Dialog from "react-native-dialog";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

let isFirstRender = true;
let isLoadUpdate = false;

export default function App() {
  const [selectedTabName, setSelectedTabName] = useState("all");
  const [isAddDialogVisible, setIsAddDialogVisible] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function getFilteredList() {
    switch (selectedTabName) {
      case "all":
        return todoList;
      case "inProgress":
        return todoList.filter((todo) => !todo.isCompleted);
      case "done":
        return todoList.filter((todo) => todo.isCompleted);
    }
  }

  function deleteTodo(todoToDelete) {
    Alert.alert("Suppression", "Supprimer cette tâche ?", [
      {
        text: "Supprimer",
        style: "destructive",
        onPress: () => {
          const updatedTodoList = todoList.filter(
            (todo) => todo.id !== todoToDelete.id
          );
          setTodoList(updatedTodoList);
        },
      },
      { text: "Annuler", style: "cancel" },
    ]);
  }

  function renderTodoList() {
    return getFilteredList().map((todo) => (
      <View style={s.cardItem} key={todo.id}>
        <CardTodo onPress={updateTodo} todo={todo} onLongPress={deleteTodo} />
      </View>
    ));
  }

  function updateTodo(todo) {
    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };

    const updatedIndex = todoList.findIndex(
      (todo) => todo.id === updatedTodo.id
    );

    const updatedTodoList = [...todoList];

    updatedTodoList[updatedIndex] = updatedTodo;

    setTodoList(updatedTodoList);
  }

  function showAddDialog() {
    setIsAddDialogVisible(true);
  }

  function addTodo() {
    const newTodo = {
      id: uuid.v4(),
      title: inputValue,
      isCompleted: false,
    };

    setTodoList([...todoList, newTodo]);
    setIsAddDialogVisible(false);
  }

  async function saveTodoList() {
    try {
      await AsyncStorage.setItem("@todoList", JSON.stringify(todoList));
    } catch (error) {
      Alert.alert("Erreur" + error);
    }
  }

  async function loadTodoList() {
    try {
      const stringifiedTodoList = await AsyncStorage.getItem("@todoList");
      if (stringifiedTodoList !== null) {
        const parsedTodoList = JSON.parse(stringifiedTodoList);
        isLoadUpdate = true;
        setTodoList(parsedTodoList);
      }
    } catch (error) {
      Alert.alert("Erreur" + error);
    }
  }

  useEffect(() => {
    loadTodoList();
  }, []);

  useEffect(() => {
    if (isLoadUpdate) {
      isLoadUpdate = false;
    } else {
      if (!isFirstRender) {
        saveTodoList();
      } else {
        isFirstRender = false;
      }
    }
  }, [todoList]);

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
          <ButtonAdd onPress={showAddDialog} />
        </SafeAreaView>
      </SafeAreaProvider>
      <TabBottomMenu
        todoList={todoList}
        selectedTabName={selectedTabName}
        onPress={setSelectedTabName}
      />
      <Dialog.Container
        visible={isAddDialogVisible}
        onBackdropPress={() => {
          setIsAddDialogVisible(false);
        }}
      >
        <Dialog.Title>Créer une tâche</Dialog.Title>
        <Dialog.Description>
          Choisis un nom pour la nouvelle tâche
        </Dialog.Description>
        <Dialog.Input onChangeText={setInputValue} />
        <Dialog.Button
          disabled={inputValue.trim().length === 0}
          label="Créer"
          onPress={addTodo}
        />
      </Dialog.Container>
    </>
  );
}
