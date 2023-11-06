function waitForElement(selector, callback) {
  const element = document.querySelector(selector);
  console.log('Checking for element...');
  if (element) {
    console.log('Element found', element);
    callback(element);
  } else {
    setTimeout(() => waitForElement(selector, callback), 1000); // timing
  }
}

waitForElement('input[data-automation-id="auto-preview-switch"]', (element) => {
  element.checked = false;
  var event = new Event('change', {
    'bubbles': true,
    'cancelable': true
  });
  element.dispatchEvent(event);
});
