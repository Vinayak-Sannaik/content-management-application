import type { Metadata } from 'next';
import { LocaleProvider } from '../contexts/LocaleContext';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Multi-Language Store',
  description: 'A store that supports multiple languages and currencies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
