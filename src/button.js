import React from 'react';

const Button = (props) => {
	const {value, clicked, onClick} = props
	return(
		<button
			onClick={onClick}
			className={clicked ? props.className + ' selected' : props.className}
			value={value}
		>
			{value}
		</button>
	)
}

export default Button;