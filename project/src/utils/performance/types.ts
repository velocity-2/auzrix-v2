export interface ImageConfig {
  width: number;
  quality: number;
}

export interface PerformanceMetrics {
  FCP: string;
  LCP: string;
  TTI: string;
  CLS: string;
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
}