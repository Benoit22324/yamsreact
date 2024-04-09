export const init = {
    exp: '',
    brelan: 0,
    total: 0,
    result: [],
    errmsg: '',
}

const DiceReducer = (state, action) => {
    switch(action.type) {
        case 'updatevalue': return {
            ...state,
            exp: action.payload,
            errmsg: '',
        }

        case 'addresult': return {
            ...state,
            result: [...state.result, {exp: state.exp, brelan: state.brelan}],
            total: state.total + state.brelan,
            brelan: 0,
            exp: '',
            errmsg: '',
        }

        case 'brelan': return {
            ...state,
            brelan: state.brelan + 1,
        }

        case 'adderr': return {
            ...state,
            errmsg: action.payload,
        }

        default: return state
    }
}

export default DiceReducer