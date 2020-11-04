import { useState } from 'react';
import TodoInputSection from './TodoInputSection';
import TodoTitle from './TodoTitle';
import TodoInputField from './TodoInputField';
import TodoInputBar from './TodoInputBar';
import TodoBtnWrapper from './TodoBtnWrapper';
import TodoRow from './TodoRow';
import TodoAdd from './TodoAdd';
import TodoSearch from './TodoSearch';
import TodoClearAll from './TodoClearAll';
import TodoAll from './TodoAll';
import TodoActive from './TodoActive';
import TodoCompleted from './TodoCompleted';
import TodoItemSection from './TodoItemSection';
import TodoItem from './TodoItem';
import TodoWrapper from './TodoWrapper';
import TodoLeft from './TodoLeft';
import TodoCheckBox from './TodoCheckBox';
import TodoText from './TodoText';
import TodoRight from './TodoRight';
import TodoEdit from './TodoEdit';
import TodoDelete from './TodoDelete';

let id = 4;

function Todo() {

  const [todos, setTodos] = useState(
    [
      {
        todo: '測試1',
        isDone: false,
        id:1
      },
      {
        todo: '測試2',
        isDone: false,
        id:2
      },
      {
        todo: '測試3',
        isDone: true,
        id:3
      },
      
    ]
    );

    

  return (
    <TodoWrapper>
      <TodoInputSection>
        <TodoTitle>
        Things must be done
        </TodoTitle>
        <TodoInputField>
          <TodoInputBar />
          <TodoBtnWrapper>
            <TodoRow>
              <TodoAdd addTodo={(todo => {
                setTodos({
                  ...todos,
                  todo
                })
              })}>
                Add
              </TodoAdd>
              <TodoSearch>
                SEARCH
              </TodoSearch>
              <TodoClearAll>
                CLEARALL
              </TodoClearAll>
            </TodoRow>
            <TodoRow>
              <TodoAll>
                ALL
              </TodoAll>
              <TodoActive>
                ACTIVE
              </TodoActive>
              <TodoCompleted>
                COMPLETED
              </TodoCompleted>
            </TodoRow>
          </TodoBtnWrapper>
        </TodoInputField>
      </TodoInputSection>

      <TodoItemSection>
      {
        todos.map((todo) => {
          return (
            <div>
              <TodoItem>
                <TodoLeft>
                  <TodoCheckBox type="checkbox"/>
                  <TodoText todo={ todo }/>
                </TodoLeft>

                <TodoRight>
                  <TodoEdit>
                    Edit
                  </TodoEdit>
                  <TodoDelete>
                    Del
                  </TodoDelete>
                </TodoRight>
              </TodoItem>
            </div>
          )
        })
      }
      </TodoItemSection>
    </TodoWrapper>
  );
}

export default Todo;