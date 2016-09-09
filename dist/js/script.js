(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var particle = [];

for (var i = 0; i < 100; i++) {
    particle[i] = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        v_x: -5 + Math.random() * 10,
        v_y: -5 + Math.random() * 10
    };
}

setInterval(function () {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < particle.length; i++) {
        context.beginPath();
        context.arc(particle[i].x, particle[i].y, 4, 0, 2 * Math.PI);
        context.closePath();
        context.fillStyle = 'rgba(0, 200, 255, 1)';

        particle[i].x += particle[i].v_x;
        particle[i].y += particle[i].v_y;

        if (particle[i].x < 0 || particle[i].x > canvas.width) {
            particle[i].x -= particle[i].v_x;
            particle[i].v_x *= -1;
        }

        if (particle[i].y < 0 || particle[i].y > canvas.height) {
            particle[i].y -= particle[i].v_y;
            particle[i].v_y *= -1;
        }

        //context.globalCompositeOperation = 'lighter';
        context.fill();

        for (var other_i = i + 1; other_i < particle.length; other_i++) {
            var DIST_MAX = 15000;
            var dist = Math.pow(particle[other_i].x - particle[i].x, 2) + Math.pow(particle[other_i].y - particle[i].y, 2);
            if (dist < DIST_MAX) {
                context.beginPath();
                context.moveTo(particle[i].x, particle[i].y);
                context.lineTo(particle[other_i].x, particle[other_i].y);
                context.strokeStyle = 'rgba(0, 200, 200, ' + (1 - dist / DIST_MAX) + ')';
                context.lineWidth = 2;
                context.stroke();
            }
        }
    }
}, 50);

},{}]},{},[1]);
