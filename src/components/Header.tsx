/* eslint-disable @typescript-eslint/ban-ts-comment */
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../utils/FirebaseAuth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Hooks";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/UserSlice";



 const Header = () => {
  const navigate = useNavigate();
  const user = useAppSelector((store)=>store.user)
const dispatch = useAppDispatch()
  useEffect(()=>{
   const unsbscribe = onAuthStateChanged(auth, (user) => {
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
        navigate('/browse')
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/')
       
      }
    });
    return ()=>unsbscribe();
  }, [])
 function handleclick(){
  signOut(auth).then(() => {
    // Sign-out successful.
    //navigate("/")
  }).catch((error) => {
    // An error happened.
    alert(error)
  });
 }
  return (
    <div className='absolute  w-screen bg-gradient-to-b from-black/50 via-black/30 to-transparent z-10 overflow-x-hidden '>
      <div className="flex fixed top-0 left-0 right-0 justify-between px-16 py-2 mx-4">
          <img 
            className='w-44 h-28 pb-4'
            src="https://loodibee.com/wp-content/uploads/Netflix-logo.png" 
            alt="logo" />
            { user && 
              <div className="relative flex flex-row justify-around w-16 h-16 pr-5 mx-5">
              
              <img className="m-2 p-1" 
              // @ts-expect-error
               src={user.photoURL} 
                alt="user-icon" />

              <button onClick={handleclick} type="button" 
                      className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                  Logout
              </button>   
             </div>
            }
      </div>          
    </div>
  )
}
export default Header
