import { Center, Paper, createStyles } from '@mantine/core';
import { PageLayout } from '../../../view/components/PageLayout/PageLayout';
import { colors } from '../../constants/colors';
import { AddTicketsForm, AddTicketsFormValues } from '../../forms/AddTicketsForm';
import { createTicket } from '../../store/createTicketSlice';
import { useAppDispatch } from '../../store/hooks';

const useStyles = createStyles((theme) => ({
    formContainer: {
        width: 500,
        minHeight: 500,
    },
    header: {
        marginTop: 0,
        textAlign: 'center',
        color: colors.blue,
    },
}));

export const AddTicketsPage = () => {
    const { classes } = useStyles();
    const dispatch = useAppDispatch();

    const onFormSubmit = (values: AddTicketsFormValues) => {
        dispatch(createTicket(values));
    };

    return (
        <PageLayout>
            <Center>
                <Paper p="xl" shadow="md" className={classes.formContainer}>
                    <h3 className={classes.header}>Add Tickets</h3>
                    <AddTicketsForm onSubmit={onFormSubmit} />
                </Paper>
            </Center>
        </PageLayout>
    );
};
