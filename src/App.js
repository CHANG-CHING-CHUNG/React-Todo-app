import { ResetStyle } from './GlobalStyle'
import PageContainer from './containers/PageContainer';
import Todo from './components/Todo/Todo';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
    <ResetStyle/>
    <PageContainer>
      <Header/>
      <Todo/>
      <Footer/>
    </PageContainer>
    </div>
  );
}

export default App;
