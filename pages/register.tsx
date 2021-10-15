import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../src/components/elements/Input';
import Button from '../src/components/elements/Button';

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
      .min(8, 'Password must be of minimum 8 characters'),
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
  const onSubmit: SubmitHandler<RegisterFormInput> = (data) =>
    console.log(data);

  return (
    <article className="account">
      <aside className="account__sidebar">
        <h1>Sign up</h1>
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
          <Button type="submit">Register</Button>
        </form>
      </div>
    </article>
  );
}
