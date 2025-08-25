const svg = document.getElementById('canvas');
const undoBtn = document.getElementById('undoBtn');
let drawings = [];

// Draw circle on mouse click
svg.addEventListener('mousedown', (e) => {
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', e.offsetX);
  circle.setAttribute('cy', e.offsetY);
  circle.setAttribute('r', '8');
  circle.setAttribute('fill', 'blue');
  svg.appendChild(circle);
  drawings.push(circle);
  updateUndoButton();
});

// Undo last drawn circle
function undo() {
  const last = drawings.pop();
  if (last) {
    svg.removeChild(last);
  }
  updateUndoButton();
}

// Update undo button state
function updateUndoButton() {
  undoBtn.disabled = drawings.length === 0;
}

// Bind undo button click
undoBtn.addEventListener('click', undo);

// Initially disable undo button
updateUndoButton();
