it("check and uncheck element", () => {
    //visit the app
      cy.visit("http://localhost:8001/")

      //add the element
      cy.get("[type=text").type("Test1")
        .should("have.value", "Test1")
      cy.get('a[href="#"]').click()

      //choose the element
      cy.get("[type=checkbox]").click()
        .wait(2000)
      //one click cause highlighted elements to green, but checkbox is not check
      cy.get("[type=checkbox]").click()
        .wait(2000)
      //second click only then does it select the item

      //uncked checkbox 
      cy.get("[type=checkbox]").click()
        .wait(2000)
      //first click cause deleted green highlighted but not uncheck
      cy.get("[type=checkbox]").click()
        .wait(2000)
      //second click cause only then the checkbox is unchecked
      
  })