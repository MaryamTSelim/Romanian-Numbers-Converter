for(let i = 1 ; i <= 20 ; i++){
let enter: number = i;
let str: string = "";
do {
 if (enter >=10) {
        str += "X"
        enter -= 10;
    }
    else if ((enter + 1) % 5 == 0) {
        str += "I"
        enter++;
    }
    else if (enter>=5) {
        str += "V";
        enter -= 5;
    }
    else if (enter > 0) {
        str += "I"
        enter--;
    }
} while (enter > 0)
console.log(i+"\t"+str);
}