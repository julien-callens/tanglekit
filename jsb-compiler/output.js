let test = 'balls';
let testing = 'benas';
function createFragment(ctx) {
const div = document.createElement('div');
div.setAttribute('class', 'test');
div.setAttribute('bean', 'bean');
const YaaxcRhf = document.createElement('p');
YaaxcRhf.innerHTML += test;
div.appendChild(YaaxcRhf);
const wNCFWiGp = document.createElement('p');
wNCFWiGp.innerHTML += testing;
div.appendChild(wNCFWiGp);
div.innerHTML += 'test';

return div;
}
const ctx = { test, testing };
document.body.appendChild(createFragment(ctx));
