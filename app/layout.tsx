import '@/app/ui/global.css';
import { inter, mFont } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mFont.className} antialiased`}>
      {/* <body> */}
        {children}
      </body>
    </html>
  );
}
