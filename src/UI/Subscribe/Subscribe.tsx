import style from './Subscribe.module.sass';
import { links } from '../../db';

export default function Subscribe(){
    return(
        <div className={style.wrap}>
            <h3 className={style.wrap__title}>Подписаться на эндерити</h3>
            <ul className={style.list}>
                {
                    links.map(item =>
                        <li key={item.id}  className={`${style.list__item} ${(item.link == '#')? style.list__item_null: ''}`}>
                            <a href={item.link} target='blank_'>
                                <img src={`images/links/${item.icon}`} alt={item.name} />
                            </a>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}