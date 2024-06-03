import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading , setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const googleLogin =() =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        return signOut(auth).then(()=>setUser(null))
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
                console.log(currentUser);
            }else{
                setLoading(false)
            }
        })
        return unsubscribe
    },[])


    const userInfo = {
        user,
        googleLogin,
        createUser,
        signIn,
        loading,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;