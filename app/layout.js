import "../styles/globals.css";

export const metadata = {
  title: "Mirra | Your Feed",
  description: "A hyper-personalized commerce feed.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
