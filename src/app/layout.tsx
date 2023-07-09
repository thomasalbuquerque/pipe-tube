import './globals.css';
import { Noto_Sans } from 'next/font/google';

const Noto_Sans_ = Noto_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  // weight: ['300', '400', '500', '700'],
});

export const metadata = {
  title: 'Pipe Tube',
  description: 'An Youtube like video platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Noto_Sans_.className}>{children}</body>
    </html>
  );
}
