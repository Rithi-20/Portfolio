import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Cpu, Layers, Terminal } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 460;
    const height = container.clientHeight || 460;

    // Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for all rotating elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Inner glowing icosahedron core
    const innerGeom = new THREE.IcosahedronGeometry(4.2, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    mainGroup.add(innerMesh);

    // 2. Outer dodecahedron cage
    const outerGeom = new THREE.DodecahedronGeometry(6.2, 0);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const outerMesh = new THREE.Mesh(outerGeom, outerMat);
    mainGroup.add(outerMesh);

    // 3. Central glowing point
    const coreSphereGeom = new THREE.SphereGeometry(1.6, 16, 16);
    const coreSphereMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6
    });
    const coreSphere = new THREE.Mesh(coreSphereGeom, coreSphereMat);
    mainGroup.add(coreSphere);

    // 4. Orbital particle cloud
    const particleCount = 450;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x06b6d4); // Cyan
    const color2 = new THREE.Color(0x818cf8); // Indigo
    const color3 = new THREE.Color(0x10b981); // Emerald

    for (let i = 0; i < particleCount; i++) {
      const radius = 6.5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3;
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeom.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    mainGroup.add(particles);

    // 5. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x06b6d4, 2, 50);
    pointLight.position.set(5, 5, 10);
    scene.add(pointLight);

    // Mouse tracking with smooth damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.5;
      targetY = y * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotations
      mainGroup.rotation.y = elapsedTime * 0.18 + mouseX;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.12) * 0.2 + mouseY;

      innerMesh.rotation.y = -elapsedTime * 0.25;
      innerMesh.rotation.z = elapsedTime * 0.15;

      outerMesh.rotation.x = elapsedTime * 0.12;
      outerMesh.rotation.y = elapsedTime * 0.15;

      particles.rotation.y = -elapsedTime * 0.08;

      // Subtle breathing pulse on the core
      const pulse = 1 + Math.sin(elapsedTime * 2.2) * 0.06;
      coreSphere.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      innerGeom.dispose();
      innerMat.dispose();
      outerGeom.dispose();
      outerMat.dispose();
      coreSphereGeom.dispose();
      coreSphereMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  const floatingBadges = [
    { label: 'Qwen2.5-72B & Agents', category: 'Agentic AI', pos: 'top-2 left-4' },
    { label: 'FAISS & RAG Pipelines', category: 'Generative AI', pos: 'top-10 right-4' },
    { label: 'ElevenLabs Voice AI', category: 'Voice Agents', pos: 'bottom-16 left-6' },
    { label: 'Random Forest + SVM', category: 'ML Ensemble', pos: 'bottom-4 right-8' },
    { label: 'IEEE ICESCS 2025', category: 'Published Paper', pos: 'top-1/2 -left-3 -translate-y-1/2' }
  ];

  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center">
      {/* Glow aura backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Cybernetic outer rings */}
      <div className="absolute inset-4 rounded-full border border-cyan-500/10 pointer-events-none animate-pulse" />
      <div className="absolute inset-12 rounded-full border border-indigo-500/15 pointer-events-none" />

      {/* Three.js Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full relative cursor-grab active:cursor-grabbing z-10"
        title="Interactive 3D Neural Core — Move your mouse to rotate"
      />

      {/* Floating 3D Holographic Badges */}
      {floatingBadges.map((badge, idx) => (
        <div
          key={idx}
          onMouseEnter={() => setActiveTag(badge.label)}
          onMouseLeave={() => setActiveTag(null)}
          className={`absolute ${badge.pos} z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d1424]/85 backdrop-blur-md border border-cyan-500/30 text-xs font-mono shadow-lg transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-[#111c34] hover:shadow-cyan-500/20 cursor-default animate-float-3d`}
          style={{ animationDelay: `${idx * 0.8}s` }}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-white font-medium">{badge.label}</span>
          <span className="text-[10px] text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/40">
            {badge.category}
          </span>
        </div>
      ))}

      {/* Interactive Hint Indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur border border-white/10 text-[11px] font-mono text-slate-400 flex items-center gap-1.5 pointer-events-none">
        <Sparkles className="w-3 h-3 text-cyan-400" />
        <span>Interactive 3D WebGL Core</span>
      </div>
    </div>
  );
};
