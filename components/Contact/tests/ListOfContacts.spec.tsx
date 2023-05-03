import { ContactsFixture } from "@/__fixtures__/ListOfContacts";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ListOfContacts from "../ListOfContacts";

describe("ListOfContacts component", () => {
  it("should not render a list of contacts", () => {
    const component = render(<ListOfContacts contacts={[]} />);
    const list = component.getAllByRole("list");
    expect(list).toHaveLength(1);
    const nullListItem = screen.queryByText(/charlbo@socialgoodsoftware.com/i);
    expect(nullListItem).not.toBeInTheDocument();
  });

  it("Should render the correct number of contacts", () => {
    const { getAllByRole } = render(
      <ListOfContacts contacts={ContactsFixture} />
    );

    expect(getAllByRole("listitem")).toHaveLength(1);
  });
});
