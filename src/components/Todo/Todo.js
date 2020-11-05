import { useState, useRef, useEffect } from 'react';
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
import TodoEditText from './TodoEditText';
import TodoSave from './TodoSave';
import TodoCancell from './TodoCancell';

let id = 4;
let isChecked = false;
function Todo() {

  const [todos, setTodos] = useState(
    [
      {
        todo: '測試1',
        isDone: false,
        isEditing: false,
        id:1
      },
      {
        todo: '測試2',
        isDone: false,
        isEditing: false,
        id:2
      },
      {
        todo: '測試3',
        isDone: false,
        isEditing: false,
        id:3
      },
      
    ]
    );

    const [inputValue, setInputValue] = useState('');
    const input = useRef();
    const editTextRef = useRef();

    const [editingInputValue, setEditingInputValue] = useState('');
    
    function handleSetInputValue(e){
      setInputValue(e.target.value)
    }

    function handleSetEditingTodoValue(e) {
      if (e.target.value === '') {
        return setEditingInputValue(' ');
      }
      setEditingInputValue(e.target.value.replace(/^ /,""))
    }

    function handleToggleEdit(todoId) {
      const alteredTodos = todos.map(todo => {
        if(todo.id === todoId) {
          todo.isEditing = true;
          return todo
        }
        return todo
      })
      setTodos(alteredTodos);
    }
    
    function handleCancellEdit(todoId) {
      const alteredTodos = todos.map(todo => {
        if(todo.id === todoId) {
          todo.isEditing = false;
          return todo
        }
        return todo
      })
      setTodos(alteredTodos);
    }

    function handleSaveEdit(todoId) {
      if (editTextRef.current.value === ' ') {
        return alert('不得為空!')
      }
      const alteredTodos = todos.map(todo => {
        if(todo.id === todoId) {
          todo.isEditing = false;
          todo.todo = editTextRef.current.value;
          return todo
        }
        return todo
      })
      setTodos(alteredTodos);
    }

    function addTodo(newValue) {
      if( newValue === '') {
        return alert('不能為空!')
      }
      setTodos([
        ...todos,
        {
          todo:newValue,
          isDone: false,
          isEditing: false,
          id:id
        }
      ]);
      id++;
      setInputValue('')
    }

    function deleteTodo(id) {
      setTodos(todos.filter((todo) => todo.id !== id ))
    }

    let [activeStatus, setActive] = useState('all');

    function showActive() {
      activeStatus = 'active';
      setActive(activeStatus)
    }

    function showAll() {
      activeStatus = 'all';
      setActive(activeStatus)
    }

    function showDone() {
      activeStatus = 'done';
      setActive(activeStatus)
    }

    function handleToggleTodoState(todoId) {
     const newTodos = todos.map(todo => {
       if(todo.id === todoId){
         todo.isDone = !todo.isDone;
         return todo;
       }
       return todo
     })
     setTodos(newTodos);
    }

   function handleSetChecked(e, todoId) {
    e.target.checked = e.target.checked ? false : true;
    console.log(e.target.checked)
    console.log(e.target)
    const text = document.querySelector(`.todo`+ todoId);
    text.classList.toggle('line-through')
    handleToggleTodoState(todoId)
   }

   function initLineThrough() {
    todos.forEach((todo) => {
      if( todo.isDone ) {
        const text = document.querySelector(`.todo`+ todo.id);
        text.classList.add('line-through')
        const checkBox = document.querySelector(`.todo-box`+ todo.id);
        checkBox.checked = true;
      }
    })
   }

   useEffect(() => {
    if(activeStatus === 'all') {
      initLineThrough()
    } else if(activeStatus === 'done') {
      initLineThrough()
    }
   },[activeStatus])




    function conditionalRender() {
      if(activeStatus === 'active') {
        return todos.map((todo) => {
          if(todo.isDone === false) {
            return  (
            <div data-todo-isdone={ todo.isDone } data-todo-isediting={ todo.isEditing } data-todo-id={ todo.id} key={ todo.id }>
              <TodoItem>
                <TodoLeft>
                  <TodoCheckBox  className={'todo-box'+todo.id} onClick={(e) => handleSetChecked(e,todo.id)} type="checkbox"/>
                  {
                    todo.isEditing 
                    ?
                    <TodoEditText ref={editTextRef} value={ editingInputValue || todo.todo } onChange= { handleSetEditingTodoValue } />
                    :
                    <TodoText className={'todo'+todo.id}>
                      {todo.todo}
                    </TodoText>
                  }
                </TodoLeft>

                <TodoRight>
                {
                  todo.isEditing 
                    ?
                    <TodoRight>
                      <TodoSave onClick={() => handleSaveEdit(todo.id)}>
                        Save
                      </TodoSave>

                      <TodoCancell onClick={ () => handleCancellEdit(todo.id)}>
                        Cancell
                      </TodoCancell>
                    </TodoRight>
                    :
                    <TodoRight>
                      <TodoEdit onClick={() => handleToggleEdit(todo.id) }>
                      Edit
                      </TodoEdit>

                      <TodoDelete onClick={ () => deleteTodo(todo.id) }>
                        Del
                      </TodoDelete>
                    </TodoRight>
                }
                </TodoRight>
              </TodoItem>
            </div>
            )
          }
        })
      } else if (activeStatus === 'all') {
        return todos.map((todo) => {
            return (
              <div data-todo-isdone={ todo.isDone } data-todo-isediting={ todo.isEditing } data-todo-id={ todo.id} key={ todo.id }>
                <TodoItem>
                  <TodoLeft>
                    <TodoCheckBox  className={'todo-box'+todo.id} onClick={(e) => handleSetChecked(e,todo.id)} type="checkbox"/>
                    {
                      todo.isEditing 
                      ?
                      <TodoEditText ref={editTextRef} value={ editingInputValue || todo.todo } onChange= { handleSetEditingTodoValue } />
                      :
                      <TodoText className={'todo'+todo.id}>
                        {todo.todo}
                      </TodoText>
                    }
                  </TodoLeft>

                  <TodoRight>
                  {
                    todo.isEditing 
                      ?
                      <TodoRight>
                        <TodoSave onClick={() => handleSaveEdit(todo.id)}>
                          Save
                        </TodoSave>

                        <TodoCancell onClick={ () => handleCancellEdit(todo.id)}>
                          Cancell
                        </TodoCancell>
                      </TodoRight>
                      :
                      <TodoRight>
                        <TodoEdit onClick={() => handleToggleEdit(todo.id) }>
                        Edit
                        </TodoEdit>

                        <TodoDelete onClick={ () => deleteTodo(todo.id) }>
                          Del
                        </TodoDelete>
                      </TodoRight>
                  }
                  </TodoRight>
                </TodoItem>
              </div>
            )
        })
  
      } else if(activeStatus === 'done') {
          return todos.map((todo) => {
              if (todo.isDone === true) {
                return (
                  <div data-todo-isdone={ todo.isDone } data-todo-isediting={ todo.isEditing } data-todo-id={ todo.id} key={ todo.id }>
                    <TodoItem>
                      <TodoLeft>
                        <TodoCheckBox  className={'todo-box'+todo.id} onClick={(e) => handleSetChecked(e,todo.id)} type="checkbox"/>
                        {
                          todo.isEditing 
                          ?
                          <TodoEditText ref={editTextRef} value={ editingInputValue || todo.todo } onChange= { handleSetEditingTodoValue } />
                          :
                          <TodoText className={'todo'+todo.id}>
                            {todo.todo}
                          </TodoText>
                        }
                      </TodoLeft>
      
                      <TodoRight>
                      {
                        todo.isEditing 
                          ?
                          <TodoRight>
                            <TodoSave onClick={() => handleSaveEdit(todo.id)}>
                              Save
                            </TodoSave>
      
                            <TodoCancell onClick={ () => handleCancellEdit(todo.id)}>
                              Cancell
                            </TodoCancell>
                          </TodoRight>
                          :
                          <TodoRight>
                            <TodoEdit onClick={() => handleToggleEdit(todo.id) }>
                            Edit
                            </TodoEdit>
      
                            <TodoDelete onClick={ () => deleteTodo(todo.id) }>
                              Del
                            </TodoDelete>
                          </TodoRight>
                      }
                      </TodoRight>
                    </TodoItem>
                  </div>
                )
              }
            })
       }
    }


    

  return (
    <TodoWrapper>
      <TodoInputSection>
        <TodoTitle>
        Things must be done
        </TodoTitle>
        <TodoInputField>
          <TodoInputBar ref={ input } value={ inputValue } onChange={ handleSetInputValue } placeholder="New Task" type="text" />
          <TodoBtnWrapper>
            <TodoRow>
              <TodoAdd onClick={() => addTodo(input.current.value)}>
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
              <TodoAll onClick={() => showAll()}>
                ALL
              </TodoAll>
              <TodoActive onClick={() => showActive()}>
                ACTIVE
              </TodoActive>
              <TodoCompleted onClick={() => showDone()}>
                COMPLETED
              </TodoCompleted>
            </TodoRow>
          </TodoBtnWrapper>
        </TodoInputField>
      </TodoInputSection>

      <TodoItemSection>
      {
        conditionalRender()
      }
      </TodoItemSection>
    </TodoWrapper>
  );
}

export default Todo;