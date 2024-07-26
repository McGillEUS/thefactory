import {createContext, useContext, useReducer} from "react";

export interface GlobalState {
    isAdmin: boolean,
    isEditing: boolean,
}

const defaultGlobalState: GlobalState = {
    isAdmin: true,
    isEditing: true,
}

const globalStateContext = createContext(defaultGlobalState);
const dispatchStateContext = createContext(undefined);

export const useGlobalState = () => [
    useContext(globalStateContext),
    useContext(dispatchStateContext)
];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const GlobalStateProvider = ({children}) => {
    const [state, dispatch] = useReducer(
        (state: GlobalState, newValue: GlobalState) => ({...state, ...newValue}),
        defaultGlobalState
    );

    return (
        <globalStateContext.Provider value={state}>
            <dispatchStateContext.Provider value={dispatch}>
                {children}
            </dispatchStateContext.Provider>
        </globalStateContext.Provider>
    );
};
