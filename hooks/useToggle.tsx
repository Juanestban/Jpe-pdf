import { useState } from 'react';

export const useToggle = (): { toggle: boolean; handleToggle(): void } => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => setToggle(!toggle);

  return { toggle, handleToggle };
};
