import { useRef, useEffect, useState, ReactPortal } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
  selector: string;
};

export default function ClientOnlyPortal({
  children,
  selector,
}: Props): ReactPortal | null {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
}
