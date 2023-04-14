import { Route, Routes } from 'react-router-dom';
import Layout from './layout';

// Pages
import { AddTicketsPage } from '../pages/add-tickets/AddTicketsPages';
import { NoMatchPage } from '../pages/no-match/NoMatchPage';
import { TicketsListPage } from '../pages/tickets-list/TicketsListPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<AddTicketsPage />} />
                <Route path="list-tickets" element={<TicketsListPage />} />
                <Route path="*" element={<NoMatchPage />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
