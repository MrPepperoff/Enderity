import style from './Home.module.sass';
import Footer from "../../UI/Footer/Footer";
import Header from "../../UI/Header/Header";
import { Container } from 'react-bootstrap';

export default function Home(){
    
    return(
        <>
            <div className={style.wrap}>
                <Header />
                <Container>
                    <h1 className={style.title}>Покупай коины</h1>
                </Container>
            </div>
            <Footer/>
        </>
    );
}