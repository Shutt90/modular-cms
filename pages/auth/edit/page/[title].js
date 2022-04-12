import React from 'react'
import { useRouter } from 'next/router';
import {BiArrowBack} from 'react-icons/bi';
import Link from 'next/link'
import Tabs from '../../../../containers/Tabs';

function Title() {
    const router = useRouter();
    const page = router.query;  

    return (
    <div className="container">
        <div className="flex align-center justify-between">
            <h1 className="margin-left10">Editting {page.title}</h1>
            <Link className="pad10" href={'/auth/pages/'}>
                <a>
                    <BiArrowBack size={50} />
                </a>
            </Link>
        </div>
        <Tabs modelName={'pages'} model={page} tabs={['form', 'rows', 'settings']}/>

    </div>
    )
}

export default Title