import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

axios.get(URL).then((response) => {
	console.log(response.data);
	const todo = response.data as Todo;
	const id = todo.id;
	const title = todo.title;
	const finished = todo.completed;

	console.log(`
    Todo Item with ID : ${id}
    Has a tile of ${title}
    is it finished ${finished}

    `);
});
