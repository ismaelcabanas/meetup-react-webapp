import React from 'react'
import { render, screen } from '@testing-library/react'
import SignUpForm from './SignUpForm'

describe('Sign up form component', () => {    
    it('should renders the header', () => {
        render(<SignUpForm />)

        expect(screen.getByRole('heading', {name: /sign up/i})).toBeInTheDocument()
    });

    it('should renders the user first name', () => {
        render(<SignUpForm />)

        expect(screen.getByPlaceholderText(/your first name/i)).toBeInTheDocument();
    });   
    
    it('should renders the user last name', () => {
        render(<SignUpForm />)

        expect(screen.getByPlaceholderText(/your last name/i)).toBeInTheDocument();
    });   

    it('should renders the user email', () => {
        render(<SignUpForm />)

        expect(screen.getByPlaceholderText(/your email/i)).toBeInTheDocument();
    });        

    it('should renders the user password', () => {
        render(<SignUpForm />)

        expect(screen.getByPlaceholderText(/your password/i)).toBeInTheDocument();
    });            

    it('should renders the signup button', () => {
        render(<SignUpForm />)

        expect(screen.getByRole('button', {name: /sign up/i})).toBeInTheDocument()
    });         
    it('render sign up link', () => {
        render(<SignUpForm />)
        
        expect(screen.getByRole('link', {name: /sign in/i})).toBeInTheDocument();
    });           
});
