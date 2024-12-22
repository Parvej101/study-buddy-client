import { Children, createContext, useEffect, useState, GoogleAuthProvider, useContext } from "react";
import auth from "./firebase.config";



const AuthContext = createContext()
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()


    // Monitor user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe()
    }, []);

    // Login function
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Register function 

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Google login function
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    //Logout function

    const logOut = () => {
        return signOut(auth);
    }
    const authData = {
        user,
        loading,
        register,
        login,
        googleLogin,
        logOut,
    }

            return(
                <AuthContext.Provider value={authData}>
                    {children}
                </AuthContext.Provider>
            )

}
        export const useAuth = () => {
         return useContext(AuthContext);
};


