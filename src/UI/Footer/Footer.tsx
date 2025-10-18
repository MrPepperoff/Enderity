import { Col, Container, Row } from "react-bootstrap";
import style from './Footer.module.sass';

export default function Footer(){
    return(
        <div className={style.wrap}>
            <div className={style.wrap__container}>
                <Container>
                <Row className={style.wrap__row}>
                    <Col xs={3}>
                        <Row className={style.logo__wrap}>
                            <Col xs={3}>
                                <img className={style.logoSkin} src='images/logo/logoSkin.svg' alt='logo'/>
                            </Col>
                            <Col xs={9}>
                                <Row>
                                    <Col xs={8}><img className={style.logo} src='images/logo/logo.png' alt='logo'/></Col>
                                    <Col xs={12}>
                                        <span className={style.logo__text}>© 2025 Все права защищены.</span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        
                    </Col>
                    
                    
                </Row>    
                </Container>
                
            </div>
        </div>
        
    );
}