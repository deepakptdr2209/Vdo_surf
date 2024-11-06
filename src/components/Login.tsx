
import Header from './Header';
import LoginCard from './LoginCard';

 const Login = () => {
  return (
    <div className=''>
        <Header/>
        <div className="absolute max-h-screen max-w-screen bg-cover bg-center bg-no-repeat z-0 ">
        <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg"
         alt="bg-image" />
        </div>
        <div className=''>
        <LoginCard/>
        </div>
      
    </div>
  )
}
 export default Login;
