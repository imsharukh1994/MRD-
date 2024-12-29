document.getElementById("productTrends").addEventListener("click", () => {
  displayOutput("Fetching Product Trends...");
  // Simulate API call
  setTimeout(() => {
    displayOutput("Trending Products: Smartwatches, Wireless Earbuds, Fitness Equipment.");
  }, 1000);
});

document.getElementById("competitorInsights").addEventListener("click", () => {
  displayOutput("Analyzing Competitor Insights...");
  // Simulate API call
  setTimeout(() => {
    displayOutput("Competitor Pricing: Smartwatches - $50, Wireless Earbuds - $20.");
  }, 1000);
});

document.getElementById("supplierData").addEventListener("click", () => {
  displayOutput("Fetching Supplier Data...");
  // Simulate API call
  setTimeout(() => {
    displayOutput("Supplier Info: Verified, 5-day shipping, competitive pricing.");
  }, 1000);
});

function displayOutput(message) {
  document.getElementById("output").innerText = message;
}