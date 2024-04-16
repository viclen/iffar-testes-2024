import { render, screen } from "@testing-library/react";
import UserRegistration from "../UserRegistration";

describe("UserRegistration", () => {
  it("should render the title", () => {
    render(<UserRegistration />);

    expect(screen.getByText("User registration")).toBeInTheDocument();
  });
});
