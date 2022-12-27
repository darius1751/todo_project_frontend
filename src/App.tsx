import {Routes, HashRouter, Route, useNavigate} from 'react-router-dom';
import {Login,Index} from './pages';
import './App.css'
import { Provider, useSelector } from 'react-redux';
import {PersonStore, store} from './store';
import { Dashboard } from './pages/Dashboard';
import { Register } from './pages/Register';
import { PersonSlice } from './store/slices/personSlice';

export const App = () => {

  return (
    <div>
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='dashboard' element={<Dashboard/>}>
            </Route>
            <Route path='register' element={<Register/>}/>
          </Routes>
        </HashRouter>
      </Provider>      
    </div>
  )
}


