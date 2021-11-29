describe("Starting new contract", () => {
  it("should be reachable from start page", () => {
    cy.visit("/")
    cy.get("main a").contains("Neuer EVB-IT Cloud Vertrag").click()
    cy.get("main a").should("not.exist") // navigated away
    cy.contains("Rubrum")
    cy.contains("Gegenstand der Leistungen")
  })
  it("should show title dialog", () => {
    cy.visit("/contract")
    cy.contains("Vertrag benennen").should("exist")
  })

  it("should close title dialog on clicking x", () => {
    cy.visit("/contract")
    cy.get(".p-dialog-header-close-icon").click()
    cy.contains("Vertrag benennen").should("not.exist")
  })

  it("should close title dialog on clicking mask", () => {
    cy.visit("/contract")
    // click outside the dialog
    cy.get("body").click(0, 0)
    cy.contains("Vertrag benennen").should("not.exist")
  })

  it("should save edited title on button click", () => {
    cy.visit("/contract")
    cy.get("#input-contract-title").type("foo")
    cy.get("button").contains("OK").click()
    cy.contains("foo")
  })
  it("should save edited title on pressing enter", () => {
    cy.visit("/contract")
    cy.get("#input-contract-title").type("foo")
    cy.get("#input-contract-title").type("{enter}")
    cy.contains("foo")
  })
  it("should list the modules in navigation", () => {
    cy.visit("/contract")
    cy.get("#input-contract-title").type("foo")
    cy.get("button").contains("OK").click()
    cy.get("nav").contains("Module").click()
    cy.get("nav").contains("Rubrum")
    cy.get("nav").contains("Gegenstand der Leistungen")
  })
  it("should preserve text input", () => {
    cy.visit("/contract")
    cy.get("#input-contract-title").type("{enter}")
    cy.get(".contract-step input").type("foo")
    cy.get("button").contains("Weiter").click()
    cy.get(".contract-step input").type("bar")
    cy.get("button").contains("Zurück").click()
    cy.get(".contract-step input").should("have.value", "foo")
    cy.get("button").contains("Weiter").click()
    cy.get(".contract-step input").should("have.value", "bar")
  })
})
