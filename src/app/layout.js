import { DM_Sans } from 'next/font/google';
import './globals.css';

import Nav from '../components/nav';
import Header from '../components/header';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

export const metadata = {
  title: 'SocialShare',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Nav />
        <Header />
        {children}
      </body>
    </html>
  );
}
