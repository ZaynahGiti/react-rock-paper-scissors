import React from 'react';

const SetUsername = ({
	classes,
	onSet
}) => {
	let input;
	return (
		<section id="set-username" className={classes}>
			<h2>username!</h2>
			<form onSubmit={e => {
				e.preventDefault();
				if (!input.value.trim()) {
					return;
				}
				localStorage.setItem('username', input.value);
				input.value = '';
			}}>
				<input ref={node => {
					input = node;
				}} defaultValue={localStorage.getItem('username')} type="text" autoFocus name="username" className="username" maxLength="12" />
			<button className="button success" type="submit" onClick={() => onSet(input.value)}>Set Username</button>
			</form>
		</section>
	)
};

SetUsername.propTypes = {
	onSet: React.PropTypes.func.isRequired,
	classes: React.PropTypes.string.isRequired
};

export default(
	SetUsername
);
