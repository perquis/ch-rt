# Backend Development Server

This guide explains how to set up and run the development server for the backend and provides instructions for testing the `/products` endpoint.

## Getting Started

To begin working on the backend, follow the instructions below to start the development server, modify the code, and test your changes.

### 1. Running the Development Server

Use the following command to start the development server:

```bash
yarn workspace be run dev
```

### 2. Accessing the Application

Once the server is running, open your browser and navigate to:

```bash
http://localhost:8080
```

### 2.1 Testing the `/products` Endpoint

To test the `/products` endpoint, go to:

```bash
http://localhost:8080/api/v1/products
```

You can also filter the products using the following URL parameters based on the `IProductFilters` interface:

#### Filterable Parameters:

- `sort`: You can sort by `price` or `capacity`.
- `capacity`: Filter by product capacity values: `8`, `9`, `10.5`.
- `energyClass`: Filter by energy class: `'A'`, `'B'`, or `'C'`.
- `features`: Filter by specific product features:
  - `'Drzwi AddWash™'`
  - `'Panel AI Control'`
  - `'Silnik inwerterowy'`
  - `'Wyświetlacz elektroniczny'`
- `code`: Filter by the product code.

Example usage in a URL:

```
http://localhost:8080/api/v1/products?sort=price&capacity=8&energyClass=A&features=Silnik%20inwerterowy
```

### 3. Installing Additional Packages (Optional)

If you need to install additional packages, you can use the following command:

```bash
yarn workspace be add <package_name>
```

Replace `<package_name>` with the desired package name.

## Notes

Make sure to have MongoDB installed and running, and ensure that your environment variables are set up correctly before starting the server.

Happy coding!
