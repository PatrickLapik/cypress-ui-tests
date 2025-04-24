describe("Search function check", () => {
    beforeEach(() => {
        cy.visit("https://eesti.ee");
        cy.contains("button", "Ei nõustu").click();
    });

    it("should return openable article 'Eesti hümn' with the search keyword of 'Eesti hümn'", () => {
        cy.get("input[placeholder='Sisestage otsingusõna']").type("Eesti hümn{enter}");

        cy.contains("h3", "Eesti hümn");

        cy.contains("button", "Loe edasi").click();

        cy.contains("h1", "Eesti hümn");
    })

    it("should return no results without a search keyword", () => {
        cy.get("input[placeholder='Sisestage otsingusõna']").type(" {enter}");

        cy.contains("div", "0 tulemust");
    })
})
