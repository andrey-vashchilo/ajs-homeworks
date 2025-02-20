"use strict";

export class ArrayBufferConverter {
    constructor(data) {
        this.data = data;
        this.bufferView = new Uint8Array(new ArrayBuffer(this.data.length));
        this.string = String()
    }

    load() {
        for (let i = 0; i < this.bufferView.length; i += 1) {this.bufferView[i] = this.data.charCodeAt(i)}
        return this.bufferView;
    }

    toString() {
        for (let i = 0; i < this.bufferView.length; i += 1) {this.string += String.fromCharCode(this.bufferView[i])}
        return this.string;
    }
}