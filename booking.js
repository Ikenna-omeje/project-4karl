<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

// Initialize the Flatpickr date picker

        flatpickr("#datePicker", {
            enable: [
                "2023-12-22", // Example of available dates
                "2023-12-25",
                "2023-12-30",
            ],
            minDate: "today", // Prevent past dates
            dateFormat: "Y-m-d" // Format for the selected date
        });
