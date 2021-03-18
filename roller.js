Hooks.on("ready", function() {
  MeasuredTemplate.create({
    t: "circle",
    user: game.user._id,
    x: 2100,
    y: 1500,
    distance: 30,
    borderColor: "#FF0000",
    fillColor: "#FF3366",
  });
});
MeasuredTemplate.activateListeners(function(e){
  console.log(e);
  var center = e.center;
  console.log(center);
});
