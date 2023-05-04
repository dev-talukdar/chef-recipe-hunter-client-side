import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const customRegister = (email, pass) => {        
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const customLogin = (email, pass) => {        
        return signInWithEmailAndPassword(auth, email, pass)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return() => {
            unsubscribe()
        }

    },[])

    const handlelLogout = ()=>{
 
        return signOut(auth)
    }

    const authInfo = {
        user, customRegister, customLogin, handlelLogout
    }



    return (
        <AuthContext.Provider value = {authInfo}> 
            {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;