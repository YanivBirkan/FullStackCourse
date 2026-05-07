//ex28

function greatestDevisor(num1 , num2){
    var devidor = (num1<num2) ? num1 : num2;

    while (devidor>0){
        if(num1%devidor===0 && num2%devidor===0){
            return devidor;
        }
        devidor--;
    }
} 