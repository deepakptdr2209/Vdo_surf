
import { Provider } from 'react-redux'
import './App.css'
import Body  from './components/Body'
import AppStore from './utils/AppStore'


export default function App() {
 

  return (
    <>
    <Provider store={AppStore}  >
        <Body/>
    </Provider>
     
    </>
  )
}

 
