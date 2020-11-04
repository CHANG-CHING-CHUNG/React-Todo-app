import styled from 'styled-components';

const Logo = styled.h3`
  margin: 0;
  font-size: 2.92rem;
  line-height: 110%;
  font-weight: 400;
`;

function MyHeader({ className }) {
  return (
    <header className={ className }>
      <Logo>
        ToDo List
      </Logo>
    </header>
  )
}
const Header = styled(MyHeader)`
  height: 80px;
  padding: 1rem;
  background-color: #ff6f61;
  color: #fff;
  text-align: center;
  display: block;
`;


export default Header;