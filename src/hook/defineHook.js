import { useState, useEffect } from 'react'


function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time)
  })
}

 async function getPerson() {
  await sleep(2000);
  let list = [
    { name: "a" },
    { name: "b" },
    { name: "c" },
  ];
  return list;
}

function usePerson() {
  const [list, setList] = useState(null);
  async function request() {
    const list = await getPerson();
    setList(list)
  }

  useEffect(request, []);
  return list;
}

function DefineHook() {
  const list = usePerson();
  if (list === null) {
    return <div>loading</div>
  }
  return <ul>
    {
      list.map((item, index) => {
        return <li key={index}>{item.name}</li>
      })
    }
  </ul>
}
export default DefineHook;

// point：
// 1 async await
// 2 