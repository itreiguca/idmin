function handleEvent(event) {
  if (!event) event = window.event; // IE fallback
  // Prevents the event from bubbling up the DOM tree
  event.stopPropagation();
  // Additional event handling logic here
}
