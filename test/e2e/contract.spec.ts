/// <reference types="cypress" />
/// <reference types="cypress-file-upload" />
describe("Starting new contract", () => {
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
