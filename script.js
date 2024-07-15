document.addEventListener("DOMContentLoaded", () => {
    const apiEndpoint = 'data.json';

    const filterNameInput = document.getElementById('filterName');
    const filterAmountInput = document.getElementById('filterAmount');
    const customerTableBody = document.querySelector('#customerTable tbody');
    const transactionChartCtx = document.getElementById('transactionChart').getContext('2d');

    let customers = [];
    let transactions = [];
    let chart;

    fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched data:', data);  // Debug statement
            customers = data.customers;
            transactions = data.transactions;
            displayTable(customers, transactions);
        })
        .catch(error => console.error('Fetching error:', error));

    function displayTable(customers, transactions) {
        customerTableBody.innerHTML = '';
        transactions.forEach(transaction => {
            const customer = customers.find(c => c.id === transaction.customer_id);
            if (customer) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${customer.name}</td>
                    <td>${transaction.date}</td>
                    <td>${transaction.amount}</td>
                `;
                customerTableBody.appendChild(row);
            }
        });
    }

    filterNameInput.addEventListener('input', filterTable);
    filterAmountInput.addEventListener('input', filterTable);

    function filterTable() {
        const filterName = filterNameInput.value.toLowerCase();
        const filterAmount = filterAmountInput.value;

        const filteredTransactions = transactions.filter(transaction => {
            const customer = customers.find(c => c.id === transaction.customer_id);
            return (!filterName || customer.name.toLowerCase().includes(filterName)) &&
                   (!filterAmount || transaction.amount >= filterAmount);
        });

        displayTable(customers, filteredTransactions);
    }

    function displayChart(customerId) {
        const customerTransactions = transactions.filter(t => t.customer_id === customerId);
        const dates = customerTransactions.map(t => t.date);
        const amounts = customerTransactions.map(t => t.amount);

        if (chart) {
            chart.destroy();
        }

        chart = new Chart(transactionChartCtx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: 'Transaction Amount',
                    data: amounts,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day'
                        }
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    customerTableBody.addEventListener('click', event => {
        if (event.target.tagName === 'TD') {
            const customerName = event.target.parentElement.children[0].textContent;
            const customer = customers.find(c => c.name === customerName);
            console.log('Customer clicked:', customer);  // Debug statement
            displayChart(customer.id);
        }
    });
});
