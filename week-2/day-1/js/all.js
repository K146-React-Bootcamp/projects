const data = [
  { name: "ahmet", age: 30, gender: "erkek" },
  { name: "ayşe", age: 26, gender: "kadın" },
  { name: "ali", age: 35, gender: "erkek" },
  { name: "ege", age: 17, gender: "erkek" }
];

const todosUrl = "https://jsonplaceholder.typicode.com/todos"
const root = document.querySelector("#root");

// hataları loglamak için kullanılır.
// api'ler yardımıyla loglayabiliriz.
// bu logları monitör edebilimek için hataları loglamamız gereklidir.
const errorLogger = (error) => {
  console.log({ error });
}

// döngü örnekleri
// const render = () => {
//   const ul = document.createElement("ul");

//   const renderItem = (item) => {
//     const li = document.createElement("li");
//     li.innerText = `${item.name} ${item.age} ${item.gender}`;
//     ul.appendChild(li);
//   }
//   // es5
//   // for (let i = 0; i < data.length; i++) {
//   //   const item = data[i];
//   //   renderItem(item);
//   // }

//   // es6 for in
//   // for (const index in data) {
//   //   const item = data[index];
//   //   renderItem(item);
//   // }

//   // es6 for of
//   // for (const item of data) {
//   //   renderItem(item);
//   // }

//   // forEach
//   data.forEach((item, index) => {
//     renderItem(item);
//   });

//   // map
//   // data.map((item, index) => {
//   //   renderItem(item);
//   // });
//   try {
//     root.appendChild(ul);
//   } catch (error) {
//     errorLogger(error);
//   }
// }


//render();
const renderTodos = () => {
  // todoları listele
  const ul = document.createElement("ul");
  const renderItem = (item) => {
    const li = document.createElement("li");
    li.innerText = `${item.id} ${item.title} ${item.userId}`;
    ul.appendChild(li);
  }

  // todosları api'dan al
  fetch(todosUrl).then(resp => resp.json()).then((todos = []) => {
    todos.forEach(item => {
      renderItem(item);
    });
    root.appendChild(ul);
  }).catch(error => {
    errorLogger(error);
  })
}

renderTodos();