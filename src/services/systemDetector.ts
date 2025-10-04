import { SystemSpecs } from '../types/system';

export const detectSystemSpecs = (): SystemSpecs => {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  let gpu = 'Bilinmiyor';
  let renderer = 'Bilinmiyor';
  let gpuVendor = 'Bilinmiyor';

  if (gl) {
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      gpuVendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
      gpu = renderer;
    }
  }

  const ram = (navigator as any).deviceMemory || 8;
  const cores = navigator.hardwareConcurrency || 4;
  const platform = navigator.platform;

  return {
    gpu,
    gpuVendor,
    ram,
    cores,
    platform,
    renderer
  };
};

export const getGpuLevel = (gpu: string): 'low' | 'medium' | 'high' | 'ultra' => {
  const gpuLower = gpu.toLowerCase();

  if (gpuLower.includes('rtx 40') || gpuLower.includes('rx 7900') || gpuLower.includes('rtx 3090')) {
    return 'ultra';
  }

  if (gpuLower.includes('rtx 30') || gpuLower.includes('rtx 20') ||
      gpuLower.includes('rx 6') || gpuLower.includes('rx 7')) {
    return 'high';
  }

  if (gpuLower.includes('gtx 16') || gpuLower.includes('gtx 10') ||
      gpuLower.includes('rx 5') || gpuLower.includes('vega')) {
    return 'medium';
  }

  return 'low';
};
