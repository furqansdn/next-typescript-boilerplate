import { ReactNode } from 'react';
import Button from '../components/Button';
import App from '../layouts/App';

export default function Home() {
  return <div className='space-x-2'>TailwindCSS</div>;
}

Home.getLayout = (Page: ReactNode) => <App>{Page}</App>;
