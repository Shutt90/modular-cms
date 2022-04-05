import React from 'react'
import { MdCategory, MdProductionQuantityLimits, MdFindInPage, MdViewModule} from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import singleWordCapitalize from '../helpers/stringHelpers';

function AuthLayout({children}) {

  const router = useRouter();

  const location = singleWordCapitalize(router.pathname)

  return (
    <>
      <Head>
        <title>Shutt CMS - {location}</title>
        
      </Head>
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
      {children}
      

    </>
  )
}

export default AuthLayout