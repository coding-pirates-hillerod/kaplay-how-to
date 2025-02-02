import kaplay from "kaplay";

const k = kaplay({
  background: [0, 255, 0], // Sætter baggrunden til en grøn farve
});

// Først laves selve knappen - en rød knap med sorte runde hjørner
// placeret i midten af skærmen
const btn = k.add([
  k.rect(200, 100, { radius: 10 }),
  k.pos(k.center()),
  k.anchor("center"),
  k.area(),
  k.outline(6),
  k.color(255, 0, 0),
]);

// Derefter tilføjes den tekst som skal vises på knappen
btn.add([k.text("Click me", { size: 30 }), k.anchor("center")]);
