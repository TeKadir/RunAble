import { useEffect, useState } from 'react';
import { Gamepad2, Filter } from 'lucide-react';
import { SystemSpecs } from './types/system';
import { detectSystemSpecs, getGpuLevel } from './services/systemDetector';
import { games } from './data/games';
import { SystemInfo } from './components/SystemInfo';
import { GameCard } from './components/GameCard';

function App() {
  const [systemSpecs, setSystemSpecs] = useState<SystemSpecs | null>(null);
  const [filter, setFilter] = useState<'all' | 'compatible' | 'incompatible'>('all');

  useEffect(() => {
    const specs = detectSystemSpecs();
    setSystemSpecs(specs);
  }, []);

  const canRunGame = (game: any): boolean => {
    if (!systemSpecs) return false;

    const userGpuLevel = getGpuLevel(systemSpecs.gpu);
    const gpuLevels = { low: 1, medium: 2, high: 3, ultra: 4 };

    const hasEnoughGpu = gpuLevels[userGpuLevel] >= gpuLevels[game.requiredGpuLevel];
    const hasEnoughRam = systemSpecs.ram >= game.minRam;
    const hasEnoughCores = systemSpecs.cores >= game.minCores;

    return hasEnoughGpu && hasEnoughRam && hasEnoughCores;
  };

  const userGpuLevel = systemSpecs ? getGpuLevel(systemSpecs.gpu) : 'low';

  const filteredGames = games.filter((game) => {
    if (filter === 'all') return true;
    const compatible = canRunGame(game);
    return filter === 'compatible' ? compatible : !compatible;
  });

  const compatibleCount = games.filter(canRunGame).length;

  if (!systemSpecs) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white text-2xl">Sistem bilgileri alınıyor...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Gamepad2 className="text-emerald-400" size={48} />
            <h1 className="text-5xl font-bold text-white">Oyun Önerici</h1>
          </div>
          <p className="text-slate-300 text-lg">
            Bilgisayarının özelliklerine göre çalıştırabileceğin güncel oyunları keşfet
          </p>
        </header>

        <SystemInfo specs={systemSpecs} />

        <div className="mt-12 bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-1">Oyun Performansı</h3>
              <p className="text-slate-400">
                FPS değerleri sistemine göre tahmin edilmiştir
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Filter className="text-slate-400" size={20} />
              <div className="flex gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-5 py-2 rounded-lg font-semibold transition-all ${
                    filter === 'all'
                      ? 'bg-emerald-500 text-white shadow-lg'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  Tümü ({games.length})
                </button>
                <button
                  onClick={() => setFilter('compatible')}
                  className={`px-5 py-2 rounded-lg font-semibold transition-all ${
                    filter === 'compatible'
                      ? 'bg-emerald-500 text-white shadow-lg'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  Uyumlu ({compatibleCount})
                </button>
                <button
                  onClick={() => setFilter('incompatible')}
                  className={`px-5 py-2 rounded-lg font-semibold transition-all ${
                    filter === 'incompatible'
                      ? 'bg-emerald-500 text-white shadow-lg'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  Uyumsuz ({games.length - compatibleCount})
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              canRun={canRunGame(game)}
              userGpuLevel={userGpuLevel}
            />
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center text-slate-400 mt-12 text-xl">
            Bu filtrede gösterilecek oyun yok
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
