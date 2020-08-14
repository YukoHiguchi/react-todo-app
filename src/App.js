import React from 'react';
import TodoList from './TodoList';
class App extends React.Component {
	render() {
		const list = ['Programing', 'Shopping'];
		return (
			<div>
				<h1>TODO App</h1>
				<TodoList list={list} />
			</div>
		);
	}
}

export default App;
