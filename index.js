document['getElementById']("login-form")['addEventListener']("submit", function (_0x5a2d4b) {
    _0x5a2d4b['preventDefault']();
    var _0x1001d6 = document['getElementById']("username")['value'];
    var _0x1c90a1 = document['getElementById']("password")['value'];
    var _0x487b3b = document['getElementById']("alert");
    var _0x11e0e4 = document['getElementById']("alert-message");
    if (_0x1001d6 === hexToString("546f6d") && _0x1c90a1 === hexToString("313530383036")) {
        localStorage['setItem']("isLoggedIn", !![]);
        window['location']['href'] = "./src/main/main.html";
    } else {
        _0x11e0e4['textContent'] = hexToString("4e6f6d206475277573657275696f2071756520706173736520696e636f72726563742e");
        _0x487b3b['classList']['add']("show");
        setTimeout(function () {
            _0x487b3b['classList']['remove']("show");
        }, 0xbb8);
        document['querySelector'](".login-container")['style']['animation'] = "shake 0.5s";
        setTimeout(function () {
            document['querySelector'](".login-container")['style']['animation'] = "";
        }, 0x1f4);
    }
});

function hexToString(_0x5cf97d) {
    var _0x3b97df = '';
    for (var _0x3f0ac0 = 0x0; _0x3f0ac0 < _0x5cf97d['length']; _0x3f0ac0 += 0x2) {
        _0x3b97df += String['fromCharCode'](parseInt(_0x5cf97d['substr'](_0x3f0ac0, 0x2), 0x10));
    }
    return _0x3b97df;
}