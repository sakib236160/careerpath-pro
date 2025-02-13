
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Modal from '../Modal/Modal';
import Footer from '../Footer/Footer';
import PageHeader from '../PageHeader/PageHeader';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <PageHeader></PageHeader>
            <Outlet></Outlet>
            <Modal></Modal>
            <ToastContainer position="top-right" autoClose={3000} />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;