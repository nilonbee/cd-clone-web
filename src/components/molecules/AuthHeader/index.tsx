import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { SectionHeader } from '@/components/atoms'

type AuthHeaderProps = {
    title: string
}
export const AuthHeader = ({ title }: AuthHeaderProps) => {
    return (
        <>
            <div className="my-3">
                <SectionHeader title={title} description='' />
            </div>
            <Link href="/">
                <Image
                    height={110}
                    width={100}
                    className="h-12 w-auto m-auto object-contain mt-4 mb-8"
                    src="/images/Logo-Clr.png"
                    alt="Logo of Campus Direct"
                />
            </Link>
        </>
    )
}
