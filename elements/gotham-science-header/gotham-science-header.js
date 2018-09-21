const gothamLogo = require('@gotham/gotham-logo')

module.exports = () => {
  return `
    <header>
      ${gothamLogo()}
      Gotham Science College
    </header>
  `
}