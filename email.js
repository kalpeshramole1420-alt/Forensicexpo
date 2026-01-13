// Initialize EmailJS
emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your key

document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // AI-Generated Response: Use OpenAI API to create a personalized reply
    const aiResponse = await generateAIResponse(name, message);
    
    // Send email to forensicexpo392@gmail.com
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: name,
        from_email: userEmail,
        message: message,
        to_email: 'forensicexpo392@gmail.com',
        ai_reply: aiResponse // Include AI-generated reply in email
    }).then(() => {
        alert('Email sent! We\'ll respond soon.');
    });
});

async function generateAIResponse(name, message) {
    // Use OpenAI API (requires API key and fetch)
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_OPENAI_API_KEY' // Get from openai.com
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: `Generate a professional response to: "${message}" from ${name} for Forensic Expo.` }]
        })
    });
    const data = await response.json();
    return data.choices[0].message.content;
}