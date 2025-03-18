import style from './Rules.module.sass';
import Footer from "../../UI/Footer/Footer";
import Header from "../../UI/Header/Header";

export default function Rules(){
    
    return(
        <>
            <div className={style.wrap}>
                <Header />
            </div>
            <Footer/>
        </>
    );
}