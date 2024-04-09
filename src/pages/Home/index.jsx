import { useDiceContext } from '../../utils/DiceContext.jsx'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const [state, dispatch] = useDiceContext();

    const updatevalue = (e) => {
        dispatch({type: 'updatevalue', payload: e.target.value})
    }

    const rngroll = () => {
        return Math.floor(Math.random() * 6) + 1;
    }

    const roll = () => {
        if (state.exp.trim() !== '' && state.exp.trim() !== '0') {
            for(let i = 0; i < state.exp; i++) {
                const dice1 = rngroll();
                const dice2 = rngroll();
                const dice3 = rngroll();
                if (dice1 === dice2 && dice1 === dice3 && dice2 === dice3) dispatch({type: 'brelan'})
            }
            dispatch({type: 'addresult'})
        }
        else if (state.exp.trim() === '') dispatch({type: 'adderr', payload: 'Veuillez saisir le nombre d\'expérience'})
        else if (state.exp.trim() === '0') dispatch({type: 'adderr', payload: 'Veuillez saisir un chiffre supérieur à 0'})
    }

    return <>
        <div className='home'>
            <div className='game_form'>
                {
                    state.errmsg !== '' && <p className='errormsg'>{state.errmsg}</p>
                }
                <label>Expérience:
                    <input type="text" name="experience" value={state.exp} onChange={updatevalue} placeholder='Veuilez saisir le nombre de lancer'/>
                </label>
                <button className='game_button' onClick={roll}>Lancer</button>
            </div>
            <NavLink to={'/results'} className={'result_button'}>Résultat</NavLink>
        </div>
    </>
}

export default Home