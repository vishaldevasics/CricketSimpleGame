let age = 8;
        let gender = 'Female';
        let ticketFare = 100;
        if(age<5) ticketFare = 0;
        else if(age>65) ticketFare = 30 * ticketFare / 100;
        else if(gender == 'Female') ticketFare = ticketFare/2;
        else if(age>=5 && age <=8) ticketFare = 60*ticketFare/100;
        console.log(ticketFare);