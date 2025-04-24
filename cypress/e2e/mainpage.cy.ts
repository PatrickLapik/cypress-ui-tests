describe("Main page check", () => {
    beforeEach(() => {
        cy.visit("https://eesti.ee");
        cy.contains("button", "Ei nõustu").click();
    });

    it("loads correctly", () => {
        cy.title().should("include", "Eesti.ee");
        cy.get("body").should("be.visible");
    });

    it("has searchbar and it is functional", () => {
        cy.get("input[placeholder='Sisestage otsingusõna']").should("be.visible").as("searchBar");

        cy.get("@searchBar").type("Pass {enter}");

        cy.url().should("include", "search=Pass");

        cy.get("results-page").should("be.visible");
    });

    it("has working main navigation and navigation points", () => {
        const menuItems = [
            { name: "Aktuaalsed teemad" },
            { name: "Eesti Vabariik" },
            { name: "Õigusabi" },
        ]

        cy.contains("button", "Menüü").click();
    
        menuItems.forEach((item) => {
            cy.contains("p", item.name);
        })
    });
});
