import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Contact from "..";

describe("Contact component", () => {
  it("Should render Contact component successfully", () => {
    const full_name = "Rick Hernandez";
    const email = "rhernandez@sgs.com";
    const component = render(
      <Contact full_name={full_name} email_address={email} />
    );

    component.getByRole("article");
    expect(component.container).toHaveTextContent("Rick Hernandez");
  });
});
