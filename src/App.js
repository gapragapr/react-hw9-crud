import { Routes, Route } from 'react-router-dom'
import './App.css';
import MainPage from './Components/Pages/MainPage/MainPage';
import NewPostPage from './Components/Pages/NewPostPage/NewPostPage';
import ViewPostPage from './Components/Pages/ViewPostPage/ViewPostPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/posts/new' element={<NewPostPage />} />
        <Route path='/posts/:id' element={<ViewPostPage />} />
      </Routes>
    </div>
  );
}

export default App;
