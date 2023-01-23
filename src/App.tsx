import {Routes, HashRouter, Route, useNavigate} from 'react-router-dom';
import {Login,Index, CreateTask} from './pages';
import './App.css'
import { Provider} from 'react-redux';
import { store } from './store';
import { Dashboard } from './pages/Dashboard';
import { Register } from './pages/Register';

export const App = () => {

  return (
    <div>
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='dashboard/create-task' element={<CreateTask/>}/>
            <Route path='register' element={<Register/>}/>
          </Routes>
        </HashRouter>
      </Provider>      
    </div>
  )
}


