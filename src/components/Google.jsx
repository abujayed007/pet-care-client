import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../authContext/AuthProvider';


const Google = () => {
    const { googleLogin } = useContext(AuthContext)
    const token = localStorage.getItem('token')

    const handleGoogle = () => {
        googleLogin()
            .then(data => {
                const user = data.user
                const userInfo = {
                    name: user?.displayName,
                    email: user?.email
                }
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                        authorization:`Bearer ${token}`
                    },
                    body: JSON.stringify(userInfo)
                }).then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        localStorage.setItem('token', data?.token)
                    })
            })
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