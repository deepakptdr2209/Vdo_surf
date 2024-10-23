/* eslint-disable @typescript-eslint/ban-ts-comment */
import { signOut } from "firebase/auth";
import auth from "../utils/FirebaseAuth";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../Hooks";



 const Header = () => {
  const navigate = useNavigate();
  const user = useAppSelector((store)=>store.user)
 function handleclick(){
  signOut(auth).then(() => {
    // Sign-out successful.
    navigate("/")
  }).catch((error) => {
    // An error happened.
    alert(error)
  });
 }
  return (
    <div className='absolute w-screen bg-gradient-to-b from-black z-10 overflow-x-hidden '>
      <div className="flex justify-between px-16 py-2 mx-4 mt-2">
          <img 
            className='w-44 h-28 '
            src="https://loodibee.com/wp-content/uploads/Netflix-logo.png" 
            alt="logo" />
            { user && <div className="relative flex flex-row justify-around w-16 h-16 pr-5 mx-5">
              
              
          
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
