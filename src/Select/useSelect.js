import { useCallback, useEffect, useState } from 'react';

const data = {
	black: {
		label: 'black',
		value: 'black',
		checked: false,
		disabled: false,
	},
	red: {
		label: 'red',
		value: 'red',
		checked: false,
		disabled: false,
	},
	blue: {
		label: 'blue',
		value: 'blue',
		checked: false,
		disabled: true,
	},
	yellow: {
		label: 'yellow',
		value: 'yellow',
		checked: false,
		disabled: false,
	},
	white: {
		label: 'white',
		value: 'white',
		checked: false,
		disabled: false,
	},
	pink: {
		label: 'pink',
		value: 'pink',
		checked: false,
		disabled: true,
	},
	green: {
		label: 'green',
		value: 'green',
		checked: false,
		disabled: false,
	},
};

const keys = Object.keys(data);

export const useSelect = () => {
	const [options, setOptions] = useState(data);
	const [all, setAll] = useState(false);
	const [isPress, setIsPress] = useState(false);

	const handleKeyDown = useCallback((e) => {
		if (e.keyCode == 16) {
			setIsPress(true);
		}
	}, []);

	const handleKeyUp = useCallback((e) => {
		setIsPress(false);
	}, []);

	const checkOption = useCallback(
		(target) => {
			const temp = { ...options };
			if (isPress) {
				const index = keys.findIndex((i) => i == target);
				if (index > 0) {
					for (let i = index; i >= 0; i--) {
						const key = keys[i];
						if (!temp[key].checked && !temp[key].disabled) {
							temp[key].checked = true;
						}
					}
				}
			} else {
				temp[target].checked = !temp[target].checked;
			}
			setOptions(temp);
		},
		[isPress, options, setOptions, keys]
	);

	const selectAll = useCallback(() => {
		const temp = { ...options };
		keys.map((key) => {
			if (!temp[key].disabled) {
				temp[key].checked = !all;
			}
		});
		setOptions(temp);
		setAll(!all);
	}, [all, options, keys]);

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);
	}, []);

	return {
		checkOption,
		selectAll,
		options,
		keys,
		all,
	};
};
