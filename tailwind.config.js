module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      animation: {
        shimmer: "3s ease-in-out 0s infinite normal none running shimmer" 
      },
      keyframes: {
        shimmer: {
          '0%, 100%': {
            backgroundPosition: '-500px 0'
          },
          '100%': {
            backgroundPosition: '500px 0'
          }
        }
      },
      fontFamily: {
        sans: 'Roboto , sans-serif'
      },
      colors: {
        "ignite": { // Ignite colors
            'primary': "#9F3EA3",
            'primary-light': "#EC8FF2",
            'primary-dark': "#942FA3",
            'secondary': "#F0CD5D",
            'warning': "#fba94c",
            'red-error': "#f75a68",
            'gray-1': "#09090A",
            'gray-2': '#121214',
            'gray-3': '#121214',
            'gray-4': '#323238',
            'gray-5': '#c3c3cc',
            'gray-6': '#8d8d99',
            'gray-7': '#29292e',
            'white': '#ffffff',
        },
      }
    },
  },
  plugins: [],
}
