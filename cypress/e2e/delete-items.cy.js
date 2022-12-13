it("check and uncheck element", () => {
    //visit the app
    cy.visit("http://localhost:8001/")

      //add the element
    cy.get("[type=text").type("Test1")
        .should("have.value", "Test1")
    cy.get('a[href="#"]').click()
    cy.get("[type=text").type("Test12")
        .should("have.value", "Test12")
    cy.get('a[href="#"]').click()

      //
      
  })