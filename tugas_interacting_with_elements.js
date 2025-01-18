/// <reference types="cypress" />
describe('Browser action', () => {

    it('Should load website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 });
        cy.url().should('include', 'login.html');
    });
    

    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
        cy.get('#user_login').should('have.value', 'username');
    });

    it('Should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
        cy.get('input[name="user_password"]').should('have.value', 'password');
    });

    it('Should check "Keep me signed in" checkbox', () => {
        // Mencentang checkbox "Keep me signed in"
        cy.get('input[name="user_remember_me"]').check();
    });

    it('Should the login form', () => {
        cy.get('input[name="submit"]').click();  // Klik tombol submit setelah mengisi form
    });

    it('Should click on Account Summary', () => {
        cy.get('#account_summary_tab').click();
        cy.url().should('include', 'account-summary.html');
        // Memastikan "Cash Accounts" muncul
        cy.get('h2.board-header').first().should('have.text', 'Cash Accounts');
    });

    it('Should click on Account Activity', () => {
        cy.get('#account_activity_tab').click();
        cy.url().should('include', 'account-activity.html');
        cy.get('h2').should('have.text', 'Show Transactions');
    });

    it('Should click on Transfer Funds', () => {
        cy.get('#transfer_funds_tab').click();
        cy.url().should('include', 'transfer-funds.html');
        cy.get('h2').should('have.text', 'Transfer Money & Make Payments');
    });

    it('Should click on Pay Bills', () => {
        cy.get('#pay_bills_tab').click();
        cy.url().should('include', 'pay-bills.html');
        cy.get('h2').should('have.text', 'Make payments to your saved payees');
    });

    it('Should click on Money Map', () => {
        cy.get('#money_map_tab').click();
        cy.url().should('include', 'money-map.html');
        cy.get('tspan').should('have.text', 'OutFlow Chart');
    });

    it('Should click on Online Statements', () => {
        cy.get('#online_statements_tab').click();
        cy.url().should('include', 'online-statements.html');
        cy.get('h2').should('have.text', 'Statements & Documents');
    });
});


