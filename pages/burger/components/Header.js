import { SiBurgerking } from 'react-icons/si';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div>
        <SiBurgerking />
      </div>
      <nav>
        <Link href="/">
          <a>Домой</a>
        </Link>
        <Link href="/about">
          <a>О Нас</a>
        </Link>
        <Link href="/Reviews">
          <a>Отзывы</a>
        </Link>
        <Link href="/burger">
          <a>Бургеры</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
