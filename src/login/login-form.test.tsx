import React from 'react';
import "@testing-library/jest-dom";
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from "jest-axe";
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
    
    it("should be accessible", () => {
        const { container } = render(<LoginForm />);

        expect(axe(container)).toHaveNoViolations;
    });
  });

describe("Form behaviour",  () => {
    it('validate user inputs, and provides error messages', async () => {
        render(<LoginForm />)

        userEvent.type(screen.getByLabelText(/email/i), '');
        userEvent.type(screen.getByLabelText(/password/i), '');

        const signInButton = screen.getByRole('button', {name: /sign in/i});
        userEvent.click(signInButton);
        
        expect(await screen.findByText(/Email is required./)).toBeInTheDocument();        
        expect(await screen.findByText(/Password is required./)).toBeInTheDocument();        
    });

    it('submit the form when fill it successfully', async () => {
        render(<LoginForm />)

        userEvent.type(screen.getByLabelText(/email/i), 'test@test.com');
        userEvent.type(screen.getByLabelText(/password/i), 'test');

        const signInButton = screen.getByRole('button', {name: /sign in/i});
        await act (async () => {
            userEvent.click(signInButton);
        });
                
        expect(screen.queryByText(/Email is required./)).not.toBeInTheDocument();
        expect(screen.queryByText(/Password is required./)).not.toBeInTheDocument();
    });
});  
