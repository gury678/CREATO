import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

export default function Editor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      height: 500,
      width: 800,
      backgroundColor: '#fff',
    });

    const text = new fabric.IText('Edit me!', {
      left: 100,
      top: 100,
      fill: '#000',
      fontSize: 24,
    });

    canvas.add(text);

    return () => canvas.dispose();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <canvas ref={canvasRef} className="border shadow-lg" />
    </div>
  );
}
