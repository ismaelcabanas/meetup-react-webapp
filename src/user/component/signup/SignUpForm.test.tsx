import React from 'react'
import { render, screen } from '@testing-library/react'
import SignUpForm from './SignUpForm'

describe('Sign up form component', () => {    
    it('should renders the header', () => {
        render(<SignUpForm />)

        expect(screen.getByRole('heading', {name: /sign up/i})).toBeInTheDocument()
    });
});
