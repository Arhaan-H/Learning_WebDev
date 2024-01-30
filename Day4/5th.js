const lightOne = document.getElementById('light-one');
    const lightTwo = document.getElementById('light-two');
    const lightThree = document.getElementById('light-three');

    const computedColorOne = window.getComputedStyle(lightOne).getPropertyValue('background-color');
    const computedColorTwo = window.getComputedStyle(lightTwo).getPropertyValue('background-color');
    const computedColorThree = window.getComputedStyle(lightThree).getPropertyValue('background-color');

    lightOne.style.backgroundColor = computedColorThree;
    lightTwo.style.backgroundColor = computedColorOne;
    lightThree.style.backgroundColor = computedColorTwo;