"use strict";

function zero_first_format(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}

function date_time() {
  const current_datetime = new Date();
  const day = zero_first_format(current_datetime.getDate());
  const month = zero_first_format(current_datetime.getMonth() + 1);
  const year = current_datetime.getFullYear();

  return day + "." + month + "." + year;
}

document.getElementById("current_date_time_block").innerHTML = date_time();
