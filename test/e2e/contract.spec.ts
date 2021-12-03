/// <reference types="cypress" />
/// <reference types="cypress-file-upload" />
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
    cy.findByTitle("Schritt 1.1").type("foo")
    cy.get("button").contains("Weiter").click()
    cy.findByTitle("Schritt 1.2").type("bar")
    cy.get("button").contains("Zurück").click()
    cy.findByTitle("Schritt 1.1").should("have.value", "foo")
    cy.get("button").contains("Weiter").click()
    cy.findByTitle("Schritt 1.2").should("have.value", "bar")
  })

  it("should open playbook from filesystem", () => {
    cy.visit("/open-playbook")
    cy.get("input[type='file']").attachFile("contract.json")
    cy.contains("Vertrag benennen").should("exist")
    cy.get(".p-dialog-header-close-icon").click()
    cy.get("body").should("contain.text", "foo module")
  })

  it("should open playbook from filesystem by dragging into drop zone", () => {
    cy.visit("/open-playbook")
    cy.get(".p-fileupload-content").attachFile("contract.json", {
      subjectType: "drag-n-drop",
    })
    cy.contains("Vertrag benennen").should("exist")
    cy.get(".p-dialog-header-close-icon").click()
    cy.get("body").should("contain.text", "foo module")
  })
})
