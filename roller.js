Hooks.on('canvasReady', (canvas) => {
  canvas.templates.objects.children.forEach((template) => {
    const t = getTemplate(template.id);
    console.log('id:',template.id)
  });
});
