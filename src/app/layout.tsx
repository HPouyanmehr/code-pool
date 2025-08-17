import type { Metadata } from 'next';

// Core Styles
import 'core/styles/globals.css';

// Module Types
interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'NextCn',
  description:
    'Reusable UI components and utilities for flexible and modular project setups in Next.js.',
};

export default function RootLayout(props: Props) {
  // Props
  const { children } = props;

  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
