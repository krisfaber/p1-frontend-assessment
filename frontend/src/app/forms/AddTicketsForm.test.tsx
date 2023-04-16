import { render, fireEvent, waitFor, screen } from '../../testing-utils/custom-renderer';
import { AddTicketsForm, AddTicketsFormValues } from './AddTicketsForm';
import '@testing-library/jest-dom/extend-expect';

const onSubmit_Mock = jest.fn();

const validValues: AddTicketsFormValues = {
    email: 'john@example.com',
    title: 'Example title',
    description: 'Example description',
    price: 100,
    amount: 2,
    supplier: 'Example supplier',
} as const;

describe('AddTicketsForm Functionality', () => {
    beforeEach(() => {
        onSubmit_Mock.mockReset();
    });

    it('submits the form with when values are valid', async () => {
        render(<AddTicketsForm onSubmit={onSubmit_Mock} />);

        const inputs = screen.getAllByRole('textbox') as HTMLInputElement[];
        const submitBtn = screen.getByRole('button') as HTMLButtonElement;

        for (let input of inputs) {
            const value = validValues[input.name as keyof AddTicketsFormValues];
            if (value !== undefined) {
                fireEvent.input(input, { target: { value } });
            }
        }

        fireEvent.click(submitBtn);

        await waitFor(() => {
            expect(onSubmit_Mock).toHaveBeenCalled();
        });
    });

    it('does not submit the form with when values are invalid', async () => {
        render(<AddTicketsForm onSubmit={onSubmit_Mock} />);

        const inputs = screen.getAllByRole('textbox') as HTMLInputElement[];
        const submitBtn = screen.getByRole('button') as HTMLButtonElement;

        const invalidValues = {
            ...validValues,
            email: 'not_an_email',
        };

        for (let input of inputs) {
            const value = invalidValues[input.name as keyof AddTicketsFormValues];
            if (value !== undefined) {
                fireEvent.input(input, { target: { value } });
            }
        }

        fireEvent.click(submitBtn);

        await waitFor(() => {
            expect(onSubmit_Mock).not.toHaveBeenCalled();
        });
    });

    it('displays error messages on relevant form control', async () => {
        render(<AddTicketsForm onSubmit={onSubmit_Mock} />);

        const inputs = screen.getAllByRole('textbox') as HTMLInputElement[];
        const submitBtn = screen.getByRole('button') as HTMLButtonElement;

        const invalidValues = {
            ...validValues,
            email: 'not_an_email',
        };

        for (let input of inputs) {
            const value = invalidValues[input.name as keyof AddTicketsFormValues];
            if (value !== undefined) {
                fireEvent.input(input, { target: { value } });
            }
        }

        fireEvent.click(submitBtn);

        await waitFor(() => {
            const [emailInput] = inputs;
            expect(emailInput.parentElement?.nextElementSibling?.textContent).toBe('Invalid email');
        });
    });
});
