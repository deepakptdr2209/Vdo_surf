
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login  from './Login'
import  Browse  from './Browse'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import auth from '../utils/FirebaseAuth'
import { useAppDispatch } from '../Hooks'
import { addUser, removeUser } from '../utils/UserSlice'


const Body = () => {
  const dispatch = useAppDispatch();
  const router = createBrowserRouter([
    {
        path : "/",
        element: <Login/>
    },
    {
        path : "/browse",
        element : <Browse/>
    }
  ]);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, displayName, email, photoURL} = user;
        dispatch(addUser({
          uid:uid,
          email:email, 
          displayName:displayName, 
          photoURL:photoURL
        }))
        
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
       
      }
    });
  }, [dispatch])

  return (
   <div>
     <RouterProvider router={router}/>
   </div>
           
   
  )
}
 

export default Body;
