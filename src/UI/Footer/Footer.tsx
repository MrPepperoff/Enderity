import { Col, Container, Row } from "react-bootstrap";
import style from './Footer.module.sass';
import { Link } from "react-router-dom";


export default function Footer(){
    return(
        <div className={style.wrap}>
            <div className={style.wrap__container}>
                    <Row className={style.wrap__top}>
                        <Col xs={5} className={style.wrap__top__left}>
                            <Row>
                                {/* <Col xs={12}>
                                    <Row className={style.logo__wrap}>
                                        <Col xs={2} className={style.logoSkin__wrap}>
                                            <img className={style.logoSkin} src='images/logo/sergeech.png' alt='sergeech'/>
                                        </Col>
                                        <Col xs={10}>
                                            <Row>
                                                <Col xs={12}><h2>SERGEECH</h2></Col>
                                                <Col xs={12}>
                                                    <ul>
                                                        <li>ИП Перчаткин Сергей Сергеевич</li>
                                                        <li>ИНН 111122223333, ОРГНИП 111122223333456 </li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row> 
                                </Col> */}
                                <Col xs={12} className={style.wrap__copyright}>
                                    <Row className={style.logo__wrap}>
                                        <Col xs={2} className={style.logoSkin__wrap}>
                                            <Link to={'/'}>
                                                <img className={style.logoSkin} src='images/logo/logoSkin.svg' alt='logo'/>
                                            </Link>
                                        </Col>
                                        <Col xs={10}>
                                            <Row>
                                                <Col xs={4}>
                                                    <Link to={'/'}>
                                                        <img className={style.logo} src='images/logo/logo.png' alt='logo'/>
                                                    </Link>
                                                </Col>
                                                <Col xs={12} className={style.logo__text}>
                                                    <p>© 2025 Все права защищены.</p>
                                                    <p>Не официальный Minecraft проект. Не связан с Mojang Synergies AB.</p>
                                                    <br/>
                                                    <p>
                                                        Интеллектуальная собственность проекта (игровой контент, дизайн, код, текстовая и графическая информация) охраняется законом. Запрещается любое несанкционированное
                                                        копирование или использование контента, доступного на сайте и игровом сервере, в личных
                                                        или коммерческих целях за пределами данного проекта.
                                                    </p>
                                                    <p>
                                                        Весь контент предоставлен для личного, некоммерческого использования только в рамках 
                                                        игрового процесса на проекте Эндерити.
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Col>
                                        
                                    </Row> 
                                </Col>
                                <Col xs={12} className={style.offer}>
                                    <ul className={style.offer__list}>
                                        <li className={style.offer__item}>
                                            <a href="#" className={style.offer__link}>Публичный договор оферты</a>
                                        </li>
                                        <li className={style.offer__item}>
                                            <a href="#" className={style.offer__link}>Политика обработки персональных данных</a>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={7} className={style.wrap__top__right}>
                            2
                        </Col>
                    </Row>
                    <div className={style.wrap__bottom}>
                        <Container>
                            <Row className={style.wrap__bottom__row}>
                                <Col xs={4}>
                                    <ul className={style.wrap__bottom__author}>
                                        <li>Дизайнер: <a href="https://www.twitch.tv/sergeechoff" target="blank_">SERGEECH</a></li>
                                        <li>Разработчик: <a href="https://mrpepperoff.github.io/portfolio/" target="blank_">Алексеев Максим</a></li>
                                    </ul>
                                </Col>
                                <Col xs={4}>
                                    <Row className={style.wrap__bottom__info}>
                                        <Col xs={8} className={style.wrap__bottom__info__text}>
                                            <Row>
                                                <Col xs={12}><h2>SERGEECH</h2></Col>
                                                <Col xs={12}>
                                                    <ul>
                                                        <li>ИП Перчаткин Сергей Сергеевич</li>
                                                        <li>ИНН 111122223333, ОРГНИП 111122223333456 </li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={4} className={style.wrap__bottom__info__img}>
                                            <img src='images/logo/sergeech.png' alt='sergeech'/>
                                        </Col>
                                    </Row>    
                                </Col>
                            </Row>
                            
                        </Container>
                    </div>
            </div>    
            
        </div>
        
    );
}