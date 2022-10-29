/// <reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should render the home page and display a the title", () => {
    cy.get("h1").contains("Welcome to R&M with GraphQL by Yosef Blandin");
  });

  it("Should render a button that goes to favorite characters", () => {
    cy.get("button").contains("0 Favorite Characters").click();
  });

  it("Should render a list of cards ", () => {
    cy.wrap("[data-testid='Home_cardsContainer']").should("have.length", 35);
    cy.get("[data-testid='Home_cardsContainer']")
      .children()
      .each((element: HTMLElement, index: number, list: HTMLElement[]) => {
        cy.wrap(element)
          .invoke("attr", "data-testid")
          .should("equal", "styles_CharacterCard");
      });
  });

  it("Add a favorite character, go to favorite characters page and delete all favorite characters, afterwards, go home through the button of the empty favorite characters list message", () => {
    cy.get("button").contains("Add to Favorite").click();
    cy.get("button").contains("Add to Favorite").click();
    cy.get("button").contains("2 Favorite Characters");
    cy.get("button").contains("2 Favorite Characters").click();
    cy.wait(1000);
    cy.get("button").contains("Character Added").click();
    cy.get("button").contains("Character Added").click();
    cy.get("h2").contains("You haven't added favorite characters yet");
    cy.get("button").contains("Go back to characters list").click();
  });

  it("Go to the details page of a character and then return home", () => {
    cy.get("button").contains("Details").click();
    cy.get("h2").contains("Character Name");
    cy.get("p").contains("Origin");
    cy.get("p").contains("Species");
    cy.get("p").contains("Status");
    cy.get("p").contains("Gender");
    cy.get("h1")
      .contains("Welcome to R&M with GraphQL by Yosef Blandin")
      .click();
  });
});

export {};
