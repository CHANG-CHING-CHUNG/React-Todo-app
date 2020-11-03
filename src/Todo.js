import styled from 'styled-components'

const TodoWrapper = styled.section`
  max-width: 700px;
  margin: auto;
  padding: 0 2rem;
      padding-bottom: 0px;
  padding-bottom: 5rem;
`;

const TodoInputSection = styled.div`
  text-align: center;
`;

const TodoTitle = styled.h2`
  font-size: 3.56rem;
  line-height: 110%;
  margin: 2.3733333333rem 0 1.424rem 0;
`;

const TodoInputField = styled.div`
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const TodoInputBar = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 16px;
  margin: 0 0 8px 0;
  padding: 0;
  box-shadow: none;
  box-sizing: content-box;
  transition: box-shadow .3s, border .3s, -webkit-box-shadow .3s;

  &::placeholder {
    color: #d1d1d1;
  }
  &:focus:not([readonly]) {
    border-bottom: 1px solid #26a69a;
    box-shadow: 0 1px 0 0 #26a69a;  
  }
`;

const TodoBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TodoRow = styled.div`
  display: flex;
`;

const TodoAdd = styled.button`
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

const TodoSearch = styled(TodoAdd)``;

const TodoClearAll = styled(TodoAdd)``;

const TodoAll = styled.button`
  background-color: #33691e;
  margin-right: 1rem;
  text-decoration: none;
  color: #fff;
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
    background-color: #558b2f !important;
  }
`;

const TodoActive = styled(TodoAll)``;
const TodoCompleted = styled(TodoAll)``;

const TodoItemSection = styled.div``;

const TodoItem = styled.div`
  display: flex;
  border: 1px solid #939090;
  padding: 1rem 2rem;
  text-align: center;
  justify-content: space-between;
`;

const TodoLeft = styled.div`
  display: flex;
  width: 100%;
`;

const TodoCheckBox = styled.input`
  margin-right: 3rem;
  transform: scale(1.3);
  cursor: pointer;
  
  [type="checkbox"]:not(checked), [type="checkbox"]:checked {
    position: relative;
    opacity: 1;
    pointer-events: all;
  }
`;

const TodoText = styled.div`
  margin-bottom: 3px;
  font-size: 18px;
  font-family: microsoft jhenghei;
  display: flex;
`;

const TodoRight = styled.div`
  display: flex;
`;

const TodoEdit = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px;
  min-width: 60px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
`;

const TodoDelete = styled(TodoEdit)`
  background-color: red;
`;

function Todo() {
  return (
    <TodoWrapper>
      <TodoInputSection>
        <TodoTitle/>
        <TodoInputField>
          <TodoInputBar placeholder="New Task" type="text"/>
          <TodoBtnWrapper>
            <TodoRow>
              <TodoAdd>
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
        <TodoItem>
          <TodoLeft>
            <TodoCheckBox type="checkbox"/>
            <TodoText>
              睡覺
            </TodoText>
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
      </TodoItemSection>
    </TodoWrapper>
  );
}

export default Todo;