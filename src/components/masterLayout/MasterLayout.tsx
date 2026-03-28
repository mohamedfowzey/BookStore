
import { Outlet } from 'react-router-dom';
import Footer from './footer/footer';
import { CssBaseline } from '@mui/material';
import Header from './header/Header';

export default function MasterLayout() {
  return (<>
  <CssBaseline/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
