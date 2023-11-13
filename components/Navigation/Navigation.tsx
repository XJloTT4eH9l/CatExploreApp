'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import './Navigation.scss';

function Navigation() {
    const pathName = usePathname();
    const navLinks = [
        {id: 1, title: 'Voting', href: '/voting', imgPath: '/voting.png', bgColor: '#B4B7FF'},
        {id: 2, title: 'Breeds', href: '/breeds', imgPath: '/breeds.png', bgColor: '#97EAB9'},
        {id: 3, title: 'Gallery', href: '/gallery', imgPath: '/gallery.png', bgColor: '#FFD280'},
    ];
  return (
    <section className="navigation">
        <h1 className="navigation__title">Cat explore app</h1>
        <p className="navigation__text">Hello, welcome to explore cats app</p>
        <nav className="nav">
            <ul className="nav__list">
                {navLinks.map(link => (
                    <li key={link.id} >
                        <Link 
                            className="nav__item" 
                            style={{backgroundColor: link.bgColor}} 
                            href={link.href}
                        >
                            <Image 
                                src={link.imgPath} 
                                alt={link.title} 
                                width={138} 
                                height={198} 
                            />
                        </Link>
                        <Link 
                            href={link.href}
                            className={pathName === link.href ? 'nav__link nav__link--active' : 'nav__link'}
                        >
                            {link.title.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </section>
  )
}

export default Navigation