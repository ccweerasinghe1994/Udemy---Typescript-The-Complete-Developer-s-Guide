import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(URL).then((response) => {
	console.log(response.data);
	const todo = response.data;
	const id = todo.id;
	const title = todo.Title;
	const finished = todo.finished;

	console.log(`
    Todo Item with ID : ${id}
    Has a tile of ${title}
    is it finished ${finished}
    
    `);
});
