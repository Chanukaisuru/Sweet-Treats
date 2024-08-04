document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('sendButton').addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            document.getElementById('contactMessage').style.display = 'block';
            setTimeout(() => {
                document.getElementById('contactMessage').style.display = 'none';
            }, 3000);
        } else {
            alert('Please fill in all required fields.');
        }
    });
});
