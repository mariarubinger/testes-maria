module.exports = {
  purge: {
    enabled: false,
    content: ['./*html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'grey-1': '#EDE9E8',
        'grey-2': '#7A736F', 
        'grey-3': '#56504C', 
        'white': '#FFFFFF', 
        'coral': '#FF6D65',
        'nude': '#F0EEED',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
