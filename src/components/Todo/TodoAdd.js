import styled from 'styled-components';

function myTodoAdd({ className, children, addTodo }) {
  return (
    <button className={ className }>
      {children}
    </button>
  )
}

const TodoAdd = styled(myTodoAdd)`
  margin-right: 1rem;
  text-decoration: none;
  color: #fff;
  background-color: #26a69a;
  text-align: center;
  letter-spacing: .5px;
  transition: background-color .2s ease-out;
  cursor: pointer;
  font-size: 14px;
  outline: 0;
  border: none;
  border-radius: 2px;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  text-transform: uppercase;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  overflow: visible;

  &:hover {
    background-color: #2bbbad;
  }

`;

export default TodoAdd;