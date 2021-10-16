import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../src/components/elements/Button';
import Input from '../src/components/elements/Input';
import { useRouter } from 'next/router';
import { attemptLogin } from '../src/features/auth/authAPI';

type LoginFormInput = {
  email: string;
  password: string;
};

const pageMetaData = (
  <Head>
    <title>Login into Sabka Bazaar</title>
  </Head>
);

const schema = yup
  .object({
    email: yup.string().email().required('Please enter email address'),
    password: yup
      .string()
      .required('Please enter password to login')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
        'Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
      ),
  })
  .required();

export default function Login(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    const result = await attemptLogin(data);
    if (result.status === 'authenticated') {
      router.push('/');
    }
  };

  return (
    <>
      {pageMetaData}
      <article className="account">
        <aside className="account__sidebar">
          <h1 role="heading">Login</h1>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </aside>
        <div className="account__form">
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <Button type="submit" aria-label="click to login button">
              Login
            </Button>
          </form>
        </div>
      </article>
    </>
  );
}
