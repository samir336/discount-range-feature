// Selecting DOM elements
const rangeInput = document.getElementById('rangeInput');
const originalPriceElement = document.getElementById('originalPrice');
const discountPercentageElement = document.getElementById('discountPercentage');
const discountAmountElement = document.getElementById('discountAmount');
const finalPriceElement = document.getElementById('finalPrice');
const messageTitleElement = document.querySelector('.message-title');
const messageTextElement = document.querySelector('.message-text');

// Original price in BDT
const originalPrice = 3000;

// Update function
function updateDiscount() {
    const discountPercentage = parseInt(rangeInput.value, 10);
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const finalPrice = originalPrice - discountAmount;

    // Update DOM elements
    discountPercentageElement.textContent = `${discountPercentage}%`;
    discountAmountElement.textContent = `BDT ${discountAmount.toFixed(2)}`;
    finalPriceElement.textContent = `BDT ${finalPrice.toFixed(2)}`;

    // Update custom message
    if (discountPercentage === 0) {
        messageTitleElement.textContent = 'Community Builder';
        messageTextElement.textContent = 'I want to pay the maximum price and contribute to the community, empowering others to learn and grow.';
    } else if (discountPercentage <= 50) {
        messageTitleElement.textContent = 'Smart Saver';
        messageTextElement.textContent = 'I am making a balanced choice, saving while still contributing to the community.';
    } else {
        messageTitleElement.textContent = 'Value Seeker';
        messageTextElement.textContent = 'I am maximizing my savings and still supporting the community in a small way.';
    }
}

// Event listener for range input
rangeInput.addEventListener('input', updateDiscount);

// Initialize with default values
updateDiscount();
