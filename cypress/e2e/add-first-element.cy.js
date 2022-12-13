describe("add elemnts to the list", () => {
it("add first element to the list", () => {
  cy.visit("http://localhost:8001/")
  cy.get("[type=text]").type("Test1").should("have.value", "Test1")
  cy.get('a[href="#"]').click()
  cy.get('[class=task__label]').should("have.text", "Test1")
//add correct item to the list
})
it("add element", () => {
  cy.visit("http://localhost:8001/")
  cy.get("[type=text]").click()
  cy.get('a[href="#"]').click()
  cy.get("[class=tasks-list__empty-message]").should("have.text", "You have no tasks - get started by adding one below!")
//add empty item to the list, the lists shoud be empty 
})
})