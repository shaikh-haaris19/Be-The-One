import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import './globals.css'

export const metadata = {
  title: "Be The One - Fund The Need",
  description: "This website helps people give support to those in need. With just a few clicks, you can donate to causes like food, shelter, healthcare, and education. It’s safe, quick, and made to ensure your help reaches the right place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="min-h-[83.6vh] bg-black bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
