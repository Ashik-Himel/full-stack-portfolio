import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 py-4 text-center bg-primary text-bg-color">
      <div className="container">
        <p>Copyright&copy;{new Date().getFullYear()} - Ashik-Himel. All rights reserved. Design and Developed by <Link href="https://www.facebook.com/ashikujjaman.himel" target="_blank" className="font-medium">Ashik-Himel</Link>.</p>
      </div>
    </footer>
  );
}