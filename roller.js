Hooks.on("ready", function() {
  var template = MeasuredTemplate.create({
    t: "circle",
    user: game.user._id,
    x: 2100,
    y: 1500,
    direction:30,
    distance: 30,
    borderColor: "#FF0000",
    fillColor: "#FF3366",
  });
template.then((object) => {
  object.activateListeners((e) => {
    console.log(e);
  }),
});

});
