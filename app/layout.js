import "../styles/globals.css";

export const metadata = {
  title: "Mirra | Your Feed",
  description: "A hyper-personalized commerce feed.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="mobile-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
