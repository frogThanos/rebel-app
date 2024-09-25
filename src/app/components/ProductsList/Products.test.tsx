import React from "react";
import { render, screen } from "@testing-library/react";
import ProductsList from "./index";
import useFetchProducts from "../../hooks/useFetchProducts";

jest.mock("../../hooks/useFetchProducts");

describe("ProductsList Component", () => {
  const mockProducts = [
    { id: 1, name: "Product 1", brand: "Brand A", category: "Category X" },
    { id: 2, name: "Product 2", brand: "Brand B", category: "Category Y" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading state", () => {
    (useFetchProducts as jest.Mock).mockReturnValue({
      products: [],
      loading: true,
      error: null,
      searchQuery: "",
      setSearchQuery: jest.fn(),
    });

    render(<ProductsList />);

    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });

  test("renders error state", () => {
    (useFetchProducts as jest.Mock).mockReturnValue({
      products: [],
      loading: false,
      error: "Something went wrong",
      searchQuery: "",
      setSearchQuery: jest.fn(),
    });

    render(<ProductsList />);

    expect(screen.getByText(/Error: Something went wrong/)).toBeInTheDocument();
  });

  test("renders products list", async () => {
    (useFetchProducts as jest.Mock).mockReturnValue({
      products: mockProducts,
      loading: false,
      error: null,
      searchQuery: "",
      setSearchQuery: jest.fn(),
    });

    render(<ProductsList />);

    // Check if products are rendered
    expect(await screen.findByText(/Product 1/)).toBeInTheDocument();
    expect(await screen.findByText(/Product 2/)).toBeInTheDocument();
    
    // Check if the brand and category are rendered
    expect(screen.getByText(/Brand: Brand A/)).toBeInTheDocument();
    expect(screen.getByText(/Category: Category X/)).toBeInTheDocument();
    expect(screen.getByText(/Brand: Brand B/)).toBeInTheDocument();
    expect(screen.getByText(/Category: Category Y/)).toBeInTheDocument();
  });
});
