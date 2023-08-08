import { s } from "./CardTodo.style";
import { Image, Text, TouchableOpacity } from "react-native";
import Icon from "../../assets/check.png";

export function CardTodo({ todo, onPress, onLongPress }) {
  return (
    <TouchableOpacity style={s.card} onPress={()=>onPress(todo)} onLongPress={()=>onLongPress(todo)}>
      <Text style={[s.title, todo.isCompleted && { textDecorationLine: "line-through" }]}>{todo.title}</Text>
      {todo.isCompleted && <Image source={Icon} style={s.img} />}
    </TouchableOpacity>
  );
}
