import React from 'react';
import { useParams } from 'react-router-dom';
// @ts-expect-error
export const isCheckCode = (Component) => {
  const WithCheckUrl = () => {
    const params = useParams();
    return <Component params={params} />;
  };

  return WithCheckUrl;
};
