document.getElementById('candidateForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = {
        personalInfo: {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
        },
        educationalBackground: [{
            degree: document.getElementById('degree').value,
            institution: document.getElementById('institution').value,
            graduationYear: document.getElementById('graduationYear').value,
        }],
        jobApplicationInfo: {
            position: document.getElementById('position').value,
        },
    };

    try {
        const response = await fetch('/api/candidates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const responseData = await response.json();
        document.getElementById('responseMessage').innerText = `Candidate ${responseData.personalInfo.name} submitted successfully!`;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = 'Error submitting application. Please try again.';
    }
});
