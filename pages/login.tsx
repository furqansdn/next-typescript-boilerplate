import React, { ReactNode } from 'react';
import Guest from '../layouts/Guest';
export default function Login() {
  return <div></div>;
}

Login.getLayout = (page: ReactNode) => <Guest>{page}</Guest>;
