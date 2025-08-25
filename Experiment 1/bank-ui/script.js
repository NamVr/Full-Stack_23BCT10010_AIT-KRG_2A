let balance = 1000;

function updateUI(message = '') {
  document.getElementById('balance').textContent = `$${balance}`;
  document.getElementById('amount').value = '';
  document.getElementById('message').textContent = message;
}

function deposit() {
  const amount = Number(document.getElementById('amount').value);
  if (amount > 0) {
    balance += amount;
    updateUI(`Deposited $${amount}`);
  } else {
    updateUI('Enter a valid amount to deposit!');
  }
}

function withdraw() {
  const amount = Number(document.getElementById('amount').value);
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    updateUI(`Withdrew $${amount}`);
  } else {
    updateUI('Invalid withdrawal amount!');
  }
}

document.getElementById('depositBtn').addEventListener('click', deposit);
document.getElementById('withdrawBtn').addEventListener('click', withdraw);
