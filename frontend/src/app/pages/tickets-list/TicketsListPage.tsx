import { Alert, Center, Paper, Skeleton, createStyles } from '@mantine/core';
import { useEffect } from 'react';
import { PageLayout } from '../../../view/components/PageLayout/PageLayout';
import { colors } from '../../constants/colors';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAllTickets } from '../../store/ticketsSlice';
import { TicketsListTable } from '../../tables/TicketsListTable';

const useStyles = createStyles((theme) => ({
    formContainer: {
        width: 850,
        minHeight: 500,
    },
    header: {
        marginTop: 0,
        textAlign: 'center',
        color: colors.blue,
    },
}));

export const TicketsListPage = () => {
    const { classes } = useStyles();
    const dispatch = useAppDispatch();
    const status = useAppSelector((state) => state.ticketsReducer.status);
    const error = useAppSelector((state) => state.ticketsReducer.error);
    const data = useAppSelector((state) => state.ticketsReducer.tickets);

    useEffect(() => {
        dispatch(getAllTickets());
        // eslint-disable-next-line react-hooks/exhaustive-deps -- `dispatch` does not mutate
    }, []);

    console.log('data', data);

    return (
        <PageLayout>
            <Center>
                <Paper p="xl" shadow="md" className={classes.formContainer}>
                    <h3 className={classes.header}>Tickets list</h3>
                    {status === 'loading' && (
                        <div>
                            <Skeleton height={24} mt={6} />
                            <Skeleton height={24} mt={6} />
                            <Skeleton height={24} mt={6} />
                            <Skeleton height={24} mt={6} />
                        </div>
                    )}
                    {status === 'failed' && (
                        <Alert title="Bummer!" color="red">
                            An error occured while fetching tickets
                            {error && <pre>{error}</pre>}
                        </Alert>
                    )}
                    {status === 'succeeded' && <TicketsListTable items={data} />}
                </Paper>
            </Center>
        </PageLayout>
    );
};
