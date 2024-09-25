function func() {
    const numbers = [
        ["num1", "num1_"],["num2", "num2_"],
        ["num3", "num3_"],["num4", "num4_"],
        ["num5", "num5_"],["num6", "num6_"],
        ["num7", "num7_"],["num8", "num8_"],
        ["num9", "num9_"]
    ];
      
    numbers.forEach(([num, num_]) => {
        window[num] = Number(document.getElementById(num).value);
        window[num_] = Number(document.getElementById(num_).value);
    });
      
    if (act == '+' || act == '-') {
        result1 = (act == '+') ? num1 + num1_ : num1 - num1_;
        result2 = (act == '+') ? num2 + num2_ : num2 - num2_;
        result3 = (act == '+') ? num3 + num3_ : num3 - num3_;
        result4 = (act == '+') ? num4 + num4_ : num4 - num4_;
        result5 = (act == '+') ? num5 + num5_ : num5 - num5_;
        result6 = (act == '+') ? num6 + num6_ : num6 - num6_;
        result7 = (act == '+') ? num7 + num7_ : num7 - num7_;
        result8 = (act == '+') ? num8 + num8_ : num8 - num8_;
        result9 = (act == '+') ? num9 + num9_ : num9 - num9_;
    }
    
    const results = [result1, result2, result3, result4, result5, result6, result7, result8, result9];
    for (let i = 0; i < results.length; i++) {
        document.getElementById(`result${i + 1}`).innerHTML = results[i];
    }
}

function func2 () {
    const numbers = [
        ["numb1"],["numb2"],["numb3"],
        ["numb4"],["numb5"],["numb6"],
        ["numb7"],["numb8"],["numb9"]
    ];

    numbers.forEach(([numb])=> {
        window[numb] = Number(document.getElementById(numb).value);
    });
    
    numb1 = numb1 === '' ? 0 : numb1;
    numb2 = numb2 === '' ? 0 : numb2;
    numb3 = numb3 === '' ? 0 : numb3;
    numb4 = numb4 === '' ? 0 : numb4;
    numb5 = numb5 === '' ? 0 : numb5;
    numb6 = numb6 === '' ? 0 : numb6;
    numb7 = numb7 === '' ? 0 : numb7;
    numb8 = numb8 === '' ? 0 : numb8;
    numb8 = numb9 === '' ? 0 : numb9;

    if (numb1.value != '') {
        sum1 = (numb1 * numb5 * numb9) + (numb2 * numb6 * numb7) + (numb3 * numb4 * numb8);
        sum2 = (numb3 * numb5 * numb7) + (numb2 * numb4 * numb9) + (numb1 * numb6 * numb8);
        determinant = (sum1 - sum2);
    } else {
        determinant = "?"
    }


    document.getElementById("determinant").innerHTML = determinant;
}

function func3() {
    const numbers = [
        ["numbr1"],["numbr2"],["numbr3"],["numbr4"],
        ["numbr5"],["numbr6"],["numbr7"],["numbr8"],
        ["numbr9"],["numbr10"],["numbr11"],["numbr12"],
        ["numbr13"],["numbr14"],["numbr15"],["numbr16"],
    ];

    numbers.forEach(([numbr])=> {
        window[numbr] = Number(document.getElementById(numbr).value);
    });

    numbr1 = numbr1 === '' ? 0 : numbr1;
    numbr2 = numbr2 === '' ? 0 : numbr2;
    numbr3 = numbr3 === '' ? 0 : numbr3;
    numbr4 = numbr4 === '' ? 0 : numbr4;
    numbr5 = numbr5 === '' ? 0 : numbr5;
    numbr6 = numbr6 === '' ? 0 : numbr6;
    numbr7 = numbr7 === '' ? 0 : numbr7;
    numbr8 = numbr8 === '' ? 0 : numbr8;
    numbr9 = numbr9 === '' ? 0 : numbr9;
    numbr10 = numbr10 === '' ? 0 : numbr10;
    numbr11 = numbr11 === '' ? 0 : numbr11;
    numbr12 = numbr12 === '' ? 0 : numbr12;
    numbr13 = numbr13 === '' ? 0 : numbr13;
    numbr14 = numbr14 === '' ? 0 : numbr14;
    numbr15 = numbr15 === '' ? 0 : numbr15;
    numbr16 = numbr16 === '' ? 0 : numbr16;

    if (numbr1.value != '') {
        sum1 = (numbr6 * numbr11 * numbr16) + (numbr10 * numbr15 * numbr8) + (numbr7 * numbr12 * numbr14);
        sum2 = (numbr14 * numbr11 * numbr8) + (numbr7 * numbr10 * numbr16) + (numbr6 * numbr12 * numbr15);
        res1 = (sum1 - sum2);

        sum3 = (numbr2 * numbr11 * numbr16) + (numbr10 * numbr15 * numbr4) + (numbr3 * numbr14 * numbr12);
        sum4 = (numbr14 * numbr11 * numbr4) + (numbr10 * numbr3 * numbr16) + (numbr2 * numbr12 * numbr15);
        res2 = (sum3 - sum4);

        sum5 = (numbr2 * numbr7 * numbr16) + (numbr4 * numbr6 * numbr15) + (numbr3 * numbr8 * numbr14);
        sum6 = (numbr14 * numbr7 * numbr4) + (numbr6 * numbr3 * numbr16) + (numbr2 * numbr8 * numbr15);
        res3 = (sum5 - sum6);

        sum7 = (numbr2 * numbr7 * numbr12) + (numbr4 * numbr6 * numbr11) + (numbr3 * numbr8 * numbr10);
        sum8 = (numbr10 * numbr7 * numbr4) + (numbr3 * numbr6 * numbr12) + (numbr2 * numbr8 * numbr11);
        res4 = (sum7 - sum8);

        number5 = numbr5 * -1;
        number13 = numbr13 * -1;

        block1 = numbr1 * res1;
        block2 = number5 * res2;
        block3 = numbr9 * res3;
        block4 = number13 * res4;

        resultat = block1 + block2 + block3 + block4;
        formula = `${resultat} = (${numbr1} * ${res1}) + (${number5} * ${res2}) + (${numbr9} * ${res3}) + (${number13} * ${res4})`;
    }

    document.getElementById("resultat").innerHTML = resultat;
    document.getElementById("formula").innerHTML = formula;
}