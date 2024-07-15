# Customer Transactions Application

This project is a web application that retrieves customer and transaction data from a provided API endpoint and displays it in a user-friendly format. The application has the following features:
- A table that displays the list of customers along with their transaction data.
- The ability to filter the table by customer name or transaction amount.
- A graph that displays the total transaction amount per day for the selected customer.

## Features

- **Table of Customers and Transactions**: Displays customer names, transaction dates, and amounts.
- **Filtering**: Filter transactions by customer name and transaction amount.
- **Graph**: Visualize the transaction amounts over time for a selected customer using Chart.js.

## Technologies Used

- HTML
- CSS
- JavaScript
- Chart.js
- Moment.js
- Chart.js Moment.js Adapter


## Setup Local Server

1. Make sure you have Python installed on your machine.
2. Start a simple HTTP server to serve the JSON data:
    ```sh
    python -m http.server 8000
    ```
    This will serve the `data.json` file on `http://localhost:8000`.

## Usage

1. Open `index.html` in your web browser.
2. The application will fetch data from the local server and display it.
3. Use the input fields to filter transactions by customer name and amount.
4. Click on a customer's name in the table to view their transaction amounts over time in the graph.

## Data

The application uses the following sample data:
```json
{
    "customers": [
        {"id": 1, "name": "Ahmed Ali"},
        {"id": 2, "name": "Aya Elsayed"},
        {"id": 3, "name": "Mina Adel"},
        {"id": 4, "name": "Sarah Reda"},
        {"id": 5, "name": "Mohamed Sayed"}
    ],
    "transactions": [
        {"id": 1, "customer_id": 1, "date": "2022-01-01", "amount": 1000},
        {"id": 2, "customer_id": 1, "date": "2022-01-02", "amount": 2000},
        {"id": 3, "customer_id": 2, "date": "2022-01-01", "amount": 550},
        {"id": 4, "customer_id": 3, "date": "2022-01-01", "amount": 500},
        {"id": 5, "customer_id": 2, "date": "2022-01-02", "amount": 1300},
        {"id": 6, "customer_id": 4, "date": "2022-01-01", "amount": 750},
        {"id": 7, "customer_id": 3, "date": "2022-01-02", "amount": 1250},
        {"id": 8, "customer_id": 5, "date": "2022-01-01", "amount": 2500},
        {"id": 9, "customer_id": 5, "date": "2022-01-02", "amount": 875}
    ]
}
