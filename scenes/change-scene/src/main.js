import kaplay from "kaplay";

const k = kaplay({
  buttons: {
    change: {
      keyboard: ["space"],
    },
  },
});

// Den først 'scene'
k.scene("firstScene", () => {
  k.setBackground(255, 0, 0);

  k.add([
    k.text("Press 'space' to go to second scene .."),
    k.pos(k.center()),
    k.anchor("center"),
  ]);

  // Med dette 'onButtonPress' skiftes til 'secondScene'
  k.onButtonPress("change", () => k.go("secondScene"));
});

// Den anden 'scene'
k.scene("secondScene", () => {
  k.setBackground(0, 0, 255);

  k.add([
    k.text("Press 'space' to go to first scene .."),
    k.pos(k.center()),
    k.anchor("center"),
  ]);

  // Med dette 'onButtonPress' skiftes til 'firstScene'
  k.onButtonPress("change", () => k.go("firstScene"));
});

k.go("firstScene");
