export default function changeDetils(id, newDetils, list) {
  let found = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i]['id'] === id) {
      list[i]['details'] = newDetils;
      found = true;
    }
  }
  if (!found) {
    console.log('task not found');
  }
}
