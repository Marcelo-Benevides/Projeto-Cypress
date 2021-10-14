/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
    //cy.viewport(1280, 720)
    //cy.wait(3000)
})

describe('Fazendo compras', () => {
    it('Escolhendo e comprando produto', () => {
        
        //escolhendo a categoria
        cy.get('.sf-menu > :nth-child(3) > a').click()
        //selecionado o produto
        cy.get('.product_img_link > .replace-2x').click()
        //adicionando mais quantidades do produto
        cy.get('.icon-plus').click()
        //escolhendo a cor do produto
        cy.get('#color_14').click()
        //adicionando ao carrinho
        cy.get('.exclusive > span').click()
        //confirmando a compra
        cy.get('.button-medium > span').click()
        cy.get('.cart_navigation > .button > span').click()
        //fazendo cadastro
        //cadastrando email
        cy.get('#email_create').type('blateste1@gmail.com')
        cy.get('#SubmitCreate > span').click()
        //escolhendo forma de tratamento (Mr ou Mrs)
        cy.get('#id_gender1').check()
        //colando primeiro nome
        cy.get('#customer_firstname').type('teste')
        //colocando segundo nome
        cy.get('#customer_lastname').type('testando')
        //colocando senha
        cy.get('#passwd').type('123456')
        //cadastrando endereço
        cy.get('#address1').type('Rua amarela')
        //colocando a cidade
        cy.get('#city').type('Salvador')
        //Selecionando o Estado
        cy.get('#id_state').select('7')
        //Cadastrando CEP)
        cy.get('#postcode').type('00000')
        //Cadastrando Telefone
        cy.get('#phone_mobile').type('999999999')
        //Registrando o cadastro
        cy.get('#submitAccount > span').click()
        //Confirmando dados de endereço e nome
        cy.get('.cart_navigation > .button > span').click()
        //Check no termos de entrega 
        cy.get('#cgv').check()
        cy.get('.cart_navigation > .button > span').click()
        //Escolhendo a forma de pagamento
        cy.get('.bankwire').click()
        cy.get('#cart_navigation > .button > span').click()

    })

})

  
       
    



