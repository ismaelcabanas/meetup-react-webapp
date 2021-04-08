import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from "jest-axe";
import SignInForm from './SignInForm';
import SignInUseCase from '../../application/signin/SignInUseCase'

const mockSignInUseCase: SignInUseCase = {
    execute: jest.fn(),
};
  
describe('Sign in form render page', () => {    
    it('renders the sign in page', () => {
        render(<SignInForm signInUseCase={mockSignInUseCase}/>)

        const signInText = screen.getByText("Sign in");

        expect(signInText).toBeInTheDocument();
    });

    it('renders a submit button', () => {
        render(<SignInForm signInUseCase={mockSignInUseCase}/>)

        const signInButton = screen.getByRole('button', {name: /sign in/i});

        expect(signInButton).toBeInTheDocument();
    });

    it('render 2 input components', () => {
        const {getByLabelText} = render(<SignInForm signInUseCase={mockSignInUseCase}/>)
        
        expect(getByLabelText(/username/i)).toBeInTheDocument();
        expect(getByLabelText(/password/i)).toBeInTheDocument();
    });

    it('render sign up link', () => {
        render(<SignInForm signInUseCase={mockSignInUseCase}/>)
        
        expect(screen.getByRole('link', {name: /sign up/i})).toBeInTheDocument();
    });

    it("should be accessible", () => {
        const { container } = render(<SignInForm signInUseCase={mockSignInUseCase}/>)

        expect(axe(container)).toHaveNoViolations;
    });
});

describe("Sign in form behaviour",  () => {
    it('should display an error message when the user submits empty username', async () => {
        render(<SignInForm signInUseCase={mockSignInUseCase}/>)

        userEvent.type(screen.getByLabelText(/username/i), '');
        userEvent.type(screen.getByLabelText(/password/i), 'test');

        const signInButton = screen.getByRole('button', {name: /sign in/i});
        await act (async () => {
            userEvent.click(signInButton);
        });
        
        expect(await screen.findByText(/Username is required./)).toBeInTheDocument();        
    });

    it('should display an error message when the user submits empty password', async () => {
        render(<SignInForm signInUseCase={mockSignInUseCase}/>)

        userEvent.type(screen.getByLabelText(/username/i), 'user');
        userEvent.type(screen.getByLabelText(/password/i), '');

        const signInButton = screen.getByRole('button', {name: /sign in/i});
        await act (async () => {
            userEvent.click(signInButton);
        });
        
        expect(await screen.findByText(/Password is required./)).toBeInTheDocument();        
    });

    it('should hide error message when user fix the username and submit again', async () => {
        render(<SignInForm signInUseCase={mockSignInUseCase}/>)
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
        render(<SignInForm signInUseCase={mockSignInUseCase}/>)
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

    it('submit the form when fill it successfully', async () => {
        render(<SignInForm signInUseCase={mockSignInUseCase}/>)
        userEvent.type(screen.getByLabelText(/username/i), 'test@test.com');
        userEvent.type(screen.getByLabelText(/password/i), 'test');
        const signInButton = screen.getByRole('button', {name: /sign in/i});
        
        await act (async () => {
            userEvent.click(signInButton);
        });
                
        expect(screen.queryByText(/Username is required./)).not.toBeInTheDocument();
        expect(screen.queryByText(/Password is required./)).not.toBeInTheDocument();
    });

    it("execute use case user sign in successfully", async () => {        
        render(<SignInForm signInUseCase={mockSignInUseCase}/>)
        userEvent.type(screen.getByLabelText(/username/i), 'test@test.com');
        userEvent.type(screen.getByLabelText(/password/i), 'test');
        const signInButton = screen.getByRole('button', {name: /sign in/i});
        
        await act (async () => {
            userEvent.click(signInButton);
        });
        
        expect(mockSignInUseCase.execute).toHaveBeenCalled()
        expect(mockSignInUseCase.execute.mock.calls[0][0]).toBe('test@test.com')
        expect(mockSignInUseCase.execute.mock.calls[0][1]).toBe('test')
    });    
});      
