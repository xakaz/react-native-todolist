import { s } from "./CardTodo.style";
import { Image, Text, TouchableOpacity } from "react-native";
import Icon from "../../assets/check.png";

export function CardTodo({ todo, onPress }) {
  return (
    <TouchableOpacity style={s.card} onPress={()=>onPress(todo)}>
      <Text style={[s.title, todo.isCompleted && { textDecorationLine: "line-through" }]}>{todo.title}</Text>
      {todo.isCompleted && <Image source={Icon} style={s.img} />}
    </TouchableOpacity>
  );
}
