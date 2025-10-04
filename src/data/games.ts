import { Game } from '../types/system';

export const games: Game[] = [
  {
    id: '1',
    name: 'Cyberpunk 2077',
    image: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=800',
    minRam: 12,
    minCores: 6,
    requiredGpuLevel: 'high',
    year: 2023,
    genre: 'RPG',
    fpsRanges: {
      low: '20-30',
      medium: '35-50',
      high: '60-80',
      ultra: '90-120'
    }
  },
  {
    id: '2',
    name: 'Red Dead Redemption 2',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
    minRam: 12,
    minCores: 4,
    requiredGpuLevel: 'high',
    year: 2024,
    genre: 'Aksiyon',
    fpsRanges: {
      low: '25-35',
      medium: '40-55',
      high: '60-75',
      ultra: '80-100'
    }
  },
  {
    id: '3',
    name: "Baldur's Gate 3",
    image: 'https://images.pexels.com/photos/9072320/pexels-photo-9072320.jpeg?auto=compress&cs=tinysrgb&w=800',
    minRam: 16,
    minCores: 6,
    requiredGpuLevel: 'high',
    year: 2024,
    genre: 'RPG',
    fpsRanges: {
      low: '25-35',
      medium: '40-55',
      high: '65-85',
      ultra: '90-120'
    }
  },
  {
    id: '4',
    name: 'Counter-Strike 2',
    image: 'https://images.pexels.com/photos/7915360/pexels-photo-7915360.jpeg?auto=compress&cs=tinysrgb&w=800',
    minRam: 8,
    minCores: 4,
    requiredGpuLevel: 'medium',
    year: 2024,
    genre: 'FPS',
    fpsRanges: {
      low: '60-90',
      medium: '100-144',
      high: '200-300',
      ultra: '300-400'
    }
  },
  {
    id: '5',
    name: 'Fortnite',
    image: 'https://images.pexels.com/photos/7862333/pexels-photo-7862333.jpeg?auto=compress&cs=tinysrgb&w=800',
    minRam: 8,
    minCores: 4,
    requiredGpuLevel: 'medium',
    year: 2024,
    genre: 'Battle Royale',
    fpsRanges: {
      low: '60-80',
      medium: '90-120',
      high: '144-200',
      ultra: '240-360'
    }
  },
  {
    id: '6',
    name: 'Minecraft',
    image: 'https://images.pexels.com/photos/7862603/pexels-photo-7862603.jpeg?auto=compress&cs=tinysrgb&w=800',
    minRam: 4,
    minCores: 2,
    requiredGpuLevel: 'low',
    year: 2024,
    genre: 'Sandbox',
    fpsRanges: {
      low: '60-90',
      medium: '100-150',
      high: '200-300',
      ultra: '400-600'
    }
  },
  {
    id: '7',
    name: 'Valorant',
    image: 'https://images.pexels.com/photos/7862407/pexels-photo-7862407.jpeg?auto=compress&cs=tinysrgb&w=800',
    minRam: 4,
    minCores: 4,
    requiredGpuLevel: 'low',
    year: 2024,
    genre: 'FPS',
    fpsRanges: {
      low: '100-144',
      medium: '144-200',
      high: '240-360',
      ultra: '400-500'
    }
  },
  {
    id: '8',
    name: 'Starfield',
    image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800',
    minRam: 16,
    minCores: 6,
    requiredGpuLevel: 'high',
    year: 2024,
    genre: 'RPG',
    fpsRanges: {
      low: '20-30',
      medium: '35-45',
      high: '55-70',
      ultra: '75-90'
    }
  },
  {
    id: '9',
    name: 'The Last of Us Part I',
    image: 'https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=800',
    minRam: 16,
    minCores: 6,
    requiredGpuLevel: 'ultra',
    year: 2024,
    genre: 'Aksiyon',
    fpsRanges: {
      low: '15-25',
      medium: '30-40',
      high: '50-65',
      ultra: '70-90'
    }
  },
  {
    id: '10',
    name: 'Elden Ring',
    image: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=800',
    minRam: 12,
    minCores: 4,
    requiredGpuLevel: 'high',
    year: 2024,
    genre: 'RPG',
    fpsRanges: {
      low: '30-40',
      medium: '45-55',
      high: '60-75',
      ultra: '80-100'
    }
  },
  {
    id: '11',
    name: 'League of Legends',
    image: 'https://images.pexels.com/photos/7915232/pexels-photo-7915232.jpeg?auto=compress&cs=tinysrgb&w=800',
    minRam: 4,
    minCores: 2,
    requiredGpuLevel: 'low',
    year: 2024,
    genre: 'MOBA',
    fpsRanges: {
      low: '100-144',
      medium: '144-200',
      high: '240-300',
      ultra: '350-500'
    }
  },
  {
    id: '12',
    name: 'Hogwarts Legacy',
    image: 'https://images.pexels.com/photos/8111831/pexels-photo-8111831.jpeg?auto=compress&cs=tinysrgb&w=800',
    minRam: 16,
    minCores: 6,
    requiredGpuLevel: 'high',
    year: 2024,
    genre: 'RPG',
    fpsRanges: {
      low: '25-35',
      medium: '40-50',
      high: '60-80',
      ultra: '85-110'
    }
  }
];
