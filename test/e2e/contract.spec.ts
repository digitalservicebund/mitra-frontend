describe("Starting new contract", () => {
  it("should be reachable from start page", () => {
    cy.visit("/")
    cy.get("main a").contains("Neuer EVB-IT Cloud Vertrag").click()
    cy.get("main a").should("not.exist") // navigated away
    cy.contains("Rubrum")
    cy.contains("Gegenstand der Leistungen")
  })
  it("should show title dialog", () => {
    cy.visit("/")
    cy.get("main a").contains("Neuer EVB-IT Cloud Vertrag").click()
    cy.contains("Vertrag benennen").should("exist")
  })
  it("should display provided title on page", () => {
    cy.visit("/")
    cy.get("main a").contains("Neuer EVB-IT Cloud Vertrag").click()
    cy.get("#contract-title").type("foo")
    cy.get("button").contains("OK").click()
    cy.contains("foo")
  })
})
