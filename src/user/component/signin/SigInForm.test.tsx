import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from "jest-axe";
import SignInForm from './SignInForm';

describe('Sign in form render page', () => {    
    it('renders the sign in page', () => {
        render(<SignInForm />);

        const signInText = screen.getByText("Sign in");

        expect(signInText).toBeInTheDocument();
    });

    it('renders a submit button', () => {
        render(<SignInForm />);

        const signInButton = screen.getByRole('button', {name: /sign in/i});

        expect(signInButton).toBeInTheDocument();
    });

    it('render 2 input components', () => {
        const {getByLabelText} = render(<SignInForm />);
        
        expect(getByLabelText(/username/i)).toBeInTheDocument();
        expect(getByLabelText(/password/i)).toBeInTheDocument();
    });

    it("should be accessible", () => {
        const { container } = render(<SignInForm />);

        expect(axe(container)).toHaveNoViolations;
    });
});

