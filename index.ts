declare var cy: any
declare var Cypress: any
declare var expect: any
export const uploadTextFile = (fileName: string, element: string): void => {
  cy.uploadTextFile(fileName, element)
}
export const uploadTextFile2 = (fileName: string, selector: string): void => {
  return cy.get(selector).then((subject: any) => {
    return cy
      .fixture(fileName, 'base64', { timeout: 60000 })
      .then(Cypress.Blob.base64StringToBlob)
      .then((blob: any) => {
        const el = subject[0]
        const testFile = new File([blob], fileName) // eslint-disable-line no-undef
        const dataTransfer = new DataTransfer() // eslint-disable-line no-undef
        dataTransfer.items.add(testFile)
        el.files = dataTransfer.files
        // return subject; //removed for chrome 73
        return cy.wrap(subject).trigger('change', { force: true }) // updated for chrome 73
      })
  })
}
Cypress.Commands.add('uploadTextFile', (fileName: string, selector: string) => {
  return cy.get(selector).then((subject: any) => {
    return cy
      .fixture(fileName, 'base64', { timeout: 60000 })
      .then(Cypress.Blob.base64StringToBlob)
      .then((blob: any) => {
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
