import style from './PreloaderSmall.module.sass';


export default function PreloaderSmall(props : any) {
  return (
    <div className={style.PreloaderStartPage}>
        <span className={style.loader}></span>
    </div>
  )
};