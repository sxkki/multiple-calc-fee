function mostrarCalculadora(nombre) {
    const calculadoras = document.querySelectorAll('.calculadora');
    calculadoras.forEach(calc => calc.style.display = 'none');
    const seleccionada = document.getElementById(nombre);
    if (seleccionada) {
        seleccionada.style.display = 'block';
    }
}

// Modo nocturno
document.addEventListener('DOMContentLoaded', function() {
    mostrarCalculadora('paypal');

    // Botón modo nocturno
    const toggleBtn = document.getElementById('toggle-dark');
    toggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        // Cambia el icono
        toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // PayPal
    const paypalForm = document.getElementById('paypal-form');
    paypalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const amount = parseFloat(document.getElementById('paypal-amount').value);
        if (isNaN(amount) || amount <= 0) {
            document.getElementById('paypal-result').innerText = 'Por favor, ingresa un monto válido.';
            return;
        }
        const fee = amount * 0.054 + 0.30;
        const total = amount - fee;
        document.getElementById('paypal-result').innerText = 
            `Tarifa: $${fee.toFixed(2)} | Recibirás: $${total.toFixed(2)}`;
    });

    // Airtm
    const airtmForm = document.getElementById('airtm-form');
    airtmForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const amount = parseFloat(document.getElementById('airtm-amount').value);
        if (isNaN(amount) || amount <= 0) {
            document.getElementById('airtm-result').innerText = 'Por favor, ingresa un monto válido.';
            return;
        }
        const fee = amount * 0.03 + 1;
        const total = amount - fee;
        document.getElementById('airtm-result').innerText = 
            `Tarifa: $${fee.toFixed(2)} | Recibirás: $${total.toFixed(2)}`;
    });

    // Ubii Pago
    const ubiipagoForm = document.getElementById('ubiipago-form');
    ubiipagoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const amount = parseFloat(document.getElementById('ubiipago-amount').value);
        if (isNaN(amount) || amount <= 0) {
            document.getElementById('ubiipago-result').innerText = 'Por favor, ingresa un monto válido.';
            return;
        }
        const fee = amount * 0.025 + 0.50;
        const total = amount - fee;
        document.getElementById('ubiipago-result').innerText = 
            `Tarifa: $${fee.toFixed(2)} | Recibirás: $${total.toFixed(2)}`;
    });
});