// On extension install, set up the default subscription level to Free
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ subscription: "Free" });
    console.log("MRD - Market Research Extension Installed, default subscription set to Free.");
  });
  
  // Check subscription level and serve appropriate features
  function getSubscriptionLevel() {
    return new Promise((resolve) => {
      chrome.storage.local.get('subscription', (data) => {
        resolve(data.subscription || "Free");
      });
    });
  }
  
  // Use this function in other scripts to check the user's plan
  async function checkSubscriptionFeatures() {
    const subscription = await getSubscriptionLevel();
    console.log(`Current Subscription: ${subscription}`);
    return subscription;
  }
  
  // Example of setting up features based on subscription plan
  function setSubscriptionBasedFeatures(subscription) {
    if (subscription === "Pro") {
      // Unlock Pro features
      console.log("Unlocking Pro Features...");
    } else if (subscription === "Pro+") {
      // Unlock Pro+ features
      console.log("Unlocking Pro+ Features...");
    } else {
      // Keep Free features enabled
      console.log("Free version enabled.");
    }
  }