import styled from 'styled-components';


const TodoText = styled.div.attrs(props => ({
  className: props.className
}))`
  margin-bottom: 3px;
  font-size: 18px;
  font-family: microsoft jhenghei;
  display: flex;
`;

export default TodoText;