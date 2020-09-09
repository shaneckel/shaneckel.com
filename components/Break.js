import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Breakpoints } from './Theme';

const breakpointMobile = Breakpoints.sm
const breakpointTablet = Breakpoints.md

function Break() {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: breakpointMobile,
  });

  const isTablet = useMediaQuery({
    minWidth: breakpointMobile,
    maxWidth: breakpointTablet,
  });

  const isDesktop = useMediaQuery({
    minWidth: breakpointTablet,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true);
  }, []);

  return {
    isDesktop: isClient ? isDesktop : true,
    isTablet: isClient ? isTablet : false,
    isMobile: isClient ? isMobile : false,
  };
}

export default Break;