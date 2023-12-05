/* eslint-disable no-undef */
describe('Product Detail Page Test', () => {
  it('Should navigate to product detail page from home', () => {
    cy.visit('/');

    cy.contains('View product').click();

    cy.contains('Shop Now').should('be.visible');

  });
});
