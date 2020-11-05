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
function Todo() {
  const input = useRef();
  const editTextRef = useRef();
  let [activeStatus, setActive] = useState('all');
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
        isDone: true,
        isEditing: false,
        id:3
      },
      
    ]
    );

    const [inputValue, setInputValue] = useState('');

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

    function showSearch() {
      if(activeStatus !== 'search') {
        activeStatus = 'search';
        setActive(activeStatus)
      }
    }

    function clearAll() {
      setTodos([]);
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

   function handleSetChecked(e, todoId,todoIsDone) {
    if( !todoIsDone ) {
      const text = document.querySelector(`.todo`+ todoId);
      text.classList.add('line-through')
      const checkBox = document.querySelector(`.todo-box`+ todoId);
      checkBox.checked = true;
    } else {
      const text = document.querySelector(`.todo`+ todoId);
      text.classList.remove('line-through')
      const checkBox = document.querySelector(`.todo-box`+ todoId);
      checkBox.checked = false;
    }
     handleToggleTodoState(todoId)
   }

   function initLineThrough() {
    todos.forEach((todo) => {
      if( todo.isDone ) {
        const text = document.querySelector(`.todo`+ todo.id);
        if (text === null) {
          return
        }
        text.classList.add('line-through')
        const checkBox = document.querySelector(`.todo-box`+ todo.id);
        checkBox.checked = true;
      }
    })
   }

   function displayTodos(todo) {
    return  (
      <div data-todo-isdone={ todo.isDone } data-todo-isediting={ todo.isEditing } data-todo-id={ todo.id} key={ todo.id }>
        <TodoItem>
          <TodoLeft>
            <TodoCheckBox  className={'todo-box'+todo.id} onClick={(e) => handleSetChecked(e,todo.id,todo.isDone)} type="checkbox"/>
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
              todo.isDone
              ?
              <TodoRight>
                <TodoDelete onClick={ () => deleteTodo(todo.id) }>
                  Del
                </TodoDelete>
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
  
   useEffect(() => {
     if(activeStatus === 'all') {
       initLineThrough()
      } else if(activeStatus === 'done') {
        initLineThrough()
      } else if(activeStatus === 'search') {
        initLineThrough()
      }
      // eslint-disable-next-line
   })




    function conditionalRender() {
      if(activeStatus === 'active') {
         // eslint-disable-next-line
        return todos.map((todo) => {
          if(todo.isDone === false) {
            return displayTodos(todo)
          }
        })
      } else if (activeStatus === 'all') {
        return todos.map((todo) => {
          return displayTodos(todo)
        })
  
      } else if(activeStatus === 'done') {
         // eslint-disable-next-line
          return todos.map((todo) => {
              if (todo.isDone === true) {
                return displayTodos(todo)
              }
            })
       }else if(activeStatus === 'search') {
        // eslint-disable-next-line
         return todos.map((todo) => {
             if (todo.todo.indexOf(input.current.value) !== -1) {
               return displayTodos(todo)
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

              <TodoSearch onClick={() => showSearch()}>
                SEARCH
              </TodoSearch>

              <TodoClearAll onClick={() => clearAll()}>
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