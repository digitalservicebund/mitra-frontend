describe("Starting new contract", () => {
  it("should be reachable from start page", () => {
    cy.visit("/")
    cy.get("main a").contains("Neuer Vertrag").click()
    cy.get("main a").should("not.exist") // navigated away
    cy.contains("Abschnitt 1")
    cy.contains("Abschnitt 2")
  })
})
