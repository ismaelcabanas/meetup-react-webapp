import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginForm } from './login-form';

describe('Login render page', () => {
    it('renders the login page', () => {
        const {getByText} = render(<LoginForm />);
        expect(getByText("Sign in")).toBeInTheDocument();
    });
    it('renders a submit button', () => {
        const {getByText} = render(<LoginForm />);
        expect(getByText("Sign in")).toBeInTheDocument();
    });
    it('render 2 input components', () => {
        const {getByLabelText} = render(<LoginForm />);
        expect(getByLabelText(/email/i)).toBeInTheDocument();
        expect(getByLabelText(/password/i)).toBeInTheDocument();
    });
  });