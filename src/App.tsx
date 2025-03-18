import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { request } from './Action/request';
import { loaderSwitch, reloadMainMenu, reloadHelpMenu, reloadProfileMenu, reloadProducts} from './store/dataState';
import { useEffect } from 'react';
import PreloaderStartPage from './components/PreloaderStartPage/PreloaderStartPage';
import { useAppDispatch, useAppSelector } from './store/hooks';
import Shop from './pages/Shop/Shop';
import Rules from './pages/Rules/Rules';

function App() {
    let dispatch = useAppDispatch();
    let loading = useAppSelector(state => state.dataState.value.app.loader);
    useEffect(() => {
        request('post', 'products', (response : any) => {
            if (response.status === 200 && response.data.length > 0) {
                dispatch(reloadProducts(response.data));
            }
        });
        request('post', 'menu', (response : any) => {
            dispatch(loaderSwitch(false));
            if (response.status === 200 && response.data.length > 0) {
                dispatch(reloadMainMenu(response.data));
            }
        });
        request('post', 'help-menu', (response : any) => {
          dispatch(loaderSwitch(false));
          if (response.status === 200 && response.data.length > 0) {
              dispatch(reloadHelpMenu(response.data));
          }
        });
        request('post', 'profile-menu', (response : any) => {
          dispatch(loaderSwitch(false));
          if (response.status === 200 && response.data.length > 0) {
              dispatch(reloadProfileMenu(response.data));
          }
        });
    },[dispatch]);
  return (
    <div>
      {(!loading) ?
        <PreloaderStartPage />
        : 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      }
    </div>
  );
}

export default App;
