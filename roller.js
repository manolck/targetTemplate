console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on("init", function() {
  console.log("This code runs once the Foundry VTT software begins it's initialization workflow.");
});

Hooks.on("ready", function() {
  MeasuredTemplate.create({
    t: "cone",
    user: game.user._id,
    x: 1000,
    y: 1000,
    direction: 0.45,
    angle: 63.13,
    distance: 30,
    borderColor: "#FF0000",
    fillColor: "#FF3366",
    texture: "tiles/fire.jpg"
  });
});
