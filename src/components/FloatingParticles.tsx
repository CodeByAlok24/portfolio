import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  hue: number;
};

const FloatingParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    const PARTICLE_COUNT = 65;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      resize();
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1.5,
          speedX: (Math.random() - 0.5) * 0.15,
          speedY: -(Math.random() * 0.2 + 0.05),
          opacity: Math.random() * 0.35 + 0.08,
          hue: Math.random() > 0.5
            ? [270, 320, 190][Math.floor(Math.random() * 3)]
            : 0,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        if (p.hue > 0) {
          gradient.addColorStop(0, `hsla(${p.hue}, 80%, 70%, ${p.opacity})`);
          gradient.addColorStop(0.4, `hsla(${p.hue}, 80%, 70%, ${p.opacity * 0.3})`);
        } else {
          gradient.addColorStop(0, `rgba(255, 255, 255, ${p.opacity})`);
          gradient.addColorStop(0.4, `rgba(255, 255, 255, ${p.opacity * 0.2})`);
        }
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 2 }}
    />
  );
};

export default FloatingParticles;
