import styled from 'styled-components';

export const OptionWrapper = styled.div`
	padding: 20px;
	display: inline-flex;
`;

export const OptionLabel = styled.div`
	margin-left: 5px;
	user-select: none;
`;

export const OptionContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SelectButton = styled.div`
	${(props) => props.checked && 'background-color: white;'}
	${(props) => !props.disabled && 'border: 1px solid white;'}
	width: 20px;
	height: 20px;
	border-radius: 5px;
`;
