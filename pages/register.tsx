import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../src/components/elements/Input';
import Button from '../src/components/elements/Button';
import { attemptRegister } from '../src/features/auth/authAPI';
import { useRouter } from 'next/router';

type RegisterFormInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup
  .object({
    firstName: yup.string().required('First name is required').min(3),
    lastName: yup.string().required('Last name is required').min(3),
    email: yup.string().email().required('Please enter email address'),
    password: yup
      .string()
      .required('Please enter password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
        'Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
      ),
    confirmPassword: yup
      .string()
      .required('Please re-enter password')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  .required();

export default function RegisterForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const onSubmit: SubmitHandler<RegisterFormInput> = async (data) => {
    const result = await attemptRegister(data);
    if (result.status === 'authenticated') {
      router.push('/');
    }
  };

  return (
    <article className="account">
      <aside className="account__sidebar">
        <h1 role="heading">Sign up</h1>
        <p>We do not share personal detail with anyone</p>
      </aside>
      <div className="account__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="firstName"
            label="firstName"
            type="text"
            register={register}
            placeholder="Enter your first name"
            error={errors['firstName']}
          />
          <Input
            name="lastName"
            label="lastName"
            type="text"
            register={register}
            placeholder="Enter your last name"
            error={errors['lastName']}
          />
          <Input
            name="email"
            label="email"
            type="email"
            register={register}
            placeholder="Enter email address"
            aria-label="Email address input textbox"
            error={errors['email']}
          />
          <Input
            name="password"
            label="password"
            type="password"
            register={register}
            placeholder="Enter your password"
            aria-label="Password input textbox"
            error={errors['password']}
          />
          <Input
            name="confirmPassword"
            label="confirmPassword"
            type="password"
            register={register}
            placeholder="Re-enter your password"
            error={errors['confirmPassword']}
          />
          <Button
            type="submit"
            aria-label="click to register with sabka bazaar"
          >
            Register
          </Button>
        </form>
      </div>
    </article>
  );
}
