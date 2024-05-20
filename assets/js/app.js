// Function to show loading message
function showLoadingMessage() {
    document.getElementById('loadingMessage').classList.remove('loading-message-display');
}

// Function to hide loading message
function hideLoadingMessage() {
    document.getElementById('loadingMessage').classList.add('loading-message-display');
}

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!name || !email || !message) {
        alert('All fields are required.');
        return;
    }

    // Show loading message before sending the request
    showLoadingMessage();

    try {
        const response = await fetch('https://n3ggefq0kd.execute-api.us-east-1.amazonaws.com/prod/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message, phone })
        });


        document.getElementById('loadingMessage').classList.add('hidden');

        if (response.ok) {
        // Redirect to success page
        setTimeout(() => {
            document.getElementById('contactForm').reset();
            window.location.href = 'success.html';
        }, 1000)
        } else {
            document.getElementById('errorMessage').classList.remove('hidden');
        }
    } catch (error) {
        console.error('Error:', error);
        // document.getElementById('loadingMessage').classList.add('hidden');
        hideLoadingMessage();
        document.getElementById('errorMessage').classList.remove('hidden');
    }
});
