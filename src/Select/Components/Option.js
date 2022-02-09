import React, { useCallback } from 'react';
import { OptionWrapper, OptionLabel, SelectButton } from '../styles';

const Option = ({ label, checked, onCheck, disabled }) => {
	const handleCheck = useCallback(() => {
		if (!disabled) onCheck(label);
	}, [label, onCheck]);

	return (
		<OptionWrapper>
			<SelectButton
				checked={checked}
				onClick={handleCheck}
				disabled={disabled}
			/>
			<OptionLabel>{label}</OptionLabel>
		</OptionWrapper>
	);
};

export default React.memo(Option);
