'use client';

import Image from 'next/image';
import { FiBell, FiMenu } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.css';
import useStepper from '@/store/StepperStore';

export default function Navbar() {
  const pathname = usePathname();
  const { currentStep } = useStepper();
  return (
    <nav>
      <button className="action-btn">
        <Image src={'/logo.svg'} width={20} height={20} alt="houseek logo" />
      </button>
      {pathname !== '/add' && (
        <ul>
          <li>
            <Link href="/" className={pathname === '/' ? 'active' : 'inactive'}>
              Comparatifs
            </Link>
          </li>
          <li>
            <Link
              href="/clients"
              className={pathname === '/clients' ? 'active' : 'inactive'}
            >
              Liste des clients
            </Link>
          </li>
          <li>
            <Link
              href="/to-sale"
              className={pathname === '/to-sale' ? 'active' : 'inactive'}
            >
              Propriétés a vendre
            </Link>
          </li>
          <li>
            <Link
              href="/to-rent"
              className={pathname === '/to-rent' ? 'active' : 'inactive'}
            >
              Propriétés a louer
            </Link>
          </li>
        </ul>
      )}
      {pathname !== '/add' && (
        <div className="actions-container">
          <button className="action-btn">
            <FiBell size={20} />
          </button>
          <button className="action-btn">
            <FiMenu size={20} />
          </button>
        </div>
      )}
      {pathname == '/add' && (
        <button
          className="action-btn"
          style={{ borderRadius: 57, width: '82px', fontSize: '16px' }}
        >
          Quitter
        </button>
      )}
      {pathname == '/add' && (
        <div
          style={{ position: 'absolute', bottom: 0, left: 0 }}
          className="status-bar"
        >
          <div
            className="fill-bar"
            style={{ width: `${(currentStep * 100) / 7}%` }}
          />
        </div>
      )}
    </nav>
  );
}
