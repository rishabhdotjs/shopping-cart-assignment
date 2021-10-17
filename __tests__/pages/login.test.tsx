import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Login from '../../pages/login';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/dom';

afterEach(cleanup);

describe('Login page test suite', () => {
  it('renders Login page', () => {
    // Arrange
    render(<Login />);

    const loginheading = screen.getByRole('heading', {
      name: /Login/i,
    });
    const emailBox = screen.getByPlaceholderText(/Enter email address/i);
    const PasswordBox = screen.getByPlaceholderText(/Enter your password/i);
    const LoginBtn = screen.getByLabelText('click to login button');

    // Assert
    expect(loginheading).toBeInTheDocument();
    expect(emailBox).toBeInTheDocument();
    expect(PasswordBox).toBeInTheDocument();
    expect(LoginBtn).toBeInTheDocument();
  });

  it('show error message', async () => {
    // Arrange
    const screen = render(<Login />);

    const emailBox = screen.getByPlaceholderText(/Enter email address/i);
    const PasswordBox = screen.getByPlaceholderText(/Enter your password/i);
    const LoginBtn = screen.getByLabelText('click to login button');

    // Act
    await act(async () => {
      fireEvent.change(emailBox, { target: { value: 'sample@test.com' } });
      fireEvent.change(PasswordBox, { target: { value: 'pass' } });
      fireEvent.click(LoginBtn);
    });

    expect(
      screen.getByText(
        /Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character/i
      )
    ).toBeInTheDocument();
  });
});
