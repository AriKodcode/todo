export default function showBy(input, list) {
  if (input === 'by create') {
    let newList = structuredClone(list);
    newList.sort((a, b) => {
      return a.CreationDate - b.CreationDate;
    });
    return newList;
  } else if (input === 'by status') {
    let newList = structuredClone(list);
    const allStatus = ['new', 'inprosses', 'dune'];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < list.length; j++) {
        if (list[j]['Status'] === allStatus[i]) {
          newList.push(list[j]);
        }
      }
    }
    return newList;
  } else if (input === 'by task name') {
    let newList = structuredClone(list);
    newList.sort((a, b) => {
      return a.Name - b.Name;
    });
    return newList;
  }
}
