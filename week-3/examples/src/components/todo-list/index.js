import React, { useState, useEffect } from "react";
import Button from "../button";
import classes from "./style.module.css";

const url = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
	const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState();

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((todos) => {
				setTodos(todos);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const renderThead = () => {
		return (
			<thead>
				<tr>
					<th>id</th>
					<th>başlık</th>
					<th>durum</th>
					<th>Aksiyon</th>
				</tr>
			</thead>
		);
	};


  const remove = (todo) => {
    if (window.confirm("Silmek üzerisiniz emin misiniz")) {
      setTodos(prev => {
        return prev.filter(x => x.id != todo.id)
      })
    }
  }

  const edit = (todo) => {
    setSelectedTodo(todo);
  }

	const renderBody = () => {
		return (
			<tbody>
				{todos.slice(0, 15).map((todo, index) => {
					return (
						<tr key={index}>
							<td>{todo.id}</td>
							<td>{todo.title}</td>
							<td>{todo.completed ? "Tamamlandı" : "Yapılacak"}</td>
							<td>
								<Button
                  className={`btn btn-sm btn-danger ${classes.actionButton} `}
                  onClick={() => remove(todo)}
								>
									Sil
								</Button>
								<Button onClick={() => edit(todo)} className="btn btn-sm btn-warning">Düzenle</Button>
							</td>
						</tr>
					);
				})}
			</tbody>
		);
	};


  const renderEditForm = () => {
    return (
      <div>
        <input type={"text"}/>
        <inpu type="check" />
        <Button>Kaydet</Button>
        <Button onClick={() => setSelectedTodo(undefined)}>Vazgeç</Button>
      </div>
    )
  }
	return (
    <div className={`${classes.container} container`}>
      { selectedTodo && renderEditForm()}
			<table className="table">
				{renderThead()}
        {renderBody()}
			</table>
		</div>
	);
};

export default TodoList;
