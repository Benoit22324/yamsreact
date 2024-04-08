import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return <>
        <nav>
            <NavLink to={'/'}>Acceuil</NavLink>
            <NavLink to={'/rules'}>Règle</NavLink>
        </nav>
    </>
}

export default Navbar