Hooks.on("ready", function() {
  MeasuredTemplate.create({
    t: "circle",
    user: game.user._id,
    x: 2100,
    y: 1500,
    direction:30,
    distance: 30,
    borderColor: "#FF0000",
    fillColor: "#FF3366",
  });
  console.log('test');
console.log(MeasuredTemplate.data);
});
