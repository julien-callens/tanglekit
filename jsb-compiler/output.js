let test = 1;
let testing = true;
let test2 = "test";

function createFragment(ctx) {
    const div = document.createElement('div');
    div.setAttribute('class', 'test');
    const XjkqxEBL = document.createElement('div');
    const VzCUHHIM = document.createElement('p');
    VzCUHHIM.innerHTML += test;
    VzCUHHIM.innerHTML += 'tyets';
    XjkqxEBL.appendChild(VzCUHHIM);
    const apccgFHN = document.createElement('p');
    apccgFHN.innerHTML += 'test';
    XjkqxEBL.appendChild(apccgFHN);
    div.appendChild(XjkqxEBL);
    const xAzbThmb = document.createElement('p');
    xAzbThmb.innerHTML += testing;
    div.appendChild(xAzbThmb);
    div.innerHTML += 'test';

    return div;
}

const ctx = {test, testing, test2}
document.body.appendChild(createFragment(ctx));
