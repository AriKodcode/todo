export default function showTasks(list) {
  let newList = structuredClone(list);
  newList.sort((a, b) => {
    return b.CreationDate - a.CreationDate;
  });
  return newList;
}
