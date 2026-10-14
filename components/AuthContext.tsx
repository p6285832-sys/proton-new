"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, signInWithPhoneNumber, applyActionCode } from "firebase/auth";
import { auth } from "@/lib/firebase";

interface AuthContextType {
  user: any;
  loading: boolean;
  login: (email: string, password: string) => Promise<any>;
  googleLogin: () => Promise<any>;
  logout: () => Promise<any>;
  phoneLogin: (phone: string, recaptcha?: string) => Promise<any>;
}

const AuthContext = createContext<AuthContextType>({ user: null, loading: true, login: async () => {}, googleLogin: async () => {}, logout: async () => {}, phoneLogin: async () => {} });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => { setUser(u); setLoading(false); });
    return unsub;
  }, []);

  const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
  const googleLogin = () => { const g = new GoogleAuthProvider(); return signInWithPopup(auth, g); };
  const logout = () => signOut(auth);
  const phoneLogin = async (phone: string) => {
    // Placeholder: RecaptchaVerifier setup removed for build; add when Firebase Auth is fully configured.
    return Promise.resolve({ verificationId: "placeholder" });
  };

  return <AuthContext.Provider value={{ user, loading, login, googleLogin, logout, phoneLogin }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
