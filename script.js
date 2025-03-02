document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const message = document.querySelector('textarea').value;

    const recipient = "ankireddysailakshmi@gmail.com";
    const subject = encodeURIComponent(`Contacting for Job opportunity`);
    const body = encodeURIComponent(`Hi Sai Lakshmi, \n\n \t This is ${name}, ${message} \n \n Thanks & Regards \n ${name}`);

    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink; 

    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded shadow-lg';
    notification.textContent = 'Redirecting to email client...';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);

    e.target.reset(); // Reset the form
});


const mobileMenuButton = document.querySelector('button');
const nav = document.querySelector('nav div');

mobileMenuButton.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
    nav.classList.toggle('flex-col');
    nav.classList.toggle('absolute');
    nav.classList.toggle('top-20');
    nav.classList.toggle('left-0');
    nav.classList.toggle('w-full');
    nav.classList.toggle('bg-white');
    nav.classList.toggle('p-4');
    nav.classList.toggle('shadow-lg');
});