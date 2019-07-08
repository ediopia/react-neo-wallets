"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConnectO3_1 = __importDefault(require("./scenes/ConnectO3"));
const ConnectNos_1 = __importDefault(require("./scenes/ConnectNos"));
const LocalImports_1 = __importDefault(require("./scenes/LocalImports"));
const Menu_1 = __importDefault(require("./scenes/Menu"));
exports.routes = [
    {
        exact: true,
        label: "Connect with O3",
        path: "/",
        component: Menu_1.default
    },
    {
        label: "Connect with O3",
        path: "/o3",
        component: ConnectO3_1.default
    },
    {
        label: "Connect with NOS",
        path: "/nos",
        component: ConnectNos_1.default
    },
    {
        label: "Import using keys",
        path: "/imports",
        component: LocalImports_1.default
    },
];
