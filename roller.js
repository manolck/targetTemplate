class Templates {
  static onkeyDown(e){
    if(e.which == 17){
      if (Templates.hovering){
        console.log(Templates)
      }
    }
  }
  static ready(){
    $(document).unbind('keydown',Templates.onKeyDown);
    $(document).keydown(Templates.onKeyDown);
  }
  static onHoverTemplate(template,hovered) {
    Templates.hovering = hovered ? template : undefined;
  }
}



Hooks.on('canvasReady', Templates.ready);
Hooks.on('hoverMeasuredTemplate',Templates.onHoverToken);
