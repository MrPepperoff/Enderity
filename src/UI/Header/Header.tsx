import { Col, Container, Row } from 'react-bootstrap';
import style from './Header.module.sass';
import { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';




export default function Header(){
    let header: any;
    useEffect(()=>{
       header = document.querySelector('header'); 
    })
    
    
        window.addEventListener('scroll', function () {
            if(header){
                if(window.scrollY >= 0){
                    header.classList.remove(style.position); 
                }
                if(window.scrollY <= 10){
                    header.classList.add(style.position); 
                }
            }
        });    
    
        

    return(
        <header className={style.wrap}>
            <div className={style.wrap__container}>
                <Row className={style.wrap__row}>
                    <Col className={style.logo__wrap}>
                        <img src='images/logo.png' alt="logo" className={style.logo}/>
                    </Col>
                    <Col>
                        <Menu/>
                    </Col>
                    <Col>
                        <Search/>
                    </Col>
                </Row>
            </div>
        </header>
        
    );
}