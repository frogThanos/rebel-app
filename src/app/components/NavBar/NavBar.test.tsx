import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "./index";


describe("NavBar Component", () => {
    test("renders NavBar with the correct title", () => {
        render(<NavBar />);
        
        // Check if the Rebels App title is rendered
        expect(screen.getByText(/rebels app/i)).toBeInTheDocument();
    });

    test("renders Home link", () => {
        render(<NavBar />);
        
        // Check if Home link is rendered and has the correct href
        const homeLink = screen.getByRole('link', { name: /home/i });
        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveAttribute('href', '/');
    });

    test("renders Wishlists link", () => {
        render(<NavBar />);
        
        // Check if Wishlists link is rendered and has the correct href
        const wishlistsLink = screen.getByRole('link', { name: /wishlists/i });
        expect(wishlistsLink).toBeInTheDocument();
        expect(wishlistsLink).toHaveAttribute('href', '/wishlists');
    });

    test("renders the mobile menu button", () => {
        render(<NavBar />);
        
        // Check if the mobile menu button is rendered
        const mobileMenuButton = screen.getByRole('button', { name: /open main menu/i });
        expect(mobileMenuButton).toBeInTheDocument();
    });
});
