export default function changeStatus(id, newStatus, list) {
  let found = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i]['id'] === id) {
      list[i]['Status'] = newStatus;
      found = true;
    }
  }
  if (!found) {
    console.log('task not found');
  }
}
