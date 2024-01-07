import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../src/Firebase/firebase.config"
import PropTypes from 'prop-types';


export const AuthContext = createContext()
const auth = getAuth(app);




const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);


    // creating user with email and password
    const createWithEmailPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };


    // sign in user with email and password
    const signInWithEmailPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };


    // Getting the current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Current User:', currentUser);
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        setLoading,
        createWithEmailPass,
        signInWithEmailPass,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
};