describe("Starting new contract", () => {
  it("should be reachable from start page", () => {
    cy.visit("/")
    cy.get("main a").contains("Neuer EVB-IT Cloud Vertrag").click()
    cy.get("main a").should("not.exist") // navigated away
    cy.contains("Rubrum")
    cy.contains("Gegenstand der Leistungen")
  })
})
