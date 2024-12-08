let test = "balls";
let testing = "benas";
function createFragment(ctx) {
const div = document.createElement('div');
div.setAttribute('class', 'test');
const nfbCKCJn = document.createElement('div');
const lgJygzXa = document.createElement('p');
lgJygzXa.innerHTML += test;
lgJygzXa.innerHTML += 'tyets';
nfbCKCJn.appendChild(lgJygzXa);
const DXgPstaF = document.createElement('p');
DXgPstaF.innerHTML += 'test';
nfbCKCJn.appendChild(DXgPstaF);
div.appendChild(nfbCKCJn);
const ruNHNybj = document.createElement('p');
ruNHNybj.innerHTML += testing;
div.appendChild(ruNHNybj);
div.innerHTML += 'test';

return div;
}
const ctx = { test, testing  }
document.body.appendChild(createFragment(ctx));
