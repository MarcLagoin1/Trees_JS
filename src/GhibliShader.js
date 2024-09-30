import {Color, Vector3} from "three";
import { fragmentShader, vertexShader } from "./SimpleShader";

export const GhibliShader = {

    uniforms: {
        colorMap: {
            value: [
                new Color('#427062'),
                new Color('#33594e'),
                new Color('#234549'),
                new Color('#1e363f'),
            ]
        },
        brightnessThreshold: {
            value: [0.9, 0.45, 0.001],
        },
        lightPosition: {
            value: new Vector3(15, 15, 15),
        },
    },

    vertexShader : `
        void main() {
            // set precision types
            precision highp float;
            precision highp int;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

        }
    `,

    fragmentShader : `
        uniform vec3 colorMap[4];
        uniform float brightnessThreshold[3];
        uniform vec3 lightPosition;

        void main() {

            vec4 final = vec4(colorMap[0], 1);

            gl_FragColor = vec4(final);
        }
    `,

};