import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() =>{
        const unSubscribe =onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false)
        })
        return () =>{
            return unSubscribe()
        }
    },[])
    const authInfo ={
        user,
        loading,
        createUser,
        logIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;