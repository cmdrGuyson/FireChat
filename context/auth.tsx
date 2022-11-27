import { User } from "firebase/auth";
import React, { useEffect, useState, useContext, ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export interface IUserContext {
  user: User | null;
  isLoading: boolean;
  setUser: Function;
}

export const UserContext = React.createContext<IUserContext>({
  user: null,
  isLoading: true,
  setUser: Function,
});

export const FirebaseUserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      setIsLoading(false);
    });
    return unregisterAuthObserver;
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useFirebaseUser = (): IUserContext => {
  const context = useContext(UserContext);
  return context;
};
