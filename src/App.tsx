import {Routes, HashRouter, Route} from 'react-router-dom';
import {Login,Index} from './pages';
import './App.css'
import { Provider } from 'react-redux';
import {store} from './store';
import { Dashboard } from './pages/Dashboard';

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
          </Routes>
        </HashRouter>
      </Provider>      
    </div>
  )
}


