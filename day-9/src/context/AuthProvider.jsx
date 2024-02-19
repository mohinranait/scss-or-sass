import { GoogleAuthProvider, OAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const UserContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const axiosPublic = useAxiosPublic();


    //Create a user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Sign in user
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Sign out user
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }


    //Sign in with Google
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    //Sign in with Microsoft
    const microsoftProvider = new OAuthProvider('microsoft.com');

    const signInWithMicrosoft = () => {
        setLoading(true);
        return signInWithPopup(auth, microsoftProvider);
    }





    //User observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                axiosPublic.post("/auth/jwt", { user: currentUser?.email })
                    .then(res => {
                        localStorage.setItem("access-token", `bearer ${res.data?.token}`);
                        setLoading(false);
                    });

            }
            else {
                localStorage.removeItem("access-token");
                setLoading(false);
            }
            setUser(currentUser);

        });

        return () => {
            unSubscribe();
        }
    }, []);



    const authInfo = {
        user,
        loading,
        createUser,
        logInUser,
        logOutUser,
        signInWithGoogle,
        signInWithMicrosoft
    }

    return <UserContext.Provider value={authInfo}>
        {children}
    </UserContext.Provider>
}

export default AuthProvider