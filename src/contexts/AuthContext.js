import { createContext, useReducer, useContext, useMemo } from 'react';
import { SignInWithEmailAndPassword, CreateUserWithEmailAndPassword } from '../services/AuthService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'LOADING':
                return { ...state, loading: true }
            case 'LOGIN_SUCCESS':
                return { ...state, loading: false, user: action.payload?.user };
            case 'LOGIN_ERROR':
                return { ...state, loading: false, error: action.payload };
            case 'REGISTER_SUCCESS':
                return { ...state, registerLoading: false, user: action.payload };
            case 'REGISTER_ERROR':
                return { ...state, registerLoading: false, error: action.payload };
            case 'SIGNOUT_SUCCESS':
                return { loading: false, user: null };
            default:
                throw new Error();
        }
    }, {
        user: null,
        error: null,
        loading: true,
    });

    const authContext = useMemo(
        () => {
            return {
                authState,
                dispatch,
                signIn: async (data) =>{
                    dispatch({ type: 'LOADING' })
                    await SignInWithEmailAndPassword(data)
                    .then((user) => {
                        dispatch({ type: 'LOGIN_SUCCESS', payload: { user: user } })
                    })
                },
                signUp: async (data) => {
                    dispatch({ type: 'LOADING' })
                    await CreateUserWithEmailAndPassword(data)
                    .then((user) => {
                        dispatch({ type: 'REGISTER_SUCCESS', payload: { user: user } })
                    })
                },
                signOut: async () => {
                    dispatch({ type: 'SIGNOUT_SUCCESS' })
                }
            }
        },
        [authState]
    );

    return (
        <AuthContext.Provider
            value={authContext}
        >
            {children}
        </AuthContext.Provider>
    );
};

function useAuthContext() {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error(
        "useAuthContext must be used within a AuthProvider"
      );
    }
    return context;
  }

export { AuthProvider, useAuthContext };
