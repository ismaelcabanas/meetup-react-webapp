import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginForm } from './login-form';

describe('Login render page', () => {
    it('renders the login page', () => {
        render(<LoginForm />);

        const signInText = screen.getByText("Sign in");

        expect(signInText).toBeInTheDocument();
    });

    it('renders a submit button', () => {
        render(<LoginForm />);

        const signInButton = screen.getByRole('button', {name: /sign in/i});

        expect(signInButton).toBeInTheDocument();
    });

    it('render 2 input components', () => {
        const {getByLabelText} = render(<LoginForm />);
        
        expect(getByLabelText(/email/i)).toBeInTheDocument();
        expect(getByLabelText(/password/i)).toBeInTheDocument();
    });
  });
