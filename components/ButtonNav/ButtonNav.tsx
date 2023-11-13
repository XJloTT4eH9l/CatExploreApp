import Link from 'next/link';
import './ButtonNav.scss';

interface ButtonNavProps {
    type: string;
    svg: string;
    bgColor: string;
    handleClick?: () => void;
}

function ButtonNav({ type, svg, bgColor, handleClick } : ButtonNavProps) {
  return (
    type === 'button' ? (
        <button 
            className='button-nav' 
            style={{backgroundColor: bgColor}}
            onClick={handleClick}
        >
            <div className='button-nav__svg' dangerouslySetInnerHTML={{ __html: svg }} />
        </button>
    ) : (
        <Link className='button-nav' href='/'></Link>
    )
  )
}

export default ButtonNav