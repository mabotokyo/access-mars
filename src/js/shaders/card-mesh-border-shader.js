// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * card-mesh-border-shader
 * 
 */

export const uniforms = {
	color: { value: new THREE.Color() },
	animIn: { value: 1 },
	hoverIn: { value: 1 },
};

export const vertexShader = [
	
	'varying vec2 vUV;',

	'void main() {',
		'vUV = uv;',
		'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
	'}'

].join( '\n' );

export const fragmentShader = [

	'uniform vec3 color;',
	'uniform float animIn;',
	'uniform float hoverIn;',

	'varying vec2 vUV;',

	'void main() {',
		'if ( vUV.y >= hoverIn || vUV.x >= animIn ) discard;',
		'gl_FragColor = vec4( color, 1.0 );',
	'}'

].join( '\n' );