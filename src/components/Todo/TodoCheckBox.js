import styled from 'styled-components';

const TodoCheckBox = styled.input.attrs(props => ({
  className: props.className
}))`
  margin-right: 3rem;
  transform: scale(1.3);
  cursor: pointer;
  
  [type="checkbox"]:not(checked), [type="checkbox"]:checked {
    position: relative;
    opacity: 1;
    pointer-events: all;
  }
`;

export default TodoCheckBox;