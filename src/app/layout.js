import './globals.css';
import Lines from '@/components/Common/Lines';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        />
      </head>
      <body className="sub-bg">
        <Lines />
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
