/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-var-requires */
// Mocks useRouter
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

/**
 * mockNextUseRouter
 * Mocks the useRouter React hook from Next.js on a test-case by test-case basis
 */
export function mockNextUseRouter(props: {
  route: string;
  pathname: string;
  query: string;
  asPath: string;
  push: () => void;
}) {
  useRouter.mockImplementationOnce(() => ({
    route: props.route,
    pathname: props.pathname,
    query: props.query,
    asPath: props.asPath,
    push: props.push,
  }));
}
