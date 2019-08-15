"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConnectPlugin_1 = __importDefault(require("./scenes/ConnectPlugin"));
const ConnectWithImports_1 = __importDefault(require("./scenes/ConnectWithImports"));
const Menu_1 = __importDefault(require("./scenes/Menu"));
exports.routes = [
    {
        exact: true,
        path: '/',
        component: Menu_1.default,
    },
    {
        path: '/plugins/:plugin',
        component: ConnectPlugin_1.default,
    },
    {
        path: '/imports',
        component: ConnectWithImports_1.default,
    },
];
exports.menuRoutes = [
    {
        label: 'Connect with O3',
        path: '/plugins/O3',
    },
    {
        label: 'Connect with NOS',
        path: '/plugins/NOS',
    },
    {
        label: 'Import using keys',
        path: '/imports',
    },
];
