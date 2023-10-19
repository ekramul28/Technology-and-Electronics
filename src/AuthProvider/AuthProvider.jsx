import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();
    const logInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }
    const register = (email, password, displayName, photoURL) => {
        return createUserWithEmailAndPassword(auth, email, password, displayName, photoURL)

    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const Logout = () => {
        setLoading(true);
        return signOut(auth);

    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        user,
        register,
        logInWithGoogle,
        login,
        loading,
        Logout
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;