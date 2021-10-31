import { gl } from './gl-init.js';

'use strict';

function updateClearColor(...color) {
    gl.clearColor(...color);        // クリアする色を設定
    gl.clear(gl.COLOR_BUFFER_BIT);  // 指定した色でクリア
    gl.viewport(0, 0, 0, 0);
}

function checkKey(event) {
    switch(event.keyCode) {
        case 49: { // 数字の1:緑
            updateClearColor(0.2, 0.8, 0.2, 1.0);
            break;
        }
        case 50: { // 数字の2:青
            updateClearColor(0.2, 0.2, 0.8, 1.0);
            break;
        }
        case 51: { // 数字の3:赤
            updateClearColor(0.8, 0.2, 0.2, 1.0);
            break;
        }
        case 52: { // 数字の4:ランダムに色を決める
            updateClearColor(Math.random(), Math.random(), Math.random(), 1.0);
            break;
        }
        case 53: { // 数字の5:色を取得
            const color = gl.getParameter(gl.COLOR_CLEAR_VALUE);

            alert(`clearColor = (
                ${color[0].toFixed(1)},
                ${color[1].toFixed(1)},
                ${color[2].toFixed(1)}
            )`);

            window.focus();
            break;
        }
    }
}
window.onkeydown = checkKey;