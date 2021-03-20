function isCtrlPressed(){
  document.addEventListener("keypress", function(event) {
    if (event.keyCode == 17) {
      console.log('ctrl');
    }
  }
}
Hooks.on('hoverMeasuredTemplate', (template) => {
    isCtrlPressed();
    console.log('template:',template);
});
