import React, {createContext} from 'react';
import {FCC} from '../types/common';

interface Context {
  authToken: string;
}
const AuthContext = createContext<Context>({} as Context);
export const AuthProvider: FCC = ({children}) => {
  return (
    <AuthContext.Provider value={{authToken: ''}}>
      {children}
    </AuthContext.Provider>
  );
};
