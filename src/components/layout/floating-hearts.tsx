'use client';

import { useRef, useEffect, useCallback } from 'react';

// Using HSL values from globals.css for primary color: 340 82% 61%
const HEART_COLOR = 'hsl(340 82% 61% / 0.5)';
const HEART_COUNT = 150;

class HeartParticle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  canvasHeight: number;
  canvasWidth: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.size = Math.random() * 25 + 10;
    this.x = Math.random() * this.canvasWidth;
    this.y = Math.random() * this.canvasHeight + this.canvasHeight;
    this.speedY = Math.random() * 2 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.opacity = Math.random() * 0.5 + 0.2;
  }

  update() {
    this.y -= this.speedY;
    this.x += this.speedX;

    if (this.y < -this.size || this.x < -this.size || this.x > this.canvasWidth + this.size) {
      this.y = this.canvasHeight + this.size;
      this.x = Math.random() * this.canvasWidth;
      this.size = Math.random() * 25 + 10;
      this.speedY = Math.random() * 2 + 1;
      this.speedX = Math.random() * 2 - 1;
      this.opacity = Math.random() * 0.5 + 0.2;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = HEART_COLOR;
    
    ctx.beginPath();
    const topCurveHeight = this.size * 0.3;
    ctx.moveTo(this.x, this.y + topCurveHeight);
    ctx.bezierCurveTo(this.x, this.y, this.x - this.size / 2, this.y, this.x - this.size / 2, this.y + topCurveHeight);
    ctx.bezierCurveTo(this.x - this.size / 2, this.y + (this.size + topCurveHeight) / 2, this.x, this.y + (this.size + topCurveHeight) / 1.5, this.x, this.y + this.size);
    ctx.bezierCurveTo(this.x, this.y + (this.size + topCurveHeight) / 1.5, this.x + this.size / 2, this.y + (this.size + topCurveHeight) / 2, this.x + this.size / 2, this.y + topCurveHeight);
    ctx.bezierCurveTo(this.x + this.size / 2, this.y, this.x, this.y, this.x, this.y + topCurveHeight);
    ctx.closePath();
    
    ctx.fill();
    ctx.restore();
  }
}

export default function FloatingHearts() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heartsRef = useRef<HeartParticle[]>([]);
  const animationFrameId = useRef<number>();

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    heartsRef.current = [];
    for (let i = 0; i < HEART_COUNT; i++) {
        heartsRef.current.push(new HeartParticle(canvas));
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    heartsRef.current.forEach(heart => {
      heart.update();
      heart.draw(ctx);
    });

    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    initCanvas();
    animate();

    window.addEventListener('resize', initCanvas);

    return () => {
      window.removeEventListener('resize', initCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [initCanvas, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-5"
    />
  );
}
