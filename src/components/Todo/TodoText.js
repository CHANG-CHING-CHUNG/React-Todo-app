import styled from 'styled-components';


function myTodoText({ className, todo }) {
  return (
    <div className = {className}>
      {todo.todo}
    </div>
  )

}

const TodoText = styled(myTodoText)`
  margin-bottom: 3px;
  font-size: 18px;
  font-family: microsoft jhenghei;
  display: flex;
`;

export default TodoText;