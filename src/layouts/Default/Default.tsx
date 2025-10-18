import { Container } from "react-bootstrap";
import Footer from "../../UI/Footer/Footer";
import Header from "../../UI/Header/Header";
import style from './Default.module.sass';

export default function Default_layout({children} : any){

    return(
    <>
        <div className={style.wrap}>
            <Header/>
            <Container>
                {children}    
            </Container>
        </div>
        <Footer/>
    </>
    )
}