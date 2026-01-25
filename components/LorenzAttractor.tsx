import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { ChevronLeft, ChevronRight, Info, Activity, Droplets, Zap, Truck, TrendingUp, Bug } from 'lucide-react';

interface ModelConfig {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  description: string;
  colorInterpolator: (t: number) => string;
  equation: (x: number, y: number, t: number, N: number) => number;
}

const models: ModelConfig[] = [
  {
    id: 'fluid',
    title: 'Fluid Dynamics',
    category: 'Physics',
    icon: Droplets,
    description: 'Simulating wave interference and ripple propagation using partial differential equations (PDEs).',
    colorInterpolator: d3.interpolateTurbo,
    equation: (x, y, t, N) => {
      const dx = x - N/2;
      const dy = y - N/2;
      const dist = Math.sqrt(dx*dx + dy*dy);
      return Math.sin(dist * 0.4 - t * 2) + 
             Math.sin(x * 0.3 + t) * Math.cos(y * 0.2 + t) +
             Math.sin(dx * 0.15 + dy * 0.15 + t * 0.5);
    }
  },
  {
    id: 'epidemic',
    title: 'Epidemic Spread (SIR)',
    category: 'Biology',
    icon: Bug,
    description: 'Spatial modeling of disease diffusion. Peaks represent high infection density radiating from ' + 
                 'an epicenter, simulating how viruses spread through populations.',
    colorInterpolator: d3.interpolateMagma,
    equation: (x, y, t, N) => {
      // Expanding ring of infection
      const dx = x - N/2;
      const dy = y - N/2;
      const r = Math.sqrt(dx*dx + dy*dy);
      const wave = Math.exp(-Math.pow(r - (t * 5) % 40, 2) / 20); // Moving ring
      const background = Math.sin(x * 0.5) * Math.cos(y * 0.5) * 0.2;
      return wave * 4 + background;
    }
  },
  {
    id: 'reaction',
    title: 'Turing Patterns',
    category: 'Chemistry',
    icon: Zap,
    description: 'Reaction-Diffusion systems explaining patterns in nature (e.g., zebra stripes, cheetah spots). ' +
                 'Represents the interaction between activator and inhibitor chemicals.',
    colorInterpolator: d3.interpolateViridis,
    equation: (x, y, t, N) => {
      // Standing wave-like patterns
      return Math.sin(x * 0.5 + t * 0.5) * Math.cos(y * 0.5 - t * 0.2) + 
             Math.sin(x * 0.8 - t * 0.3) * Math.sin(y * 0.8 + t * 0.1) * 1.5;
    }
  },
  {
    id: 'traffic',
    title: 'Traffic Shockwaves',
    category: 'Civil Eng.',
    icon: Truck,
    description: 'Phantom traffic jams modeled as density waves. ' +
                 'High peaks indicate congestion moving upstream against the flow of traffic.',
    colorInterpolator: d3.interpolateRdYlGn, // Red=Jam, Green=Free
    equation: (x, y, t, N) => {
      // Diagonal movement representing flow on a highway network
      const flow = (x + y) * 0.4 - t * 2;
      // Sawtooth-like wave for stop-and-go traffic
      const jam = Math.sin(flow) + 0.5 * Math.sin(2 * flow); 
      // Add some "lane changing" noise
      return jam * 1.5 + Math.cos(x - y) * 0.5;
    }
  },
  {
    id: 'heat',
    title: 'Heat Diffusion',
    category: 'Thermodynamics',
    icon: Activity,
    description: 'Thermal conductivity simulation on a metal plate. ' +
                 'Heat sources pulse and diffuse energy into the surrounding medium.',
    colorInterpolator: d3.interpolateInferno,
    equation: (x, y, t, N) => {
      // Multiple heat sources pulsing
      const dx1 = x - N/3;
      const dy1 = y - N/3;
      const dx2 = x - 2*N/3;
      const dy2 = y - 2*N/3;
      
      const s1 = Math.exp(-(dx1*dx1 + dy1*dy1)/40) * Math.abs(Math.sin(t));
      const s2 = Math.exp(-(dx2*dx2 + dy2*dy2)/40) * Math.abs(Math.cos(t * 1.3));
      
      return (s1 + s2) * 4 - 1; // Normalized range
    }
  },
  {
    id: 'finance',
    title: 'Market Volatility',
    category: 'Finance',
    icon: TrendingUp,
    description: 'Stochastic volatility surface representing option prices. ' +
                 'The chaotic terrain models the unpredictability of financial markets.',
    colorInterpolator: d3.interpolatePlasma,
    equation: (x, y, t, N) => {
      // Pseudo-random noise (sum of sines)
      return Math.sin(x * 0.8 + t) + 
             Math.sin(y * 0.4 - t * 1.5) * 0.5 + 
             Math.sin((x + y) * 1.2 + t * 0.5) * 0.5;
    }
  }
];

const ModelingShowcase: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const model = models[currentModelIndex];

  // Ref to hold the current model index for the animation loop
  const modelIndexRef = useRef(currentModelIndex);
  
  useEffect(() => {
    modelIndexRef.current = currentModelIndex;
  }, [currentModelIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const dpr = window.devicePixelRatio || 1;
        const rect = parent.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
      }
    };
    
    resize();
    window.addEventListener('resize', resize);

    // Simulation Config
    const N = 50; // Higher resolution
    
    const render = () => {
      if (isPaused) {
         animationFrameId = requestAnimationFrame(render);
         return;
      }

      const currentModel = models[modelIndexRef.current];
      const colorScale = d3.scaleSequential(currentModel.colorInterpolator).domain([-2.5, 2.5]);
      
      const width = parseFloat(canvas.style.width);
      const height = parseFloat(canvas.style.height);
      
      // Clear with slight fade for motion trail effect (optional, strictly clear for now)
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#ffffff'; 
      ctx.fillRect(0, 0, width, height);

      const getValue = currentModel.equation;

      // 3D Projection Settings
      const project = (x: number, y: number, z: number) => {
        const scale = Math.min(width, height) / (N * 2.5);
        const isoX = (x - y) * 0.866;
        const isoY = (x + y) * 0.5 - z * 0.5;
        return {
          x: width / 2 + isoX * scale * 1.6,
          y: height / 2 + isoY * scale * 1.6 - height / 15
        };
      };
      
      const spacing = 1.0;

      // Pre-calculate points
      const points: any[] = [];
      for (let i = 0; i <= N; i++) {
        points[i] = [];
        for (let j = 0; j <= N; j++) {
          // Centering the grid coordinates
          const z = getValue(i, j, time, N);
          points[i][j] = {
            ...project((i - N/2) * spacing, (j - N/2) * spacing, z),
            z
          };
        }
      }

      ctx.lineWidth = 1;
      
      // Render
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
           const p1 = points[i][j];
           const p2 = points[i+1][j];
           const p3 = points[i+1][j+1];
           const p4 = points[i][j+1];

           const avgZ = (p1.z + p2.z + p3.z + p4.z) / 4;
           
           ctx.beginPath();
           ctx.moveTo(p1.x, p1.y);
           ctx.lineTo(p2.x, p2.y);
           ctx.lineTo(p3.x, p3.y);
           ctx.lineTo(p4.x, p4.y);
           ctx.closePath();
           
           ctx.fillStyle = colorScale(avgZ);
           ctx.fill();
           
           // Dynamic transparency for stroke
           ctx.strokeStyle = `rgba(0,0,0,${Math.max(0.02, 0.1 - (Math.abs(avgZ)/10))})`;
           ctx.stroke();
        }
      }

      time += 0.03;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]); // Re-bind if pause state changes

  const nextModel = () => {
    setCurrentModelIndex((prev) => (prev + 1) % models.length);
  };

  const prevModel = () => {
    setCurrentModelIndex((prev) => (prev - 1 + models.length) % models.length);
  };

  return (
    <div className="w-full h-full relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm group">
      <canvas ref={canvasRef} className="block w-full h-full" />
      
      {/* Overlay UI */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-between p-6">
        
        {/* Header Badge */}
        <div className="flex justify-between items-start">
          <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 shadow-sm flex items-center gap-2 pointer-events-auto">
            <div className={`w-2 h-2 rounded-full animate-pulse ${modelIndexRef.current % 2 === 0 ? 'bg-red-500' : 'bg-blue-500'}`}></div>
            <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">{model.category}</span>
          </div>
          
          <button 
            onClick={() => setIsPaused(!isPaused)}
            className="bg-white/90 backdrop-blur-md p-2 rounded-full border border-gray-200 shadow-sm hover:bg-gray-100 pointer-events-auto transition-colors"
          >
             {isPaused ? <div className="w-4 h-4 border-l-2 border-r-2 border-gray-600 ml-0.5" /> : <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-gray-600 border-b-[6px] border-b-transparent ml-1" />}
          </button>
        </div>

        {/* Bottom Description Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-xl p-5 border border-gray-200 shadow-lg max-w-lg pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <model.icon className="w-5 h-5 text-[#BB0000]" />
                {model.title}
              </h3>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-mono text-gray-400">{currentModelIndex + 1}/{models.length}</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {model.description}
          </p>
          
          {/* Controls */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-3">
             <button 
                onClick={prevModel}
                className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
             >
               <ChevronLeft className="w-4 h-4" /> Previous
             </button>
             
             <div className="flex gap-1">
               {models.map((_, idx) => (
                 <div 
                   key={idx} 
                   className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentModelIndex ? 'bg-[#BB0000] w-3' : 'bg-gray-300'}`}
                 />
               ))}
             </div>

             <button 
                onClick={nextModel}
                className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-[#BB0000] transition-colors"
             >
               Next <ChevronRight className="w-4 h-4" />
             </button>
          </div>
        </div>
      </div>
      
      {/* Click zones for easy mobile navigation */}
      <div className="absolute top-1/2 left-0 w-16 h-32 -translate-y-1/2 cursor-pointer hover:bg-black/5 transition-colors hidden md:flex items-center justify-center group/left" onClick={prevModel}>
         <ChevronLeft className="w-8 h-8 text-gray-400 group-hover/left:text-gray-800 opacity-0 group-hover/left:opacity-100 transition-opacity" />
      </div>
      <div className="absolute top-1/2 right-0 w-16 h-32 -translate-y-1/2 cursor-pointer hover:bg-black/5 transition-colors hidden md:flex items-center justify-center group/right" onClick={nextModel}>
         <ChevronRight className="w-8 h-8 text-gray-400 group-hover/right:text-gray-800 opacity-0 group-hover/right:opacity-100 transition-opacity" />
      </div>
    </div>
  );
};

export default ModelingShowcase;