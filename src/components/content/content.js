import { Error } from "../";

export const Content = ({ children, error }) =>
  error ? <Error error={error} /> : children;
