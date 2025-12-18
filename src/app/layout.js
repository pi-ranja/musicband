import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" />
      </head>
      <body>
        <div className="container-sm">{children}</div>
      </body>
    </html>
  );
}