import styled from 'styled-components';


function MyFooter({ className }) {
  return (
    <footer className={ className }>
      <div>
        Made By John ❤
      </div>
    </footer>
  )
}
const Footer = styled(MyFooter)`
  color: #fff;
  font-size: 40px;
  text-align: center;
  background: #885151;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: block;
`;


export default Footer;