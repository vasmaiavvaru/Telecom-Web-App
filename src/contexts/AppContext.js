import { createContext, useReducer, useContext, useMemo } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [appState, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'LOADING':
                return { ...state, loading: true }
            case 'PLAN_SELECTED':
                return { ...state, loading: false, selectedPlan: action.payload?.plan };
            case 'STORE_PAYMENT_DETAILS':
                    return { ...state, loading: false, paymentDetails: action.payload?.paymentDetails };
            default:
                throw new Error();
        }
    }, {
        selectedPlan: null,
        plans: null,
        paymentDetails: null,
        profile: null,
        loading:false
    });

    const appContext = useMemo(
        () => {
            return {
                appState,
                dispatch,
                selectPlan: (data) => {
                    dispatch({ type: 'PLAN_SELECTED', payload: { plan: data } })
                },
                storePaymentDetails: (data) => {
                    dispatch({ type: 'STORE_PAYMENT_DETAILS', payload: { paymentDetails: data } })
                }
            }
        },
        [appState]
    );

    return (
        <AppContext.Provider
            value={appContext}
        >
            {children}
        </AppContext.Provider>
    );
}

function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error(
            "useAppContext must be used within a AppProvider"
        );
    }
    return context;
}

export { AppProvider, useAppContext };