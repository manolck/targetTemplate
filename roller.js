Hooks.on('canvasReady', (canvas) => {
  canvas.addEventListener("keypress", function(event) {
    if (event.keyCode == 17) {
      console.log('ctrl');
    }
  )};
}

Hooks.on('hoverMeasuredTemplate', (template) => {

    console.log('template:',template);
});
