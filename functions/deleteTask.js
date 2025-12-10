export default function deleteTask(id, list) {
  let found = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i]['id'] === id) {
      list = list.splice(i, 1);
      found = true;
    }
  }
  if (!found) {
    console.log('task not found');
  }
}
