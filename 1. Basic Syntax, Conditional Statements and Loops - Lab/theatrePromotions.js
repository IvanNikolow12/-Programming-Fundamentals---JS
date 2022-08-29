function theatrePromotions (num1 , num2){

    let day = num1;
    let age = num2;
    let priceOfTicket = 0;

    switch(day){
        case "Weekday":
            if (age >= 0 && age <= 18){
                priceOfTicket = 12;
                console.log(`${priceOfTicket}$`);
            } else if (age > 18 && age <=64){
                priceOfTicket = 18;
                console.log(`${priceOfTicket}$`);
            } else if (age > 64 && age <= 122){
                priceOfTicket = 12;
                console.log(`${priceOfTicket}$`);
            } else {
                console.log("Error!")
            }
            break;
            case "Weekend" :
                if (age >= 0 && age <= 18){
                    priceOfTicket = 15;
                    console.log(`${priceOfTicket}$`);
                } else if (age > 18 && age <= 64){
                    priceOfTicket = 20;
                    console.log(`${priceOfTicket}$`);
                } else if (age > 64 && age <= 122){
                    priceOfTicket = 15;
                    console.log(`${priceOfTicket}$`);
                } else {
                    console.log("Error!");
                }
                break;
                case "Holiday" :
                    if (age >= 0 && age <= 18){
                        priceOfTicket = 5;
                        console.log(`${priceOfTicket}$`);
                    } else if (age > 18 && age <= 64){
                        priceOfTicket = 12;
                        console.log(`${priceOfTicket}$`);
                    } else if (age > 64 && age <= 122){
                        priceOfTicket = 10;
                        console.log(`${priceOfTicket}$`);
                    } else {
                        console.log("Error!");
                    }
                    break;
                    default : console.log("Error!"); break;
                }
                               
}
theatrePromotions("Weekday",  "-42")