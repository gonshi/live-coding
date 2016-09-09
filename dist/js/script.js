(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// cameraの位置
/*
camera.position.y = 1.5;
camera.position.z = 5;
*/

// レンダラー
/*
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
*/

// 物体
/*
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( { color: 0x00ff88 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
*/

// ライト
/*
var light = new THREE.DirectionalLight(0xffffff);
light.position.set(1, 1, 1).normalize();
scene.add( light );
*/

// 描画のルーティン
function render(t) {
   requestAnimationFrame(render);

   // 物体の回転
   /*
   cube.rotation.x += 0.1;
   cube.rotation.y += 0.1;
   */

   // カメラの回転
   /*
   camera.position.x = Math.sin(t / 1000) * 5;
   camera.position.z = Math.cos(t / 1000) * 5;
   */

   // カメラの向き
   /*
   camera.lookAt({x: 0, y: 0, z: 0});
   light.position.x = Math.sin(t / 1000) * 5;
   light.position.z = Math.cos(t / 1000) * 5;
   */

   // 描画
   renderer.render(scene, camera);
}
render();

},{}]},{},[1]);
