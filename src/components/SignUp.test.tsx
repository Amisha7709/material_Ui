import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUp from './SignUp';
import { MemoryRouter } from 'react-router-dom';


describe('SignUp component', () => {
    it('submitting the form calls handleSubmit with entered values', () => {
        render(
            <MemoryRouter>
                <SignUp />
            </MemoryRouter>
        );

        expect(screen.getByText('Registration Form')).toBeInTheDocument();
        expect(screen.getByLabelText('First Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'SignUp' })).toBeInTheDocument();
    });
});
