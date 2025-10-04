export interface SystemSpecs {
  gpu: string;
  gpuVendor: string;
  ram: number;
  cores: number;
  platform: string;
  renderer: string;
}

export interface Game {
  id: string;
  name: string;
  image: string;
  minRam: number;
  minCores: number;
  requiredGpuLevel: 'low' | 'medium' | 'high' | 'ultra';
  year: number;
  genre: string;
  fpsRanges: {
    low: string;
    medium: string;
    high: string;
    ultra: string;
  };
}
