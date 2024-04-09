import { useDiceContext } from "../../utils/DiceContext"

const Results = () => {
    const [state] = useDiceContext();

    return <>
        {
            state.result.length > 0 ?
            <table className="result_table">
                <thead>
                    <tr>
                        <td>Nbr d'Exp</td> <td>Nbr de Brelan</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.result.map((roll) => <tr> <td>{roll.exp}</td> <td>{roll.brelan}</td> </tr>)
                    }
                    <tr> <td>Total</td> <td>{state.total}</td> </tr>
                </tbody>
            </table>
            :
            <p>Aucun lancé a été effectué</p>
        }
        
    </>
}

export default Results