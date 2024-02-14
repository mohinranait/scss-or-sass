'use client'
import { useSession } from 'next-auth/react';
import React from 'react';

const ProtectPageComponent = () => {
    const { data: session } = useSession();
    return (
        <div>
            Protect Components {session.user.name}
        </div>
    );
};

export default ProtectPageComponent;