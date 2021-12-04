import React, { createContext, useContext, useEffect, useState } from 'react';
import '../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged,signInWithEmailAndPassword} from 'firebase/auth';

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    const auth = getAuth();
    // signup function 

   async function signup( email, password, username ){
       await createUserWithEmailAndPassword( auth , email, password);

       // update profile
       await updateProfile(auth.currentUser, 
            {
                displayName:username
            }
        );

        const user = auth.currentUser;
        setCurrentUser({...user})
    }


    // login function 

    function login( email, password){
        return signInWithEmailAndPassword(auth , email, password);
    }

    // logout function 

    function logout(){
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth , (user)=>{
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    },[])

    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;