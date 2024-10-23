import { useState } from "react";
import ValidateInput from "../utils/Validation";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../utils/FirebaseAuth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Hooks";
import { addUser } from "../utils/UserSlice";
 
interface FormData {
    name : string;
    email: string;
    password: string;
  }

 const LoginCard :React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [isSignIn ,setIsSignIn] = useState(true)
    const [formData , setFormData] = useState<FormData>({
        name: "",
        email : "",
        password : "",
    })
    const [errors, setErrors] = useState<Partial<FormData>>({});
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
       setFormData({
        ...formData,
        [e.target.name]: e.target.value,
       })
    }

  async  function  handleClick(){
         const result =  ValidateInput.safeParse(formData);
         if (!result.success) {
            // If validation fails, map errors to the state
            const zodErrors = result.error.format();
            setErrors({
              email: zodErrors.email?._errors[0],
              password: zodErrors.password?._errors[0],
            });
            
            
          } else {
            // If validation passes, clear errors and proceed with form submission
            setErrors({});
            // Handle form submission logic here (e.g., send data to server)
            // ------ FOR SIGNUP 
                if(!isSignIn){
                    await createUserWithEmailAndPassword(auth, formData.email, formData.password)
                        .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                       //update user profile below
                       updateProfile(user, {
                            displayName: formData.name, 
                            photoURL: "https://example.com/jane-q-user/profile.jpg"
                      }).then(() => {
                        // Profile updated!
                        const {uid, displayName, email, photoURL} = auth.currentUser || {};
    
                        dispatch(addUser({
                          uid:uid,
                          email:email, 
                          displayName:displayName, 
                          photoURL:photoURL
                        }))
                        navigate('/browse');
                      }).catch((error) => {
                        // An error occurred
                        console.log(error);
                        
                      });
                       
                        // ...
                        })
                        .catch((error) => {
                        const errorCode = error.code;
                       // const errorMessage = error.message;
                        // ..
                        setErrors(errorCode);
                        });
                }
                else {
                    await signInWithEmailAndPassword(auth, formData.email, formData.password)
                          .then((userCredential) => {
                // Signed in 
                        const user = userCredential.user;
                        console.log(user);
                        navigate('/browse')
                        // ...
                    })
            .catch((error) => {
                const errorCode = error.code;
               // const errorMessage = error.message;
                setErrors(errorCode);
            });
            }
            
        }
        }
    function toggleSignIn(){
     setIsSignIn(!isSignIn);
    }

  return (
    <div className="items-center flex relative z-10 justify-center h-screen">
        <div className="w-4/12 m-6 p-6 bg-black opacity-80 ">
            <h1 className="text-white font-bold text-2xl px-4 py-2 m-2">
                {isSignIn?"Signin":"Signup"}
            </h1>
            <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col ">
                {!isSignIn && 
                <input 
                    className="m-2 px-4 py-2 w-auto rounded-md bg-slate-300 text-white" 
                    type="text"
                    name ="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"/>}
                <input 
                 className="m-2 px-6 py-2 w-auto rounded-md bg-slate-300"
                 type="text" 
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 placeholder="email"/>
                 {errors.email &&( <p className="text-red-500 text-xs italic">{errors.email}</p>)}
                <input 
                 className="m-2 px-6 py-2 w-auto rounded-md bg-slate-300" 
                 type="password" 
                 name="password"
                 value={formData.password}
                 onChange={handleChange}
                 placeholder="password"/>
                 {errors.password && (<p className="text-red-500 text-xs italic">{errors.password}</p>)}
                <button 
                 onClick={handleClick} 
                 className="p-2 m-2 w-auto bg-red-600 rounded-md">
                    Signin
                    </button>
            </form>
            <h1 className="text-white p-2 m-2 cursor-pointer  " onClick={toggleSignIn}>
                {isSignIn ? " New to Netflix? Sign up now.":"Already a user | Signin"}
            </h1>
        </div>
  
    </div>
  )
};




export default LoginCard;