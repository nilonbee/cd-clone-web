/* eslint-disable @next/next/no-img-element */
'use client';
import { useUserStore } from '@/store';
import React from 'react'
import { ProfileIcon } from '../Icons';
import { rootImagePath } from '@/utils/rootImagePath';


export const Avatar = () => {
    const { user } = useUserStore();

    if (user) {
        console.log(user.img_url, "user");

        return (
            <div>
                <img
                    className='w-12 h-12 rounded-full border-none outline-primary object-contain'
                    src={rootImagePath(user.img_url)}
                    alt="avatar"
                />
            </div>
        )
    }

    return (
        <ProfileIcon />
    )
}
