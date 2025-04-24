describe("Services check", () => {
    beforeEach(() => {
        cy.visit("https://eesti.ee");
        cy.contains("button", "Ei nõustu").click();
        cy.contains("button", "Menüü").click();
    });

    it("should show subcategories under 'Tervis ja Retseptid'", () => {
        cy.get("div.sidenav-small").within(() => {
            cy.contains("p", "Eraisikule");

            cy.contains("p", "Tervis ja retseptid").click();

            cy.contains("p", "Tervishoid ja arstiabi");

            cy.contains("p", "Töötervishoid");
        });
    });

    it("should open perscriptions page from the menu and open the 'terviseportaal' link in new window", () => {
        cy.get("div.sidenav-small").within(() => {
            cy.contains("p", "Tervis ja retseptid").click();

            cy.contains("p", "Tervishoid ja arstiabi").click();

            cy.contains("p", "Retseptid").click();
        });

        cy.get("a.external").should("have.attr", "target", "_blank");
    });
});
