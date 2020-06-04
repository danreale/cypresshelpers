export const danclick = (element: string): void => {
  cy.get(element).click()
}