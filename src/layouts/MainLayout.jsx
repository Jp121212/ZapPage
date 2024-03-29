import { Outlet } from 'react-router';
import PrimarySearchAppBar from '../Components/NavBar.jsx';
import '../styles/navbar.css';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import Footer from '../Components/Footer.jsx';

export default function MainLayout() {
  return (
    <>
        <div className="body">
          <div className="NavBar">
            <PrimarySearchAppBar>
              <h1> Zap </h1>  
              <Box sx={{ alignItems: 'center', width: '30%', height: '60%' }}>
                <Link href="/contact" underline="hover">
                  {('Contacto')}
                </Link>
                <Link href="/about" underline="hover">
                  {('Sobre Nosotros')}
                </Link>
                <Link href="/store" underline="hover">
                  {'Tienda'}
                </Link>
              </Box>
              <Box
                sx={{
                  width: '11%',
                  height: '40%'
                }}>
              </Box>
              <Box
                sx={{
                  width: '20%',

                  marginLeft: '10px'
                }}>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  width: '30%',
                  height: '60%',
                  marginLeft: '10px'
                }}>
              </Box>
              <Box sx={{ marginLeft: '1%', height: '60%' }}>
              </Box>
            </PrimarySearchAppBar>
          </div>

          <div className="cont">
            <Outlet />{' '}
            <div className="Footer">
              <Footer></Footer>
            </div>
          </div>
        </div>
    </>
  );
}