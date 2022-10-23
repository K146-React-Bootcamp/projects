import React from "react";

class Todo extends React.Component {
	state = {};
	render() {
		return (
      <div>
        Todo Detail
        <br />
				<h2>{this.props.todo.title}</h2>
			</div>
		);
	}
}

export async function getStaticPaths(context) {
	return {
		paths: [
			{ params: { todoId: "1" } },
			{ params: { todoId: "2" } },
			{ params: { todoId: "3" } },
			{ params: { todoId: "4" } },
			{ params: { todoId: "5" } },
			{ params: { todoId: "6" } },
			{ params: { todoId: "7" } },
			{ params: { todoId: "8" } },
			{ params: { todoId: "9" } },
			{ params: { todoId: "10" } },
		],
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { query, params } = context;
	const todo = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${params.todoId}`
	).then((res) => res.json());

	return {
		props: { todo },
	};
}

export default Todo;
