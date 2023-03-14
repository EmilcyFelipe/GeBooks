import React, { useState } from 'react';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Routes(): JSX.Element {
    const [isAutheticated, setIsAuthenticated] = useState(true)
    return (isAutheticated ? <AppRoutes /> : <AuthRoutes />)
}