import React from 'react';
import { useLocation } from 'react-router-dom';

export const isCheckCode = (Component: React.FC<{ isPageCheckCode: boolean }>) => {
  const WithCheckUrl = () => {
    const { pathname } = useLocation();

    const isPageCheckCode = pathname.length > 0 && pathname?.includes('/check_code');

    return <Component isPageCheckCode={isPageCheckCode} />;
  };

  return WithCheckUrl;
};
