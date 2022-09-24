renderHeader();

const todosUrl = "https://jsonplaceholder.typicode.com/todos";
const root = document.querySelector("#root");
let todos = [];

const renderTodos = () => {
	const addEventListeners = () => {
		document.querySelectorAll(".edit").forEach((item) => {
			item.addEventListener("click", (e) => {
				const id = Number(e.currentTarget.getAttribute("data-id"));
				console.log({ id });
			});
		});
		document.querySelectorAll(".remove").forEach((item) => {
			item.addEventListener("click", (e) => {
				const id = Number(e.currentTarget.getAttribute("data-id"));
				if (confirm("kaydı silmek istediğinize emin misiniz?")) {
					todos = todos.filter((x) => x.id !== id);
					render();
					addEventListeners();
				}
			});
		});
	};
	// todoları listele
	const table = document.createElement("table");
	table.setAttribute("class", "table table-hover");

	const thead = document.createElement("thead");
	thead.innerHTML = `
    <tr>
      <th scope="col">id</th>
      <th scope="col">Başlık</th>
      <th scope="col">Kullanıcı Id</th>
      <th scope="col">Durum</th>
      <th scope="col"></th>
    </tr>
  `;
	table.appendChild(thead);

	const tbody = document.createElement("tbody");
	const renderItem = (item) => {
		const tr = document.createElement("tr");
		tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.userId}</td>
      <td>${item.completed ? "Tamamlandı" : "Yapılacak"}</td>
      <td>
        <button class="btn btn-xs btn-danger remove" data-id=${
					item.id
				}>Sil</button>
        <button class="btn btn-xs btn-warning edit" data-id=${
					item.id
				}>Düzenle</button>
      </td>
    `;
		tbody.appendChild(tr);
	};
	table.appendChild(tbody);

	const render = () => {
		tbody.innerHTML = "";
		todos.slice(0, 15).forEach((item) => {
			renderItem(item);
		});
	};
	// todosları api'dan al
	fetch(todosUrl)
		.then((resp) => resp.json())
		.then((data = []) => {
			todos = data;
			render();
			root.appendChild(table);
			addEventListeners();
		})
		.catch((error) => {
			errorLogger(error);
		});
};

renderTodos();
