import Link from "next/link";
import HeaderButtons from "./headerButtons";

export default function Header() {
  return (
    <header className="py-4 border-b border-gray-700">
      <div className="container flex justify-between items-center gap-4">
        <Link href='/#home' className="text-2xl font-medium">Ashik-<span className="text-primary">Himel</span></Link>

        <nav className="text-primary font-medium flex justify-center items-center gap-4 [&>a]:hidden xl:[&>a]:block">
          <Link href='/#home'>Home</Link>
          <Link href='/#about'>About Me</Link>
          <Link href='/#eductions'>Educations</Link>
          <Link href='/#skills'>Skills</Link>
          <Link href='/#services'>Services</Link>
          <Link href='/#works'>My Works</Link>
          <Link href='/#contact'>Contact Me</Link>
          <Link href='/portfolio' className="btn btn-primary">Portfolio</Link>
          <HeaderButtons />
        </nav>
      </div>
    </header>
  );
}