
import './App.css';
import { useEffect,useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from './utilities/users-service'
import AuthPage from './pages/AuthPage/AuthPage';
import BlogDetailPage from './pages/BlogDetailPage/BlogDetailPage';
import HomePage from './pages/HomePage/HomePage';
import MyBlogPage from './pages/MyBlogPage/MyBlogPage';
import NavBar from './components/Navbar/NavBar';
function App() {
  const [user, setUser] = useState(getUser());
  // console.log('current user', user)

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/homepage/myblogs" element={<MyBlogPage  />} />
            <Route path="/homepage/myblogs/:symbol" element={<MyBlogPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;