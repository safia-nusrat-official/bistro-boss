import React, { createContext, useEffect, useState } from 'react'
import { app } from '../firebase/firebase.config'
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

const auth = getAuth(app)

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
      console.log(currentUser)
      setLoading(false)
    })

    return ()=>unsubscribe()
  }, [])
  const Signup = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const Login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const UpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
  }
  const LoginGoogle = () => {
    setLoading(true)
    const provider = new GoogleAuthProvider()
    provider.addScope("email")
    return signInWithPopup(auth, provider)
  }

  const LoginGitHub = () => {
    setLoading(true)
    const provider = new GithubAuthProvider()
    provider.addScope("email")
    return signInWithPopup(auth, provider)
  }
  
  const UpdateEmailAddress = (email) => {
    return updateEmail(auth.currentUser, email)
  }
  const LoginFacebook = () => {
    setLoading(true)
    const provider = new FacebookAuthProvider()
    provider.addScope("email")
    return signInWithPopup(auth, provider)
  }

  const Logout = () => {
    setLoading(true)
    return signOut(auth)
  }

  const authInfo = {
    user,
    loading,
    Signup,
    Login,
    Logout,
    LoginGoogle,
    LoginFacebook,
    LoginGitHub,
    UpdateProfile,
    UpdateEmailAddress
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider