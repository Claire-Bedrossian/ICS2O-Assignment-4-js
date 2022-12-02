// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-4-js/sw.js", {
    scope: "/ICS2O-Assignment-4-js/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  	var coffeeSizePrice = parseFloat(document.getElementById('coffee-size').value)
  	var extrasPrice = parseFloat(document.getElementById('extras').value)
    var totalPriceDiscount = coffeeSizePrice + extrasPrice + (0.13 * coffeeSizePrice + extrasPrice) - (0.25 * coffeeSizePrice + extrasPrice)
    var totalPrice = coffeeSizePrice + extrasPrice + (0.13 * coffeeSizePrice + extrasPrice)
  if (coffeeSizePrice + extrasPrice = 3.50) {
    document.getElementById("ticket-pricing").innerHTML = totalPriceDiscount
  } else {
    document.getElementById("ticket-pricing").innerHTML = totalPrice
  }
}
