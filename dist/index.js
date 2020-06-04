"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.danclick = void 0;
exports.danclick = (element) => {
    cy.get(element).click();
};
