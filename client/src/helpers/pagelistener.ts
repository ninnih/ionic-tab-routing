import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

export const PageListener: React.VFC = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;
    console.log('Pathlistener:', path);
  }, [location]);

  return null;
};