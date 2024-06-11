import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../AuthContext';

describe('Login component', () => {
    it('submitting the form calls handleSubmit with entered values', () => {
        render(
            <AuthProvider>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </AuthProvider>
        );

        expect(screen.getByText('Login Form')).toBeInTheDocument();
        expect(screen.getByLabelText('UserName')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    });
});
