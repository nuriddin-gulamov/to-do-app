import axios from 'axios';

export function storeToDo(list) {
  axios.post(
    'https://to-do-list-nuriddin-default-rtdb.firebaseio.com/todos.json',
    list
  );
}
