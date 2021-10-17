import React from 'react';
import { render, screen } from '@testing-library/react';
import Register from '../../pages/register';

describe('Register test suite', () => {
  it('renders register page', () => {
    // Arrange
    render(<Register />);

    // Act
    const SignupHeading = screen.getByRole('heading', {
      name: /Sign up/i,
    });
    const firstNameBox = screen.getByPlaceholderText('Enter your first name');
    const PasswordBox = screen.getByPlaceholderText('Enter your password');
    const ReConfirmPasswordBox = screen.getByPlaceholderText(
      'Re-enter your password'
    );
    const RegisterBtn = screen.getByLabelText(
      'click to register with sabka bazaar'
    );
    // Assert
    expect(SignupHeading).toBeInTheDocument();
    expect(firstNameBox).toBeInTheDocument();
    expect(PasswordBox).toBeInTheDocument();
    expect(ReConfirmPasswordBox).toBeInTheDocument();
    expect(RegisterBtn).toBeInTheDocument();
  });
});
