import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const config = [
  ...nextVitals,
  ...nextTypescript,
  { ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'] },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off',
      'jsx-a11y/alt-text': 'off',
    },
  },
  {
    files: ['src/components/portfolio/**/*.{ts,tsx}', 'src/content/portfolio.ts', 'src/lib/blackjack.ts', 'src/app/api/visitors/route.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@next/next/no-img-element': 'warn',
      'jsx-a11y/alt-text': 'error',
    },
  },
];

export default config;
