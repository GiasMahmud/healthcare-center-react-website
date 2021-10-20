import { signOut, onAuthStateChanged, getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();

    const handleGooleSignIn = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider);

    };

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }
        console.log(user)
    }

    const processLogin = (from, history) => {
        console.log(from, history)

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                history.replace(from)
            })


    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }



    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }



    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((error) => {

            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                console.log(user)
            }
            else {
                setUser({})
            }
        })
    }, [])

    return {
        handleRegistration,
        isLogin,
        error,
        email,
        user,
        logOut,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        handleGooleSignIn,
        processLogin

    }
};


export default useFirebase;