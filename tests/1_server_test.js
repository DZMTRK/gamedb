Feature('test server')

Scenario('Data availability', ({ I }) => {
  I.amOnPage('http://localhost:3002/game/')
})
