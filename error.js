<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error Redirect</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f3f4f6; /* Tailwind gray-100 */
        }
    </style>
</head>
<body class="flex items-center justify-center min-h-screen">
    <div id="error-message-box" class="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
        <h1 class="text-3xl font-bold text-red-600 mb-4">Loading Error Page...</h1>
        <p class="text-gray-700 mb-6">
            If you are seeing this message, it means an internal error occurred, and you are being redirected to our dedicated error page.
        </p>
        <div class="flex justify-center">
            <svg class="animate-spin -ml-1 mr-3 h-8 w-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-lg text-indigo-600">Redirecting...</span>
        </div>
        <p class="mt-8 text-sm text-gray-500">
            You should be redirected automatically. If not, please click the link below.
        </p>
        <a id="redirect-link" href="#" class="mt-4 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Go to Error Page</a>
    </div>

    <script>
        // Set the URL for your error.html page.
        // This is now a relative path, meaning error.html should be in the same directory
        // as the current page, or accessible via a relative path (e.g., './error.html' or '../error.html')
        const errorPageUrl = "error.html"; // Changed to relative path

        // Get the link element
        const redirectLink = document.getElementById('redirect-link');
        if (redirectLink) {
            redirectLink.href = errorPageUrl; // Set the href for the fallback link
        }

        // Function to perform the redirect
        function redirectToErrorPage() {
            console.log(`Redirecting to: ${errorPageUrl}`);
            window.location.replace(errorPageUrl);
        }

        // --- Important Considerations for Triggering the Redirect ---

        // Scenario 1: Immediately redirect on page load (e.g., this HTML is your custom 404 page)
        // If this HTML file itself is served as the custom error page by your web server (e.g., Nginx's `error_page`
        // directive serves this HTML with a 404 status), you can simply redirect after a short delay.
        document.addEventListener('DOMContentLoaded', () => {
            // Add a small delay for the user to see the "Redirecting..." message
            setTimeout(redirectToErrorPage, 2000); // Redirect after 2 seconds
        });

        // Scenario 2: Handling specific client-side errors (less common for full page redirects)
        // This is more for errors that happen *after* the page has loaded, e.g., an AJAX call failing.
        // For full page network errors, this JS won't run.
        /*
        window.addEventListener('error', (event) => {
            // This catches uncaught JavaScript errors
            console.error('An uncaught JavaScript error occurred:', event.error);
            // You might want to be careful with automatic redirects here, as it could lead to
            // redirect loops if the error is persistent.
            // For example, only redirect if specific conditions are met:
            // if (event.message.includes('something critical')) {
            //    redirectToErrorPage();
            // }
        });

        window.addEventListener('unhandledrejection', (event) => {
            // This catches unhandled promise rejections
            console.error('An unhandled promise rejection occurred:', event.reason);
            // Similar caution as above regarding automatic redirects.
        });
        */

        // Scenario 3: If your server embeds a flag indicating an error
        // For example, if your backend renders this page and includes a hidden input or data attribute
        // to signal an error condition, you could check for it here.
        // <body data-has-error="true">
        /*
        const body = document.body;
        if (body.dataset.hasError === 'true') {
            console.log("Server indicated an error, redirecting...");
            setTimeout(redirectToErrorPage, 2000);
        }
        */
    </script>
</body>
</html>
