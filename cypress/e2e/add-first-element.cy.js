describe("test first", () => {

  it("add element", () => {
      //visits the app
      cy.visit("http://localhost:8001/")

      //locate the elements 
      cy.get("[type=text]").click()

      //add first element to check value = empty 
      cy.get('a[href="#"]').click()
      
      //first added elements to the list is empty, should have a value
  })

})