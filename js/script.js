// Created by: Ioana
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
//This function calculates area and perimeter of rectangle
function calculate () {
  // input
 const length = parseFloat(document.getElementById('length-of-triangle').value)
 const width = parseFloat(document.getElementById('width-of-triangle').value)

  // process
  const area = (length * width / 2)

  // output
  document.getElementById('area').innerHTML = 'The area is: ' + area + ' cm²'
}