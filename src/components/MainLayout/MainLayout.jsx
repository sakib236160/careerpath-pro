
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Modal from '../Modal/Modal';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Modal></Modal>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;