import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, Button, Grid, NumberInput, TextInput, Textarea, createStyles } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { FormLabel } from '../../view/components/Forms/FormLabel';
import { FormProps } from '../interfaces/form';
import { useAppSelector } from '../store/hooks';

const useStyles = createStyles((theme) => ({
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
}));

export type AddTicketsFormValues = z.infer<typeof schema>;

const schema = z.object({
    email: z.string().email(),
    title: z.string().nonempty(),
    description: z.string(),
    price: z.number().min(0),
    amount: z.number().min(1),
    supplier: z.string(),
});

const defaultValues: AddTicketsFormValues = {
    email: '',
    title: '',
    description: '',
    price: 0,
    amount: 1,
    supplier: '',
};

export const AddTicketsForm = ({ onSubmit }: FormProps<AddTicketsFormValues>) => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AddTicketsFormValues>({
        defaultValues,
        resolver: zodResolver(schema),
    });
    const { classes } = useStyles();
    const status = useAppSelector((state) => state.createTicketReducer.status);
    const error = useAppSelector((state) => state.createTicketReducer.error);

    return (
        <>
            {status === 'failed' && (
                <Alert mb="md" title="Bummer!" color="red">
                    An error occured while creating ticket
                    {error && <pre>{error}</pre>}
                </Alert>
            )}
            {status === 'succeeded' && (
                <Alert mb="md" title="Success!" color="green">
                    Your ticket was created successfully!
                </Alert>
            )}
            <Grid>
                <Grid.Col span={12}>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field: { onChange, value, name } }) => {
                            return (
                                <>
                                    <FormLabel htmlFor="addticketsform_email">Email</FormLabel>
                                    <TextInput
                                        id="addticketsform_email"
                                        onChange={onChange}
                                        value={value}
                                        name={name}
                                        error={errors.email?.message}
                                    />
                                </>
                            );
                        }}
                    />
                </Grid.Col>
                <Grid.Col span={12}>
                    <Controller
                        name="title"
                        control={control}
                        render={({ field: { onChange, value, name } }) => {
                            return (
                                <>
                                    <FormLabel htmlFor="addticketsform_title">Title</FormLabel>
                                    <TextInput
                                        id="addticketsform_title"
                                        onChange={onChange}
                                        value={value}
                                        name={name}
                                        error={errors.title?.message}
                                    />
                                </>
                            );
                        }}
                    />
                </Grid.Col>
                <Grid.Col span={12}>
                    <Controller
                        name="description"
                        control={control}
                        render={({ field: { onChange, value, name } }) => {
                            return (
                                <>
                                    <FormLabel htmlFor="addticketsform_description">
                                        Description
                                    </FormLabel>
                                    <Textarea
                                        id="addticketsform_description"
                                        onChange={onChange}
                                        value={value}
                                        name={name}
                                        error={errors.description?.message}
                                    />
                                </>
                            );
                        }}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <Controller
                        name="price"
                        control={control}
                        render={({ field: { onChange, value, name } }) => {
                            return (
                                <>
                                    <FormLabel htmlFor="addticketsform_price">Price</FormLabel>
                                    <NumberInput
                                        id="addticketsform_price"
                                        onChange={onChange}
                                        value={value}
                                        name={name}
                                        error={errors.price?.message}
                                        precision={2}
                                        min={0}
                                        step={0.05}
                                    />
                                </>
                            );
                        }}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <Controller
                        name="amount"
                        control={control}
                        render={({ field: { onChange, value, name } }) => {
                            return (
                                <>
                                    <FormLabel htmlFor="addticketsform_amount">
                                        Amount of tickets
                                    </FormLabel>
                                    <NumberInput
                                        id="addticketsform_amount"
                                        onChange={onChange}
                                        value={value}
                                        name={name}
                                        error={errors.amount?.message}
                                    />
                                </>
                            );
                        }}
                    />
                </Grid.Col>
                <Grid.Col span={12}>
                    <Controller
                        name="supplier"
                        control={control}
                        render={({ field: { onChange, value, name } }) => {
                            return (
                                <>
                                    <FormLabel htmlFor="addticketsform_supplier">Supplier</FormLabel>
                                    <TextInput
                                        id="addticketsform_supplier"
                                        onChange={onChange}
                                        value={value}
                                        name={name}
                                        error={errors.supplier?.message}
                                    />
                                </>
                            );
                        }}
                    />
                </Grid.Col>
                <Grid.Col span={12} className={classes.buttonContainer}>
                    <Button
                        loading={status === 'loading'}
                        onClick={handleSubmit((data) => {
                            onSubmit(data);
                            reset();
                        })}
                    >
                        Add tickets
                    </Button>
                </Grid.Col>
            </Grid>
        </>
    );
};
