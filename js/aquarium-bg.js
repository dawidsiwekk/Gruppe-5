"use strict";

document.addEventListener("DOMContentLoaded", () => {

function placeItem(layer, html, x, bottom, zIndex, blur, opacity) {
  const d = document.createElement('div');
  d.className = 'pushable';
  d.style.cssText = `position:absolute;bottom:${bottom}px;left:${x}%;z-index:${zIndex};`;
  if (blur)    d.style.filter  = `blur(${blur}px)`;
  if (opacity) d.style.opacity = opacity;
  d.innerHTML = html;
  layer.appendChild(d);
}

function buildMidground() {
  const layer = document.getElementById('plants-layer');
  layer.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;';
  placeItem(layer, '<img src="img/plante1.png" style="height:380px;width:auto;">', 5,  40, 2);
  placeItem(layer, '<img src="img/plante2.png" style="height:380px;width:auto;">', 67, 40, 2);
}

function buildBubbles() {
  const layer = document.getElementById('bubbles-layer');
  layer.style.cssText = 'position:absolute;inset:0;z-index:4;pointer-events:none;';

  for (let i = 0; i < 30; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble pushable';

    const size     = 4 + Math.random() * 18;
    const duration = 5 + Math.random() * 9;
    const delay    = Math.random() * 12;

    bubble.style.width             = size + 'px';
    bubble.style.height            = size + 'px';
    bubble.style.left              = Math.random() * 100 + '%';
    bubble.style.bottom            = '88px';
    bubble.style.animationDuration = duration + 's';
    bubble.style.animationDelay    = '-' + delay + 's';

    layer.appendChild(bubble);
  }
}

let mouseX = -9999;
let mouseY = -9999;

document.addEventListener('mousemove', function(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function pushElements() {
  const pushRadius   = 160;
  const pushStrength = 75;

  document.querySelectorAll('.pushable').forEach(function(element) {
    const box     = element.getBoundingClientRect();
    const centerX = box.left + box.width  / 2;
    const centerY = box.top  + box.height / 2;

    const dx       = centerX - mouseX;
    const dy       = centerY - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < pushRadius && distance > 1) {
      const force = (1 - distance / pushRadius) * pushStrength;
      element.style.transform = `translate(${(dx/distance)*force}px, ${(dy/distance)*force}px)`;
    } else {
      element.style.transform = '';
    }
  });

  requestAnimationFrame(pushElements);
}

buildMidground();
buildBubbles();
pushElements();

})