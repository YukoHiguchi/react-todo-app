import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Form(props) {
	return (
		<form onSubmit={props.handleSubmit} className="form">
			<TextField
				name="value"
				label="Todo"
				value={props.value}
				onChange={props.handleChange}
			/>
			<Button type="submit" variant="outlined" color="primary">
				Add
			</Button>
		</form>
	);
}

export default Form;
