import { NavLink } from 'react-router-dom'
import style from './Menu.module.sass'

export default function Menu(){

    return(
        <>
            
            <nav className={style.wrap}>
                <ul className={style.list}>
                    <li className={style.item}><NavLink className={({ isActive }) => (isActive ? style.link+' '+style.link_active : style.link)}  to='/' end>Главная</NavLink></li>
                    <li className={style.item}><NavLink className={({ isActive }) => (isActive ? style.link+' '+style.link_active : style.link)} to='/shop'>Магазин</NavLink></li>
                    <li className={style.item}><NavLink className={({ isActive }) => (isActive ? style.link+' '+style.link_active : style.link)} to='/rules'>Правила</NavLink></li>
                </ul>
            </nav>
        </>
        
    )
}
    

