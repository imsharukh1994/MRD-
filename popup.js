document.addEventListener("DOMContentLoaded", () => {
    // Check subscription and display correct features
    chrome.runtime.getBackgroundPage((background) => {
      background.checkSubscriptionFeatures().then((subscription) => {
        document.getElementById("subscription-status").textContent = `Current Plan: ${subscription}`;
        
        const featuresList = document.getElementById("features-list");
        const features = getFeaturesForSubscription(subscription);
  
        features.forEach((feature) => {
          const featureItem = document.createElement("div");
          featureItem.textContent = feature;
          featuresList.appendChild(featureItem);
        });
        
        // Button to upgrade to Pro
        document.getElementById("upgrade").addEventListener("click", () => {
          upgradeSubscription("Pro");
        });
  
        // Button to upgrade to Pro+
        document.getElementById("upgrade-proplus").addEventListener("click", () => {
          upgradeSubscription("Pro+");
        });
      });
    });
  });
  
  // Function to return features based on the subscription
  function getFeaturesForSubscription(subscription) {
    const features = {
      "Free": [
        "Basic Product Trend Tracking",
        "Limited Competitor Price Monitoring",
        "Basic Price Comparison"
      ],
      "Pro": [
        "Unlimited Product Trend Tracking",
        "Advanced Competitor Analysis",
        "Detailed Price Comparison",
        "CSV Export"
      ],
      "Pro+": [
        "Advanced Market Analytics",
        "Unlimited Competitor Tracking",
        "AI Price Prediction & Alerts",
        "Real-Time Supplier Data"
      ]
    };
  
    return features[subscription] || features["Free"];
  }
  
  // Function to upgrade the subscription
  function upgradeSubscription(subscription) {
    chrome.storage.local.set({ subscription: subscription }, () => {
      alert(`You have upgraded to ${subscription} Plan!`);
      location.reload();
    });
  }