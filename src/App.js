import MainPage from './Pages/MainPage/MainPage';
import ProgramsPage from './Pages/ProgramsPage/ProgramsPage';
import NewsPage from './Pages/NewsPage/NewsPage';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <ul>
            <li>
              <Link to='/codeacademy'>CodeAcademy Project</Link>
            </li>
            <li>
              <Link to='/other-projects/contacts'>Contacts Project</Link>
            </li>
          </ul>
        } />
        <Route path='/codeacademy' element={<MainPage />} />
        <Route path='/codeacademy/news' element={<NewsPage />} />
        <Route path='/codeacademy/programs' element={<ProgramsPage />} />
        <Route path='/other-projects/contacts' element={<h1>Contacts</h1>} />
        <Route path='*' element={
          <div>
            <h1>404 error. Page not found</h1>
            <Link to='/'>Back to Home page</Link>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;