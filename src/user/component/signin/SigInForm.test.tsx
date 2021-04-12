import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from "jest-axe";
import SignInForm from './SignInForm';
import { authenticate } from '../../service/Authenticator'

jest.mock("../../service/Authenticator")

describe("SignIn component", () => {
    it('should renders the sign in page', () => {
        render(<SignInForm />)

        expect(screen.getByRole('heading', {name: /sign in/i})).toBeInTheDocument()
    });

    it('should renders a submit button', () => {
        render(<SignInForm />)

        const signInButton = screen.getByRole('button', {name: /sign in/i});

        expect(signInButton).toBeInTheDocument();
    });

    it('should render username and password components', () => {
        const {getByLabelText} = render(<SignInForm />)
        
        expect(getByLabelText(/username/i)).toBeInTheDocument();
        expect(getByLabelText(/password/i)).toBeInTheDocument();
    });

    it('should render sign up link', () => {
        render(<SignInForm />)
        
        expect(screen.getByRole('link', {name: /sign up/i})).toBeInTheDocument();
    });

    it("should be accessible", () => {
        const { container } = render(<SignInForm />)

        expect(axe(container)).toHaveNoViolations;
    });

    describe("when submit invalid data", () => {
        it('should display an error message when the user submits empty username', async () => {
            render(<SignInForm />)
    
            userEvent.type(screen.getByLabelText(/username/i), '');
            userEvent.type(screen.getByLabelText(/password/i), 'test');
    
            const signInButton = screen.getByRole('button', {name: /sign in/i});
            await act (async () => {
                userEvent.click(signInButton);
            });
            
            expect(await screen.findByText(/Username is required./)).toBeInTheDocument();        
        });

        it('should display an error message when the user submits empty password', async () => {
            render(<SignInForm />)
    
            userEvent.type(screen.getByLabelText(/username/i), 'user');
            userEvent.type(screen.getByLabelText(/password/i), '');
    
            const signInButton = screen.getByRole('button', {name: /sign in/i});
            await act (async () => {
                userEvent.click(signInButton);
            });
            
            expect(await screen.findByText(/Password is required./)).toBeInTheDocument();        
        });            
    });

    describe("when submit valid data", () => {
        beforeEach(() => {
            const accessToken = {'access_token': 'myToken'} 
            authenticate.mockResolvedValueOnce(accessToken)
        })
        it('should hide error message when user fix the username and submit again', async () => {
            render(<SignInForm />)
            userEvent.type(screen.getByLabelText(/username/i), '');
            userEvent.type(screen.getByLabelText(/password/i), 'test');
            const signInButton = screen.getByRole('button', {name: /sign in/i});
            await act (async () => {
                userEvent.click(signInButton);
            });        
            userEvent.type(screen.getByLabelText(/username/i), 'user');
            
            await act (async () => {
                userEvent.click(signInButton);
            });
    
            expect(screen.queryByText(/Username is required./)).not.toBeInTheDocument();           
        });
    
        it('should hide error message when user fix the password and submit again', async () => {
            render(<SignInForm />)
            userEvent.type(screen.getByLabelText(/username/i), 'user');
            userEvent.type(screen.getByLabelText(/password/i), '');
            const signInButton = screen.getByRole('button', {name: /sign in/i});
            await act (async () => {
                userEvent.click(signInButton);
            });        
            userEvent.type(screen.getByLabelText(/password/i), 'test');
            
            await act (async () => {
                userEvent.click(signInButton);
            });
    
            expect(screen.queryByText(/Password is required./)).not.toBeInTheDocument();           
        });                    
    });

    describe("when sign in successfully", () => {
        const tokenValue = 'myToken'   
        beforeEach(() => {            
            const accessToken = {'access_token': tokenValue} 
            authenticate.mockResolvedValueOnce(accessToken)
        });

        it("should save access token in local storage", async () => { 
            render(<SignInForm />)
            userEvent.type(screen.getByLabelText(/username/i), 'test@test.com');
            userEvent.type(screen.getByLabelText(/password/i), 'test');
            const signInButton = screen.getByRole('button', {name: /sign in/i});
            
            await act (async () => {
                userEvent.click(signInButton);
            });
            
            expect(window.localStorage.getItem('accessToken')).toEqual(tokenValue)
            expect(screen.queryByText(/Invalid user credentials./)).not.toBeInTheDocument();  
        });    

        it("should save username in local storage", async () => { 
            const username = 'test@test.com'
            render(<SignInForm />)
            userEvent.type(screen.getByLabelText(/username/i), username);
            userEvent.type(screen.getByLabelText(/password/i), 'test');
            const signInButton = screen.getByRole('button', {name: /sign in/i});
            
            await act (async () => {
                userEvent.click(signInButton);
            });
            
            expect(window.localStorage.getItem('username')).toEqual(username)
            expect(screen.queryByText(/Invalid user credentials./)).not.toBeInTheDocument();  
        });    
    });

    describe("when sign in fails", () => {
        it('should display error message when user is not authenticated', async () => {
            const accessToken = {'access_token': 'myToken'} 
            authenticate.mockResolvedValueOnce(Promise.reject("error"))
            render(<SignInForm />)
            userEvent.type(screen.getByLabelText(/username/i), 'test@test.com');
            userEvent.type(screen.getByLabelText(/password/i), 'test');
            const signInButton = screen.getByRole('button', {name: /sign in/i});
            
            await act (async () => {
                userEvent.click(signInButton);
            });
                    
            expect(await screen.findByText(/Invalid user credentials./)).toBeInTheDocument();        
        });
    });

});   
