import React from 'react'
import { MdCategory, MdProductionQuantityLimits, MdFindInPage, MdViewModule} from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';

function AuthLayout() {
  return (
    <>
      <nav className='auth-nav'>
        <Link href="/auth/pages" passHref={true}>
          <a>
            <MdFindInPage/>
            Pages
          </a>
        </Link>
        <Link href="/auth/modules" passHref={true}>
          <a>
            <MdViewModule/>
            Modules
          </a>
        </Link>
        <Link href="/auth/products" passHref={true}>
          <a>
            <MdProductionQuantityLimits/>
            Products
          </a>
        </Link>
        <Link href="/auth/categories" passHref={true}>
          <a>
            <MdCategory/>
            Categories
          </a>
        </Link>
        <Link href="/auth/profile" passHref={true}>
          <a>
            <CgProfile/>
            Profile
          </a>
        </Link>
      </nav>
    </>
  )
}

export default AuthLayout