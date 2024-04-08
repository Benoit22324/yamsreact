export const init = {
    exp: '',
    brelan: 0,
    result: [],
}

const DiceReducer = (state, action) => {
    switch(action.type) {
        case 'updatevalue': return {
            ...state,
            exp: action.payload,
        }

        case 'addresult': return {
            ...state,
            result: [...state.result, {exp: state.exp, brelan: state.brelan}],
            brelan: 0,
            exp: '',
        }

        case 'brelan': return {
            ...state,
            brelan: state.brelan + 1,
        }

        default: return state
    }
}

export default DiceReducer