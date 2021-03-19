Hooks.on('canvasReady', (canvas) => {
  canvas.templates.objects.children.forEach((template) => {
    const t = canvas.templates.get(template.id);
    console.log('template:',t);
  });
});
