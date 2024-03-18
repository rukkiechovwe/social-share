const config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: 'rgb(20, 23, 26)', //  text color twitter
          2: 'rgb(10, 102, 194)', //  text color linkedin
          3: 'rgb(7, 94, 84)', //  text color whatsapp
          4: 'rgb(189, 8, 28)', //  text color pinterest
        },

        secondary: {
          1: 'rgb(243, 244, 246)', //  bg color twitter
          2: 'rgb(224, 242, 254)', //  bg color linkedin
          3: 'rgb(220, 252, 231)', //  bg color whatsapp
          4: 'rgb(254, 226, 226)', //  bg color pinterest
        },
        white: '#FFFFFF',
        transparent: 'transparent',
      },
    },

    backgroundImage: {
      gradient1: 'url(/images/background/1.png)',
      gradient2: 'url(/images/background/2.png)',
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
};
export default config;
