import { useState } from 'react';

const useList = (initialValue = []) => {
	const [value, setValue] = useState(initialValue);

	const push = (element) => {
		setValue((oldValue) => [...oldValue, element]);
	};

	const remove = (element) => {
		const index = value.indexOf(element);
		setValue((oldValue) => oldValue.filter((_, i) => i !== index));
	};

	const isEmpty = () => value.length === 0;

	return {
		value,
		setValue,
		push,
		remove,
		isEmpty,
	};
};

export default useList;
