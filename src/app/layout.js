import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "Ashikujjaman Himel - MERN Stack Developer",
  description: "I am Ashikujjaman Himel, a MERN Stack Developer, a Competitive Programmer from Dhaka, Bangladesh. I developed 15+ full-stack projects and solved 250+ problems in online judges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-bg-color text-white w-full h-full min-h-screen flex flex-col [&>*:nth-child(2)]:flex-1 selection:bg-white selection:text-bg-color`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
