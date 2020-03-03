function rem() {
  const documentElement = document.documentElement
  const setRem = function() {
    const clientWidth = documentElement.clientWidth;
    if (!clientWidth) return;
    let fontSize = clientWidth / (750 / 100)
    fontSize = fontSize > 100 ? 100 : fontSize
    documentElement.style.fontSize = fontSize + 'px'
  }
  if (!document.addEventListener) return;
  window.onresize = setRem
  document.addEventListener('DOMContentLoaded', setRem, false);
}
export default rem