import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return <>
        <nav className='nav_bar'>
            <NavLink to={'/'} style={({isActive}) => isActive ? {color: 'orange', fontWeight: 'bold'} : {}}>Acceuil</NavLink>
            <NavLink to={'/rules'} style={({isActive}) => isActive ? {color: 'orange', fontWeight: 'bold'} : {}}>Règle</NavLink>
        </nav>
    </>
}

export default Navbar