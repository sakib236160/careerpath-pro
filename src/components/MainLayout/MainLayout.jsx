
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Modal from '../Modal/Modal';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Modal></Modal>
        </div>
    );
};

export default MainLayout;