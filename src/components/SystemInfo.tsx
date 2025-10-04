import { Cpu, HardDrive, Monitor } from 'lucide-react';
import { SystemSpecs } from '../types/system';

interface SystemInfoProps {
  specs: SystemSpecs;
}

export const SystemInfo = ({ specs }: SystemInfoProps) => {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-700">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
        <Monitor className="text-emerald-400" size={32} />
        Sistem Özelliklerin
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-950/50 rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-emerald-500/20 p-3 rounded-lg">
              <Monitor className="text-emerald-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white">Ekran Kartı</h3>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">{specs.gpu}</p>
        </div>

        <div className="bg-slate-950/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/20 p-3 rounded-lg">
              <HardDrive className="text-blue-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white">RAM</h3>
          </div>
          <p className="text-slate-300 text-2xl font-bold">{specs.ram} GB</p>
        </div>

        <div className="bg-slate-950/50 rounded-xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-500/20 p-3 rounded-lg">
              <Cpu className="text-orange-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white">İşlemci</h3>
          </div>
          <p className="text-slate-300 text-2xl font-bold">{specs.cores} Çekirdek</p>
        </div>
      </div>
    </div>
  );
};
