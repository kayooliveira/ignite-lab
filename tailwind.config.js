module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto , sans-serif'
      },
      colors: {
        "ignite": { // Ignite colors
            'green-dark': "#015f43",
            'green-light': "#00b37e",
            'green': "#00875f",
            'blue': "#81d8f7",
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
