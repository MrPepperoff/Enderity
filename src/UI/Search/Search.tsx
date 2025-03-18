import { NavLink } from 'react-router-dom'
import style from './Search.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Search(){

    return(
        <form className={style.wrap}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />Поиск

        </form>
        
    )
}