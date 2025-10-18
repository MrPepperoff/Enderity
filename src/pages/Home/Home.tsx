import style from './Home.module.sass';
import Default_layout from '../../layouts/Default/Default';
import ProductsList from '../../UI/ProductsList/ProductsList';
export default function Home(){
    
    return(
        <Default_layout>
            <h1 className={style.title}>Добро пожаловать на сайт сервера "Эндерити" </h1>
            <ProductsList/>
        </Default_layout>     
    );
}