import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../authContext/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Google = () => {
    const {googleLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const handleGoogle = () =>{
        googleLogin()
    }
    return (
      
            <div >
                <button onClick={handleGoogle} className='btn flex items-center mx-auto w-full justify-center bg-blue-600 p-2 rounded-lg'>
                    <FcGoogle className='text-3xl' />
                    <h2 className='text-xl text-white'>Google</h2>
                </button>
            </div>
        
    );
};

export default Google;