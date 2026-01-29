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
      <body className="bg-gray-900 flex justify-center h-[100dvh] overflow-hidden">
        {/* Mobile Container */}
        <div className="w-full max-w-[480px] h-full relative bg-black shadow-2xl overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
