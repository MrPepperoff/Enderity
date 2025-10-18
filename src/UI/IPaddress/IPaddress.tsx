import { useEffect, useState } from 'react';
import style from './IPaddress.module.sass';

export default function IPaddress(){
    const [text, setText] = useState("");

    useEffect(()=>{
        const btn = document.getElementById('copyIP');
        const textBlock = document.getElementById('textIP');
        


        btn?.addEventListener('click', ()=>{
            navigator.clipboard.writeText('mc.enderity.ru')
            .then(() => {
                setText(`IP - cкопирован`);
            })
            .catch(error => {
                setText(`Текст не скопирован ${error}`);
            })
            .finally(()=>{
                textBlock?.classList.add(style.animation);
                setTimeout(()=>{
                    textBlock?.classList.remove(style.animation);
                }, 4000)
            })
        })
        
    })
    return(
        <>
            <button type='button' className={style.wrap} id='copyIP'>
                <ul>
                    <li>IP: <span>mc.enderity.ru</span></li>
                    <li>
                        <svg width="10" height="10" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.25" cx="12.5" cy="12.5" r="12.5" fill="#67FF4F"></circle>
                            <circle cx="12.5" cy="12.5" r="6.5" fill="#67FF4F"></circle>
                        </svg>
                        0 из 2025
                    </li>
                </ul>
            </button>
            <div className={style.text} id='textIP'>
                {text}
            </div>
        </>
        
    )
}