import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import RequireAuth from './routes/RequireAuth';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <>
      <AuthProvider>
        <GlobalStyle/>
        <BrowserRouter>
              <Routes>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/register" element={<Register/>}/>

                  <Route path="/" element={(
                    <RequireAuth>
                      <Home/>
                    </RequireAuth>
                  )}/>

                  <Route path="*" element={(
                    <RequireAuth>
                      <NotFound/>
                    </RequireAuth>
                  )}/>
              </Routes>
          </BrowserRouter>
      </AuthProvider>
      
    </>
  );
}

export default App;
