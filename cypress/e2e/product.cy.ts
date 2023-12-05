/* eslint-disable no-undef */
describe('Product Detail Page Test', () => {
  it('Should navigate to product detail page from home', () => {
    cy.visit('/');

    cy.contains('See more').click();

    cy.url().should('include', '/products');

    cy.contains('Shop Now').should('be.visible');

  });
});
