import style from './Shop.module.sass';
import Footer from "../../UI/Footer/Footer";
import Header from "../../UI/Header/Header";

export default function Shop(){
    
    return(
        <>
            <div className={style.wrap}>
                <Header />
            </div>
            <Footer/>
        </>
    );
}