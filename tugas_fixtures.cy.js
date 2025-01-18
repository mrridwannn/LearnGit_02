/// <reference types="cypress" />
describe('Browser action', () => {

    it('Should load website', () => {
        cy.visit('https://www.saucedemo.com/', { timeout: 10000 });
        cy.url().should('include', 'saucedemo.com');
    });
    

    it('Should try to login', () => {
        cy.fixture("user").then(user =>{
            const username = user.username
            const password = user.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            cy.get('#user-name').should('have.value', username);
        
            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)
            cy.get('input[name="password"]').should('have.value', password); 

        })
    });

    it('Should the login form', () => {
        cy.get('input[name="login-button"]').click();  // Klik tombol submit setelah mengisi form

        // Verifikasi halaman setelah login berhasil
        cy.url().should('include', '/inventory.html')
    });

    it('Should add product', () => {
        // Menambahkan produk pertama ke keranjang
        cy.get('.inventory_item').first().find('button').click()

        // Verifikasi bahwa produk berhasil ditambahkan ke keranjang
        cy.get('.shopping_cart_link').click()  // Klik ikon keranjang

        // Klik tombol Checkout
        cy.get('[data-test="checkout"]').click()
    });

    it('Should proceed to checkout', () => {
        cy.fixture('checkout').then(checkout => {
            const firstName = checkout.firstName
            const lastName = checkout.lastName
            const postalCode = checkout.postalCode
      
            // Mengisi form checkout
            cy.get('[data-test="firstName"]').type(firstName)
            cy.get('[data-test="lastName"]').type(lastName)
            cy.get('[data-test="postalCode"]').type(postalCode)
            cy.get('[data-test="continue"]').click()
          })

            // Verifikasi halaman pembayaran
            cy.url().should('include', '/checkout-step-two.html')
            cy.get('.summary_info').should('be.visible')

            // Menyelesaikan pesanan
            cy.get('[data-test="finish"]').click()

            // Verifikasi halaman selesai
            cy.url().should('include', '/checkout-complete.html')
            cy.get('[data-test="complete-header"]').should('contain.text', 'Thank you for your order!')
    });
    
});


