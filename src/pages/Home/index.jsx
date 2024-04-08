import { useDiceContext } from '../../utils/DiceContext.jsx'

const Home = () => {
    const [state, dispatch] = useDiceContext();

    const updatevalue = (e) => {
        dispatch({type: 'updatevalue', payload: e.target.value})
    }

    const rngroll = () => {
        return Math.floor(Math.random() * 6);
    }

    const roll = () => {
        for(let i = 0; i < state.exp; i++) {
            const dice1 = rngroll();
            const dice2 = rngroll();
            const dice3 = rngroll();
            if (dice1 === dice2 && dice1 === dice3 && dice2 === dice3) dispatch({type: 'brelan'})
        }
        dispatch({type: 'addresult'})
    }

    const result = () => {
        console.log(state.result)
    }

    return <>
        <label>Expérience:
            <input type="text" name="experience" value={state.exp} onChange={updatevalue} placeholder='Veuilez saisir le nombre de lancer'/>
        </label>
        <button onClick={roll}>Lancer</button>
        <button onClick={result}>Résultat</button>
    </>
}

export default Home