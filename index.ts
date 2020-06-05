declare var cy: any
declare var Cypress: any
declare var expect: any

export const uploadTextFile = (fileName: string, element: string): void => {
  cy.uploadTextFile(fileName, element)
}
Cypress.Commands.add('uploadTextFile', (fileName: string, selector: string): void => {
  return cy.get(selector).then((subject: any): void => {
    return cy
      .fixture(fileName, 'base64', { timeout: 60000 })
      .then(Cypress.Blob.base64StringToBlob)
      .then((blob: any): void => {
        const el = subject[0]
        const testFile = new File([blob], fileName) // eslint-disable-line no-undef
        const dataTransfer = new DataTransfer() // eslint-disable-line no-undef
        dataTransfer.items.add(testFile)
        el.files = dataTransfer.files
        // return subject; //removed for chrome 73
        return cy.wrap(subject).trigger('change', { force: true }) // updated for chrome 73
      })
  })
})
export const setCookie = (cookie: string, value: string): void => {
  cy.setCookie(cookie, value)
}
export const persistLocalStorage = (): void => {
  cy.persistLocalStorage()
}
Cypress.Commands.add('persistLocalStorage', (): void => {
  const clear = Cypress.LocalStorage.clear
  Cypress.LocalStorage.clear = function (keys: any, ls: any, rs: any) {
    // do something with the keys here
    if (keys) {
      cy.log(keys)
      return clear.apply(this, arguments)
    }
  }
})
export const get = (element: string): void => {
  cy.get(element)
}
export const navigateToURL = (url: string): void => {
  cy.visit(url)
}
export const navigateToURLWithTimeout = (url: string, timeout: number): void => {
  cy.visit(url,  { timeout })
}
export const click = (element: string): void => {
  cy.get(element).click()
}
export const clickForce = (element: string): void => {
  cy.get(element).click({ force: true })
}
export const containClick = (text: string): void => {
  cy.contains(text).click({ force: true })
}
export const clickPosition = (element: string, position: string): void => {
  cy.get(element).click(position)
}
export const forceClickPosition = (element: string, position: string): void => {
  cy.get(element).click(position, { force: true })
}
export const clickCoordinates = (element: string, x: number, y: number): void => {
  cy.get(element).click(x, y)
}
export const elementHasExactText = (element: string, text: string): void => {
  cy.get(element).should('have.text', text)
}
export const elementDoesNotHaveExactText = (element: string, text: string): void => {
  cy.get(element).should('not.have.text', text)
}
export const waitForElementToHaveExactText = (element: string, text: string, timeout: number): void => {
  cy.get(element, { timeout }).should('have.text', text)
}
export const waitForElementToContainText = (element: string, text: string, timeout: number): void => {
  cy.get(element, { timeout }).should('contain', text)
}
export const waitForElementToNotContainText = (element: string, text: string, timeout: number): void => {
  cy.get(element, { timeout }).should('not.contain', text)
}
export const elementExists = (element: string): void => {
  cy.get(element).should('exist')
}
export const elementNotExists = (element: string): void => {
  cy.get(element).should('not.exist')
}
export const elementVisible = (element: string): void => {
  cy.get(element).should('be.visible')
}
export const elementVisibleClick = (element:string): void => {
  cy.get(element).should('be.visible').click()
}
export const elementNotVisible = (element: string): void => {
  cy.get(element).should('not.be.visible')
}
export const elementVisibleContainsText = (element: string, text: string): void => {
  cy.get(element).should('be.visible').should('contain', text)
}
export const elementExistsWithTimeout = (element: string, timeout: number): void => {
  let time
  // If we don't pass in a time, set timeout to 60 sec.
  if (timeout === undefined) {
    time = 60000
  } else { // If we do pass in a time, then set timeout to that time.
    time = timeout
  }
  cy.get(element, { timeout: time }).should('exist')
}
export const elementNotExistsWithTimeout = (element: string, timeout: number): void => {
  let time
  // If we don't pass in a time, set timeout to 60 sec.
  if (timeout === undefined) {
    time = 60000
  } else { // If we do pass in a time, then set timeout to that time.
    time = timeout
  }
  cy.get(element, { timeout: time }).should('not.exist')
}
export const elementVisibleWithTimeout = (element: string, timeout: number): void => {
  let time
  if (timeout === undefined) {
    time = 60000
  } else {
    time = timeout
  }
  cy.get(element, { timeout: time }).should('be.visible')
}
export const elementNotVisibleWithTimeout = (element: string, timeout: number): void => {
  let time
  if (timeout === undefined) {
    time = 60000
  } else {
    time = timeout
  }
  cy.get(element, { timeout: time }).should('not.be.visible')
}
export const elementNotNull = (element: string): void => {
  cy.get(element).should('not.be.null')
}
export const elementNotUndefined = (element: string): void => {
  cy.get(element).should('not.be.undefined')
}
export const elementHasAttribute = (element: string, attribute: string, value: string): void => {
  cy.get(element).should('have.attr', attribute, value)
}
export const elementNotHaveAttribute = (element: string, attribute: string): void => {
  cy.get(element).should('not.have.attr', attribute)
}
export const elementHasClass = (element: string, classValue: string): void => {
  cy.get(element).should('have.class', classValue)
}
export const elementNotHaveClass = (element: string, classValue: string): void => {
  cy.get(element).should('not.have.class', classValue)
}
export const elementContainClass = (element: string, classValue: string): void => {
  cy.get(element).should('contain.class', classValue)
}
export const elementNotContainClass = (element: string, classValue: string): void => {
  cy.get(element).should('not.contain.class', classValue)
}
export const urlIncludes = (text: string): void => {
  cy.url().should('include', text)
}
export const urlNotIncludes = (text: string): void => {
  cy.url().should('not.include', text)
}
export const elementContainsText = (element: string, text: string): void => {
  cy.get(element).should('contain', text)
}
export const elementNotContains = (element: string, text: string): void => {
  cy.get(element).should('not.contain', text)
}
export const sleep = (milliseconds: number): void => {
  cy.wait(milliseconds)
}
export const elementShouldContainClick = (element: string, text: string): void => {
  cy.get(element).should('contain', text).click()
}
export const rowIsChecked = (element: string, row: number): void => {
  cy.get(element).eq(row).should('be.checked')
}
export const rowIsNotChecked = (element: string, row: number): void => {
  cy.get(element).eq(row).should('not.be.checked')
}
export const elementIsChecked = (element: string): void => {
  cy.get(element).should('be.checked')
}
export const elementIsNotChecked = (element: string): void => {
  cy.get(element).should('not.be.checked')
}
// Check a checkbox or radio button even if it is not visible or hidden.
export const checkElement = (element: string): void => {
  cy.get(element).check({ force: true })
}
export const uncheckElement = (element: string): void => {
  cy.get(element).uncheck({ force: true })
}
// Confirm that a page contains specific text.
export const pageContains = (text: string): void => {
  cy.contains(text)
}
// Confirm that a page does not contain specific text.
export const pageNotContains = (text: string): void => {
  cy.get('body').should('not.contain', text)
}
// Clear the value from a field or textbox.
export const clearElement = (element: string): void => {
  cy.get(element).clear()
}
// Select a dropdown and confirm that a specific value exists there.
export const selectDropdownOption = (element: string, option: string, value: string): void => {
  cy.get(element).select(option).should('have.value', value)
}
export const selectListOption = (element: string, option: string): void => {
  cy.get(element).select(option)
}
export const clickDropdown = (element: string): void => {
  cy.get(element).should('be.visible').click()
}
export const typeInDropdown = (element: string, text: string): void => {
  cy.get(element).type(text)
}
export const dropdownContainsClick = (element: string, text: string): void => {
  cy.get(element).contains(text).click({ force: true })
}
export const log = (val: any): void => {
  cy.log(val)
}
// Take a screenshot of the current view.
export const takeScreenshotViewPort = (screenshotName: string): void => {
  cy.screenshot(screenshotName, { capture: 'viewport' })
}
// Take a screenshot of the whole page, from top to bottom.
export const takeScreenshotFullPage = (screenshotName: string): void => {
  cy.screenshot(screenshotName, { capture: 'fullPage' })
}
// Take a screenshot of the current view, and include the Cypress Command log.
export const takeScreenshotRunner = (screenshotName: string): void => {
  cy.screenshot(screenshotName, { capture: 'runner' })
}
// this function is used in every test in the afterEach hook.
// What this does is stop the cypress runner when a test fails.
// Once a test fails, it doesnt continue to run tests that have not been run yet.
export const stopRun = (): void => {
  Cypress.runner.stop()
}
// Passing in an element and confirming that it is disabled.
export const elementDisabled = (element: string): void => {
  cy.get(element).should('be.disabled')
}
// Passing in an element and confirming that it is enabled.
export const elementEnabled = (element: string): void => {
  cy.get(element).should('be.enabled')
}
// Passing in an element and forcing it to be checked (or selected in case of radio buttons). Then confirming it is checked.
export const selectRadioElement = (element: string): void => {
  cy.get(element).check({ force: true })
  cy.get(element).should('be.checked')
}
export const enterTextWithClear = (element: string, text: string, delay: number = 50): void => {
  cy.get(element).clear().type(text, { delay })
}
export const enterTextBlur = (element: string, text: string, delay: number = 50): void => {
  cy.get(element).clear().type(text, { delay }).focus().blur()
}
export const enterTextBlurNoClear = (element: string, text: string, delay: number = 50): void => {
  cy.get(element).type(text, { delay }).focus().blur()
}
export const enterTextConfirm = (element: string, text: string, delay: number = 50): void => {
  cy.get(element).clear().type(text, { delay }).should('have.value', text)
}
export const enterText = (el: string, text: string, delay: number = 50): void => {
  cy.get(el).type(text, { delay })
}
export const enterTextDropdown = (element: string, row: number, text: string): void => {
  cy.get(element).eq(row).type(text, { delay: 50 }).focus().blur()
}
export const enterTextWithClearHitEnterButton = (el: string, text: string, delay: number = 50): void => {
  cy.get(el).clear().type(text, { delay }).type('{enter}')
}
export const backspace = (element: string): void => {
  cy.get(element).type('{backspace}')
}
export const focusElement = (element: string): void => {
  cy.get(element).focus()
}
// api
export const server = (): void => {
  cy.server()
}
export const route = (endpoint: string, alias: string): void => {
  cy.route(endpoint).as(alias)
}
export const waitForApiCall = (alias: string): void => {
  cy.wait(alias)
}
export const waitForApiCallStatus = (alias: string, status: number): void => {
  cy.wait(alias).its('status').should('eq', status)
}
export const waitForApiCallV2 = (alias: string, reqTimeout: number): void => {
  cy.wait(alias, { requestTimeout: reqTimeout })
}
export const waitForApiCallV3 = (alias: string, reqTimeout: number, resTimeout: number): void => {
  cy.wait(alias, { requestTimeout: reqTimeout, responseTimeout: resTimeout })
}
export const scrollIntoView = (element: string): void => {
  cy.get(element).scrollIntoView().should('be.visible')
}
export const scrollIntoViewContains = (element: string, text: string): void => {
  cy.get(element).scrollIntoView().should('be.visible').should('contain', text)
}
export const scroll500 = (): void => {
  cy.scrollTo(0, 500)
}
export const scrollToTop = (): void => {
  cy.scrollTo('top')
}
export const scrollToGeneric = (position: string): void => {
  cy.scrollTo(position)
}
export const scrollGeneric = (element: string, direction: string): void => {
  cy.get(element).scrollTo(direction)
}
export const refreshPage = (): void => {
  cy.reload(true)
}
export const refreshPageNormal = (): void => {
  cy.reload()
}
export const goBack = (): void => {
  cy.go('back')
}
export const goForward = (): void => {
  cy.go('forward')
}

export const checkLoadTime = (time: number = 5): void => {
  cy.window().then((win: any): void => {
    // let time = (win.performance.timing.loadEventEnd - win.performance.timing.navigationStart) / 1000;
    const loadtime: any = (win.performance.timing.domContentLoadedEventEnd - win.performance.timing.navigationStart) / 1000
    cy.log(loadtime)
    // verify the load is less than 2 seconds
    expect(loadtime).to.be.lessThan(time)
  })
}
export const createFile = (file: string, text: string): void => {
  cy.writeFile(file, text)
}
export const appendToFile = (file: string, text: string): void => {
  cy.writeFile(file, '\n', { flag: 'a+' })
  cy.writeFile(file, text, { flag: 'a+' })
}
export const getElementTextValue = (element: string, inputValue: string): void => {
  cy.get(element).invoke('text')
    .then((value: any) => {
      cy.log(value)
      expect(value).to.eql(inputValue)
    })
}
export const getElementInputValue = (element: string, inputValue: string): void => {
  cy.get(element).invoke('val')
    .then((value: any): void => {
      cy.log(value)
      expect(value).to.eql(inputValue)
    })
}
export const getElementTextValueContains = (element: string, inputValue: string): void => {
  cy.get(element).invoke('text')
    .then((value: any) => {
      cy.log(value)
      expect(value).to.include(inputValue)
    })
}
export const getElementInputValueContains = (element: string, inputValue: string): void => {
  cy.get(element).invoke('val')
    .then((value: any): void => {
      cy.log(value)
      expect(value).to.include(inputValue)
    })
}
export const elementInputValueBlank = (element: string): void => {
  cy.get(element).invoke('val')
    .then((value: any): void => {
      cy.log(value)
      expect(value).to.eql('')
    })
}
export const elementContainsTextV2 = (element: string, text: string): void => {
  cy.get(element).contains(text)
}
export const hoverElement = (element: string): void => {
  cy.get(element).trigger('mouseenter')
}
export const removehoverElement = (element: string): void => {
  cy.get(element).trigger('mouseleave')
}
export const elementHasLength = (element: string, length: number): void => {
  cy.get(element).should('have.length', length)
}
export const elementHasLengthGte = (element: string, length: number): void => {
  cy.get(element).should('have.length.gte', length)
}
export const tablehHasLengthGte = (table: string, length: number): void => {
  cy.get(table).find('tr').its('length').should('be.gte', length)
}
export const rowContains = (element: string, row: number, text: string): void => {
  cy.get(element).should('exist')
  cy.get(element).eq(row).should('contain', text)
}
export const rowNotContains = (element: string, row: number, text: string): void => {
  cy.get(element).should('exist')
  cy.get(element).eq(row).should('not.contain', text)
}
export const cellNotNullUndefined = (element: string, row: number): void => {
  cy.get(element).should('exist')
  cy.get(element).eq(row).should('not.be.null')
  cy.get(element).eq(row).should('not.be.undefined')
}
export const rowContainClass = (element: string, row: number, classValue: string): void => {
  cy.get(element).should('exist')
  cy.get(element).eq(row).should('contain.class', classValue)
}
export const rowHasClass = (element: string, row: number, classValue: string): void => {
  cy.get(element).should('exist')
  cy.get(element).eq(row).should('have.class', classValue)
}
export const rowHasAttribute = (element: string, row: number, attribute: string, value: string): void => {
  cy.get(element).should('exist')
  cy.get(element).eq(row).should('have.attr', attribute, value)
}
export const clickRow = (element: string, row: number): void => {
  cy.get(element).eq(row).click({ force: true })
}
export const clickRowDirection = (element: string, row: number, direction: string): void => {
  cy.get(element).eq(row).click(direction)
}
export const paginationLength = (element: string, length: number): void => {
  cy.get(element).should('have.length.lte', length)
}
export const clickLastRow = (element: string): void => {
  cy.get(element).last().click()
}
export const clickFirstRow = (element: string): void => {
  cy.get(element).first().click()
}
export const lastRowContains = (element: string, text: string): void => {
  cy.get(element).should('exist')
  cy.get(element).last().should('contain', text)
}
export const lastRowNotContains = (element: string, text: string): void => {
  cy.get(element).should('exist')
  cy.get(element).last().should('not.contain', text)
}
export const firstRowContains = (element: string, text: string): void => {
  cy.get(element).should('exist')
  cy.get(element).first().should('contain', text)
}
export const firstRowNotContains = (element: string, text: string): void => {
  cy.get(element).should('exist')
  cy.get(element).first().should('not.contain', text)
}
export const waitForElementEnabled = (element: string, timeout: number): void => {
  cy.get(element, { timeout }).should('be.enabled')
}
export const waitForElementVisible = (element: string, timeout: number): void => {
  cy.get(element, { timeout }).should('be.visible')
}
export const getDropdownIndex = (array: string[], option: string): number => {
  const index = array.indexOf(option);
  return index + 1
}
export const getFileName = (fileType: string): string => {
  const currdate = Cypress.moment().format('YYYYMMDD')
  return `${fileType}_${currdate}`
}
export const checkColor = (element: string, r: any, g: any, b: any): void => {
  cy.get(element).should('have.css', 'color').and('equal', `rgb(${r}, ${g}, ${b})`)
}

export const spinnerVisible = (spinnerElement: string): void => {
  elementVisibleWithTimeout(spinnerElement, 60000)
}
export const spinnerNotVisible = (spinnerElement: string): void => {
  elementNotVisibleWithTimeout(spinnerElement, 60000)
}
export const spinnerExists = (spinnerElement: string): void => {
  elementExistsWithTimeout(spinnerElement, 60000)
}
export const spinnerNotExists = (spinnerElement: string): void => {
  elementNotExistsWithTimeout(spinnerElement, 60000)
}
export const verifySpinnerAppearsAndDissappears = (spinnerElement: string): void => {
  spinnerExists(spinnerElement)
  spinnerVisible(spinnerElement)
  spinnerNotExists(spinnerElement)
  spinnerNotVisible(spinnerElement)
}
export const verifySpinnerExists = (spinnerElement: string): void => {
  spinnerExists(spinnerElement)
  spinnerVisible(spinnerElement)
}
export const verifySpinnerNotExists = (spinnerElement: string): void => {
  spinnerNotExists(spinnerElement)
  spinnerNotVisible(spinnerElement)
}
export const changeTargetToSelf = (element: string): void => {
  cy.get(element).invoke('removeAttr', 'target')
}
export const changeTargetToSelfWithAssert = (element: string): void => {
  cy.get(element).invoke('attr', 'target', '_self').should('have.attr', 'target', '_self')
}
export const highlight = (element: string, borderPx: number = 2, color: string = 'red', borderStyle: string = 'dashed'): void => {
  cy.get(element).invoke('attr', 'style', `border: ${borderPx}px solid ${color}; border-style: ${borderStyle};`)
}
export const stopRunner = (test: any): void => {
  if (test.state === 'failed') {
    Cypress.runner.stop()
  }
}
export const elementByIdFocused = (elementId: string): void => {
  cy.focused().should('have.attr', 'id', elementId)
}
export const elementByNameFocused = (elementName: string): void => {
  cy.focused().should('have.attr', 'name', elementName)
}
export const getCurrentYear = (): void => {
  const year = Cypress.moment().format('YYYY')
  return year
}
export const getTodaysDate = (): void => {
  const todaysDate = Cypress.moment().format('MM/DD/YYYY')
  return todaysDate
}
export const runNpmScript = (script: string, timeout: number, status: number = 0): void => {
  cy.exec(`npm run ${script}`, { timeout }).its('code').should('eq', status)
}
export const startWatchForConsoleErrors = (): void => {
  cy.window().then((win: any): void => {
    cy.spy(win.console, 'error')
    cy.spy(win.console, 'warn')
  })
}
export const checkConsoleErrors = (): void => {
  cy.window().then((win: any): void => {
    expect(win.console.error).to.have.callCount(0)
    expect(win.console.warn).to.have.callCount(0)
  })
}
