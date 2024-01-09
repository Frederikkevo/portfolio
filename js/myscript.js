function toggleTab(tabId) {
    // Skjul alle faner
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    });
  
    // Vis den valgte fane
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
  }
  