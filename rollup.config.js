import buble from 'rollup-plugin-buble'

export default {
  input: 'src/main.js',
  name: 'ringingtones',
  output: {
    file: 'docs/dist.js',
    format: 'umd'
  },
  plugins: [buble()]
}
