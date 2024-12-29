import React, { useEffect, useRef } from 'react';

interface LightningBolt {
  points: Array<{ x: number; y: number; alpha: number }>;
  life: number;
}

export default function Lightning() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const boltsRef = useRef<LightningBolt[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    contextRef.current = ctx;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createLightningBolt = (x: number, y: number): LightningBolt => {
      const points = [];
      let segmentHeight = canvas.height / 20;

      for (let i = 0; i < 20; i++) {
        points.push({
          x: x + Math.random() * 20 - 10,
          y: y + i * segmentHeight,
          alpha: Math.random() * 0.6 + 0.4
        });
      }

      return {
        points,
        life: 1.0
      };
    };

    const drawLightning = (bolt: LightningBolt) => {
      if (!contextRef.current) return;

      contextRef.current.beginPath();
      contextRef.current.moveTo(bolt.points[0].x, bolt.points[0].y);

      bolt.points.forEach((point) => {
        contextRef.current!.lineTo(point.x, point.y);
      });

      contextRef.current.strokeStyle = `hsla(190, 100%, 70%, ${bolt.life})`;
      contextRef.current.lineWidth = 2;
      contextRef.current.stroke();
    };

    const updateBolts = () => {
      boltsRef.current = boltsRef.current.filter(bolt => {
        bolt.life -= 0.05;
        return bolt.life > 0;
      });

      if (mouseRef.current.active) {
        boltsRef.current.push(createLightningBolt(
          mouseRef.current.x,
          mouseRef.current.y
        ));
      }

      boltsRef.current.forEach(bolt => {
        bolt.points.forEach(point => {
          point.x += Math.random() * 4 - 2;
          point.y += Math.random() * 4 - 2;
        });
      });
    };

    const animate = () => {
      if (!contextRef.current) return;

      contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
      updateBolts();
      boltsRef.current.forEach(drawLightning);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseDown = () => {
      mouseRef.current.active = true;
    };

    const handleMouseUp = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}