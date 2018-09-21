const logo = require('@gotham/gotham-logo')
const footer = require('@gotham/gotham-footer')

module.exports = () => {
  return `
    ${logo()}
      <h1> Gotham Science Website</h1>
    ${footer()}
  `
}