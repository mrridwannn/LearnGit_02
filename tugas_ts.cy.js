describe('My First Test', () => {
    it('clicking "type" shows the right headings', () => {
      // Kunjungi URL Cypress Example
      cy.visit('https://example.cypress.io');
  
      // Pause untuk debugging
      cy.pause();
  
      // Klik elemen yang memiliki teks "type"
      cy.contains('type').click();
  
      // Pastikan URL baru mencakup '/commands/actions'
      cy.url().should('include', '/commands/actions');
  
      // Dapatkan input dengan class '.action-email', ketik email, dan verifikasi nilainya
      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com');
    });
  });