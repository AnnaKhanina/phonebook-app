import styled from '@emotion/styled';

export const ButtonDeleteStyle = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
transition: transform 250ms linear, color 250ms linear;
transform: translateY(0);
& svg {
  width: 30px;
  height: 30px;
}

&:hover {
  color: purple;
  transform: translateY(-5px);
}

&:disabled {
}
`;

export default ButtonDeleteStyle;