import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container-sm">
          {children}
        </div>
      </body>
    </html>
  );
}
