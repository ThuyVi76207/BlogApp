import './App.css';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';
import HomePage from './pages/home/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App font-opensans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route exact path="/blog/:id" element={<ArticleDetailPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
