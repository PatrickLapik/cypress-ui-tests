describe("Contact page check", () => {
    beforeEach(() => {
        cy.visit("https://eesti.ee");
        cy.contains("button", "Ei nõustu").click();
        cy.contains("p", "Võtke meiega ühendust").click();
    });

    it("contact page should be accessible through 'Võtke meiega ühendust' and it should have all the necessary form fields", () => {
        cy.get("stateportal-contact-form").within(() => {
            cy.get("input[name='ria-contact-form-name']").should("exist");
            cy.get("input[name='ria-contact-form-email']").should("exist");
            cy.get("textarea").should("exist");
        });
    });

    it("should throw an error message when providing invalid email address", () => {
        cy.get("stateportal-contact-form").within(() => {
            cy.get("input[name='ria-contact-form-email']").type("hi.com").as("emailInput");
            
            cy.get("button.ria-btn-primary").click();

            cy.get("@emailInput").closest("div").next().find("p.validation-error").should("exist");
        });
    });
});
