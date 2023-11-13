import Link from "next/link";
import Image from "next/image";
import './Header.scss';

function Header() {
  return (
    <header className="header">
        <Link href='/'>
            <Image src='/logo.png' alt='logotype' width={100} height={24} />
        </Link>
    </header>
  )
}

export default Header