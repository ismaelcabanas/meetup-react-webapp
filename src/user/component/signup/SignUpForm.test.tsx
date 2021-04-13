import React from 'react'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
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
    
    describe("when submit invalid data", () => {
        it('should display an error message when the user submits empty first name', async () => {
            render(<SignUpForm />)
    
            userEvent.type(screen.getByLabelText(/first name/i), '');
            
            const signUpButton = screen.getByRole('button', {name: /sign up/i});
            await act (async () => {
                userEvent.click(signUpButton);
            });
            
            expect(await screen.findByText(/First name is required./)).toBeInTheDocument();        
        });

        it('should display an error message when the user submits empty last name', async () => {
            render(<SignUpForm />)
    
            userEvent.type(screen.getByLabelText(/last name/i), '');
            
            const signUpButton = screen.getByRole('button', {name: /sign up/i});
            await act (async () => {
                userEvent.click(signUpButton);
            });
            
            expect(await screen.findByText(/Last name is required./)).toBeInTheDocument();        
        });

        it('should display an error message when the user submits empty email', async () => {
            render(<SignUpForm />)
    
            userEvent.type(screen.getByLabelText(/email/i), '');
            
            const signUpButton = screen.getByRole('button', {name: /sign up/i});
            await act (async () => {
                userEvent.click(signUpButton);
            });
            
            expect(await screen.findByText(/Email is required./)).toBeInTheDocument();        
        });
    });
});
