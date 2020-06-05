export const danclick = (element: string): void => {
  cy.get(element).click()
}
export const haveText = (element: string, text: string) => {
  cy.get(element).should('have.text', text)
}