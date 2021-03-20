Hooks.on('canvasReady', (canvas) => {
  console.log('canvas is ready');
  canvas.addEventListener("keypress", function(event) {
    if (event.keyCode == 17) {
      console.log('ctrl');
    }
  });
}

Hooks.on('hoverMeasuredTemplate', (template) => {

    console.log('template:',template);
});
