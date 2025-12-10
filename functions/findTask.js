export default function findTask(checkid, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i]['id'] === checkid) {
      return list[i];
    } else {
      console.log('task not found');
    }
  }
}
