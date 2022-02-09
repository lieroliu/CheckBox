import React from 'react';
import Option from './Components/Option';
import { OptionContainer } from './styles';
import { useSelect } from './useSelect';

const Select = () => {
	const { checkOption, selectAll, options, keys, all } = useSelect();
	return (
		<OptionContainer>
			<Option
				label="Select ALL"
				onCheck={selectAll}
				disabled={false}
				checked={all}
			/>
			{keys.map((i) => {
				return (
					<Option
						key={options[i].label}
						label={options[i].label}
						onCheck={checkOption}
						disabled={options[i].disabled}
						checked={options[i].checked}
					/>
				);
			})}
		</OptionContainer>
	);
};

export default React.memo(Select);
