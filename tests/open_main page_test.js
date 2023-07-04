/* eslint-disable no-undef */
Feature('open main page')

Scenario('Main page', ({ I }) => {
  I.amOnPage('http://localhost:3000/')
  I.waitForElement('#add_new_item_form')
  I.seeElement('#add_new_item_form')
  I.waitForElement('.MuiDataGrid-root')
  I.seeElement('.MuiDataGrid-main')
  I.seeElement('.MuiDataGrid-row')
  I.fillField('#title', 'Test Name')
  I.fillField('#year', '1987')
  I.selectOption('genre', 'Arcade')
  I.fillField('#raiting', '10')
  I.fillField('#developer', 'Test Value')
  I.fillField('#publisher', 'Test Value1, Test Value 2')
  I.click('button[type="submit"]')
  I.wait(1)
  pause()
})
