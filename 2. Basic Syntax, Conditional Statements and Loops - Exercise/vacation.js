function vacation(input) {
  let group = Number(input[0]);
  let kind = input[1];
  let day = input[2];
  let price = 0;
  let totalPrice = 0;

  switch (day) {
    case "Friday":
      if (kind === "Students") {
        price = 8.45;
      } else if (kind === "Business") {
        price = 10.9;
      } else if (kind === "Regular") {
        price = 15;
      }
      break;
    case "Saturday":
      if (kind === "Students") {
        price = 9.8;
      } else if (kind === "Business") {
        price = 15.6;
      } else if (kind === "Regular") {
        price = 20;
      }
      break;
    case "Sunday":
      if (kind === "Students") {
        price = 10.46;
      } else if (kind === "Business") {
        price = 16;
      } else if (kind === "Regular") {
        price = 22.5;
      }
      break;
  }
  totalPrice = group * price;
  if (kind === "Students") {
    if (group >= 30) {
      totalPrice = totalPrice * 0.85;
    }
  } else if (kind === "Business") {
    if (group >= 100) {
      group = group - 10;
    }
  } else if (kind === "Regular") {
    if (group >= 10 && group <= 20) {
      totalPrice *= 0.95;
    }
  }
  console.log(`Total price is: ${totalPrice.toFixed(2)}`);
}
vacation([30, "Students", "Sunday"]);
vacation([40, "Regular", "Saturday"]);
