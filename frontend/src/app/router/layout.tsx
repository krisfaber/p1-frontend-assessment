import { Outlet } from 'react-router-dom';
import { PageLayout } from '../../view/components/PageLayout/PageLayout';

const Layout = () => {
    return (
        <PageLayout>
            <Outlet />
        </PageLayout>
    );
};

export default Layout;
