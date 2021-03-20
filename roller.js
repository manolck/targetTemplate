class Templates {
  static onkeyDown(e){
    console.log(e);
    if(e.which == 17){
      if (Templates.hovering){
        console.log(Templates)
      }
    }
  }
  static ready(){
    $(document).off('keydown',Templates.onKeyDown);
    $(document).keydown(Templates.onKeyDown);
  }
  static onHoverTemplate(template) {
    return 1
  }
}



Hooks.on('canvasReady', Templates.ready);
Hooks.on('hoverMeasuredTemplate',Templates.onHoverTemplate);
