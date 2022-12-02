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
  var coffeeSizePrice = parseFloat(document.getElementById("coffee-size").value)
  var extrasPrice = parseFloat(document.getElementById("extras").value)
  var subtotal = coffeeSizePrice + extrasPrice
  var finalPriceDiscount = subtotal + 0.13 * subtotal - 0.25 * subtotal
  var finalPrice = subtotal + 0.13 * subtotal

  if (subtotal >= 3.5) {
    document.getElementById(
      "total-price"
    ).innerHTML = `Coffee Type: $ ${coffeeSizePrice.toFixed(
      2
    )}</br>Extras: $ ${extrasPrice.toFixed(
      2
    )}</br>Your subtotal is: $ ${subtotal.toFixed(
      2
    )}</br>HST: 13% </br>Discount: 25% </br>Your final cost will be: $ ${finalPriceDiscount.toFixed(
      2
    )}`
  } else {
    document.getElementById(
      "total-price"
    ).innerHTML = `Coffee Type: $ ${coffeeSizePrice.toFixed(
      2
    )}</br>Extras: $ ${extrasPrice.toFixed(
      2
    )}</br>Your subtotal is: $ ${subtotal.toFixed(
      2
    )}</br>HST: 13% </br>Your final cost will be: $ ${finalPrice.toFixed(2)}`
  }
}
