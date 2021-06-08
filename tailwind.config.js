module.exports = {
  // Compilador just in time, conforme vou escrevendo as classes dentro dos comps
  // ele gera o css on the fly só com aquilo que utilizei (ainda experimental)
  mode: 'jit',
  // purgecss é responsável por ler os arquivos que coloquei no Array
  // e vai identificar as classes que eu realmente utilizei e vai gerar um arquivo
  // css apenas com essas classes no build de produção
  //Resumo: vai analisar o arquivo index.html e vai pegar a pasta src todos os
  // dirs e arquivos que contenham pelo menos umas das extensões
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
