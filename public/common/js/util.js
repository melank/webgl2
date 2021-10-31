'use strict';

const utils = {
    
    // 与えられたIDを持つDOM要素を取り出して返す
    getCanvas(id) {
        const canvas = document.getElementById(id);

        if (!canvas) {
            console.error(`There is no canvas with id ${id} on this page.`);
            return null;
        }

        return canvas;
    },

    // 与えられたcanvas要素のWebGL2コンテキストを返す
    getGLContext(canvas) {
        return canvas.getContext('webgl2') || console.error('WebGL2 is not available in your browser');
    }
};