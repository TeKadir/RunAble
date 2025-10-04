import { Cpu, HardDrive, Monitor, Gauge } from 'lucide-react';
import { Game } from '../types/system';

interface GameCardProps {
  game: Game;
  canRun: boolean;
  userGpuLevel: 'low' | 'medium' | 'high' | 'ultra';
}

export const GameCard = ({ game, canRun, userGpuLevel }: GameCardProps) => {
  const estimatedFps = game.fpsRanges[userGpuLevel];

  const getFpsColor = (fps: string) => {
    const avgFps = parseInt(fps.split('-')[0]);
    if (avgFps >= 100) return 'bg-emerald-500';
    if (avgFps >= 60) return 'bg-blue-500';
    if (avgFps >= 30) return 'bg-amber-500';
    return 'bg-red-500';
  };

  return (
    <div className={`bg-slate-800 rounded-xl overflow-hidden shadow-xl border-2 transition-all hover:scale-105 ${
      canRun ? 'border-slate-600 hover:border-slate-500' : 'border-slate-700 hover:border-slate-600'
    }`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <div className={`${getFpsColor(estimatedFps)} text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg`}>
            <Gauge size={18} />
            {estimatedFps} FPS
          </div>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="bg-slate-900/90 text-white px-3 py-1 rounded-full text-xs font-medium">
            {game.genre}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-3">{game.name}</h3>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Monitor size={16} className="text-emerald-400" />
            <span>GPU: {game.requiredGpuLevel.toUpperCase()}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <HardDrive size={16} className="text-blue-400" />
            <span>RAM: Min {game.minRam} GB</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Cpu size={16} className="text-orange-400" />
            <span>İşlemci: Min {game.minCores} Çekirdek</span>
          </div>
        </div>
      </div>
    </div>
  );
};
