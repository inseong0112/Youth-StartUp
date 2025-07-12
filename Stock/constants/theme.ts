export const theme = {
  colors: {
    // Primary colors
    primary: '#6366F1',
    primaryDark: '#4F46E5',
    primaryLight: '#8B5CF6',
    
    // Secondary colors
    secondary: '#10B981',
    secondaryDark: '#059669',
    
    // Background colors
    background: '#F8FAFC',
    surface: '#FFFFFF',
    surfaceSecondary: '#F1F5F9',
    
    // Text colors
    text: '#1E293B',
    textSecondary: '#64748B',
    textLight: '#94A3B8',
    
    // Status colors
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
    
    // Market colors
    gain: '#10B981',
    loss: '#EF4444',
    
    // Border colors
    border: '#E2E8F0',
    borderLight: '#F1F5F9',
    
    // Shadow colors
    shadow: '#00000010',
  },
  
  fonts: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
    
    sizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
    },
  },
  
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
  },
  
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 24,
    full: 999,
  },
  
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 8,
    },
  },
};

export const INITIAL_CASH = 1000000; // 초기 자금 100만원
export const TRANSACTION_FEE = 0.001; // 거래 수수료 0.1%

export const MARKET_HOURS = {
  OPEN: 9,
  CLOSE: 15,
  LUNCH_START: 12,
  LUNCH_END: 13,
};

export const LEVELS = [
  { level: 1, expRequired: 0, title: '투자 새싹' },
  { level: 2, expRequired: 100, title: '투자 입문자' },
  { level: 3, expRequired: 300, title: '투자 학습자' },
  { level: 4, expRequired: 600, title: '투자 탐험가' },
  { level: 5, expRequired: 1000, title: '투자 전문가' },
];

export const MISSION_TYPES = {
  TRADE: 'TRADE',
  LEARN: 'LEARN',
  COMMUNITY: 'COMMUNITY',
} as const;