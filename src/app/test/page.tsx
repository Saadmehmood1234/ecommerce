"use client";

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function AnimatedBox() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.to(boxRef.current, { x: 600, duration: 1 });
  }, []);

  return (
    <div ref={boxRef} style={{ width: '100px', height: '100px', backgroundColor: 'blue' }}>
      I'm animated!
    </div>
  );
}
