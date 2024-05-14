'use client';
import React from 'react';
import { useUserStore } from "@/store";
import { useRouter } from "next/navigation"


export default function ProtectedLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const router = useRouter();
    const { authUser } = useUserStore();

    if (authUser) {
        return (<section>
            {children}
        </section>)
    }

    return router.push('/login');
}