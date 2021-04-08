import React from 'react'
import { render, screen } from '@testing-library/react'
import SignUpForm from './SignUpForm'

describe('Sign up form component', () => {    
    it('should renders the header', () => {
        render(<SignUpForm />)

        expect(screen.getByRole('heading', {name: /sign up/i})).toBeInTheDocument()
    });

    it('should renders the user name', () => {
        render(<SignUpForm />)

        expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument();
    });    

    it('should renders the user email', () => {
        render(<SignUpForm />)

        expect(screen.getByPlaceholderText(/your email/i)).toBeInTheDocument();
    });        

    it('should renders the user password', () => {
        render(<SignUpForm />)

        expect(screen.getByPlaceholderText(/your password/i)).toBeInTheDocument();
    });            
});
