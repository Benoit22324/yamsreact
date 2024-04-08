import { createContext, useContext, useReducer } from "react";
import DiceReducer from "../reducer/DiceReducer";
import { init } from "../reducer/DiceReducer";

const DiceContext = createContext();

export const useDiceContext = () => {
    return useContext(DiceContext);
}

const DiceContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(DiceReducer, init);

    return <DiceContext.Provider value={[state, dispatch]}>
        {children}
    </DiceContext.Provider>
}

export default DiceContextProvider