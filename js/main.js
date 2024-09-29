window.addEventListener("load", () => {
    document.getElementsByClassName("blocky")[0].hidden = true;
    document.getElementsByClassName("blocky")[1].hidden = true;
    document.getElementsByClassName("result-q")[0].hidden = true;
    document.getElementById("counter4by4").hidden = true;
});

function removeMatrix3by3() {
    document.getElementsByClassName('blocky')[0].hidden = true;
    document.getElementsByClassName('blocky')[1].hidden = true;
    document.getElementsByClassName('block')[0].hidden = false;
    document.getElementsByClassName('block')[1].hidden = false;
    document.getElementsByClassName("result-p")[0].hidden = false;
    document.getElementsByClassName("result-q")[0].hidden = true;
    document.getElementById("counter4by4").hidden = true;
    document.getElementById("counter").hidden = false;
}

function removeMatrix4by4() {
    document.getElementsByClassName('block')[0].hidden = true;
    document.getElementsByClassName('block')[1].hidden = true;
    document.getElementsByClassName('blocky')[0].hidden = false;
    document.getElementsByClassName('blocky')[1].hidden = false;
    document.getElementsByClassName("result-p")[0].hidden = true;
    document.getElementsByClassName("result-q")[0].hidden = false;
    document.getElementById("counter4by4").hidden = false;
    document.getElementById("counter").hidden = true;
}

function counter() {
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

    if (act == '*') {
        result1 = (num1 * num1_) + (num2 * num4_) + (num3 * num7_);
        result2 = (num1 * num2_) + (num2 * num5_) + (num3 * num8_);
        result3 = (num1 * num3_) + (num2 * num6_) + (num3 * num9_);
        result4 = (num4 * num1_) + (num5 * num4_) + (num6 * num7_);
        result5 = (num4 * num2_) + (num5 * num5_) + (num6 * num8_);
        result6 = (num4 * num3_) + (num5 * num6_) + (num6 * num9_);
        result7 = (num7 * num1_) + (num8 * num4_) + (num9 * num7_);
        result8 = (num7 * num2_) + (num8 * num5_) + (num9 * num8_);
        result9 = (num7 * num3_) + (num8 * num6_) + (num9 * num9_);
    }
    
    const results = [result1, result2, result3, result4, result5, result6, result7, result8, result9];
    for (let i = 0; i < results.length; i++) {
        document.getElementById(`result${i + 1}`).innerHTML = results[i];
    }
}

function counter4by4() {
    const numbers = [
        ["Num1", "Num1_"],["Num2", "Num2_"],
        ["Num3", "Num3_"],["Num4", "Num4_"],
        ["Num5", "Num5_"],["Num6", "Num6_"],
        ["Num7", "Num7_"],["Num8", "Num8_"],
        ["Num9", "Num9_"],["Num10", "Num10_"],
        ["Num11", "Num11_"],["Num12", "Num12_"],
        ["Num13", "Num13_"],["Num14", "Num14_"],
        ["Num15", "Num15_"],["Num16", "Num16_"],
    ];
      
    numbers.forEach(([Num, Num_]) => {
        window[Num] = Number(document.getElementById(Num).value);
        window[Num_] = Number(document.getElementById(Num_).value);
        console.log(Num1);
        
    });
      
    if (act == '+' || act == '-') {
        Result1 = (act == '+') ? Num1 + Num1_ : Num1 - Num1_;
        Result2 = (act == '+') ? Num2 + Num2_ : Num2 - Num2_;
        Result3 = (act == '+') ? Num3 + Num3_ : Num3 - Num3_;
        Result4 = (act == '+') ? Num4 + Num4_ : Num4 - Num4_;
        Result5 = (act == '+') ? Num5 + Num5_ : Num5 - Num5_;
        Result6 = (act == '+') ? Num6 + Num6_ : Num6 - Num6_;
        Result7 = (act == '+') ? Num7 + Num7_ : Num7 - Num7_;
        Result8 = (act == '+') ? Num8 + Num8_ : Num8 - Num8_;
        Result9 = (act == '+') ? Num9 + Num9_ : Num9 - Num9_;
        Result10 = (act == '+') ? Num10 + Num10_ : Num10 - Num10_;
        Result11 = (act == '+') ? Num11 + Num11_ : Num11 - Num11_;
        Result12 = (act == '+') ? Num12 + Num12_ : Num12 - Num12_;
        Result13 = (act == '+') ? Num13 + Num13_ : Num13 - Num13_;
        Result14 = (act == '+') ? Num14 + Num14_ : Num14 - Num14_;
        Result15 = (act == '+') ? Num15 + Num15_ : Num15 - Num15_;
        Result16 = (act == '+') ? Num16 + Num16_ : Num16 - Num16_;

    }

    if (act == '*') {
        Result1 = (Num1 * Num1_) + (Num2 * Num5_) + (Num3 * Num9_) + (Num4 * Num13_);
        Result2 = (Num1 * Num2_) + (Num2 * Num6_) + (Num3 * Num10_) + (Num4 * Num14_);
        Result3 = (Num1 * Num3_) + (Num2 * Num7_) + (Num3 * Num11_) + (Num4 * Num15_);
        Result4 = (Num1 * Num4_) + (Num2 * Num8_) + (Num3 * Num12_) + (Num4 * Num16_);

        Result5 = (Num5 * Num1_) + (Num6 * Num5_) + (Num7 * Num9_) + (Num8 * Num13_);
        Result6 = (Num5 * Num2_) + (Num6 * Num6_) + (Num7 * Num10_) + (Num8 * Num14_);
        Result7 = (Num5 * Num3_) + (Num6 * Num7_) + (Num7 * Num11_) + (Num8 * Num15_);
        Result8 = (Num5 * Num4_) + (Num6 * Num8_) + (Num7 * Num12_) + (Num8 * Num16_);

        Result9 = (Num9 * Num1_) + (Num10 * Num5_) + (Num11 * Num9_) + (Num12 * Num13_);
        Result10 = (Num9 * Num2_) + (Num10 * Num6_) + (Num11 * Num10_) + (Num12 * Num14_);
        Result11 = (Num9 * Num3_) + (Num10 * Num7_) + (Num11 * Num11_) + (Num12 * Num15_);
        Result12 = (Num9 * Num4_) + (Num10 * Num8_) + (Num11 * Num12_) + (Num12 * Num16_);

        Result13 = (Num13 * Num1_) + (Num14 * Num5_) + (Num15 * Num9_) + (Num16 * Num13_);
        Result14 = (Num13 * Num2_) + (Num14 * Num6_) + (Num15 * Num10_) + (Num16 * Num14_);
        Result15 = (Num13 * Num3_) + (Num14 * Num7_) + (Num15 * Num11_) + (Num16 * Num15_);
        Result16 = (Num13 * Num4_) + (Num14 * Num8_) + (Num15 * Num12_) + (Num16 * Num16_);
    }
    
    const Results = [Result1, Result2, Result3, Result4, Result5, Result6, Result7, Result8, Result9, Result10, Result11, Result12, Result13, Result14 ,Result15, Result16];
    for (let i = 0; i < Results.length; i++) {
        document.getElementById(`Result${i + 1}`).innerHTML = Results[i];
    }
}

function countDeterminant () {
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

function countDeterminant4by4() {
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

function countDeterminant4by4() {
    const numbers = [
        ["NUMBER1"],["NUMBER2"],["NUMBER3"],
        ["NUMBER4"],["NUMBER5"],["NUMBER6"],
        ["NUMBER7"],["NUMBER8"],["NUMBER9"]
    ];

    numbers.forEach(([NUMBER])=> {
        window[NUMBER] = Number(document.getElementById(NUMBER).value);
    });

    NUMBER1 = NUMBER1 === '' ? 0 : NUMBER1;
    NUMBER2 = NUMBER2 === '' ? 0 : NUMBER2;
    NUMBER3 = NUMBER3 === '' ? 0 : NUMBER3;
    NUMBER4 = NUMBER4 === '' ? 0 : NUMBER4;
    NUMBER5 = NUMBER5 === '' ? 0 : NUMBER5;
    NUMBER6 = NUMBER6 === '' ? 0 : NUMBER6;
    NUMBER7 = NUMBER7 === '' ? 0 : NUMBER7;
    NUMBER8 = NUMBER8 === '' ? 0 : NUMBER8;
    NUMBER9 = NUMBER9 === '' ? 0 : NUMBER9;
    
    if (NUMBER1.value != '') {
        REST1 = (NUMBER5 * NUMBER9) - (NUMBER8 * NUMBER6);
        RESTY2 = (NUMBER2 * NUMBER9) - (NUMBER8 * NUMBER3);
        REST3 = (NUMBER2 * NUMBER6) - (NUMBER5 * NUMBER3);
        RESTY4 = (NUMBER4 * NUMBER9) - (NUMBER7 * NUMBER6);
        REST5 = (NUMBER1 * NUMBER9) - (NUMBER7 * NUMBER3);
        RESTY6 = (NUMBER1 * NUMBER6) - (NUMBER4 * NUMBER3);
        REST7 = (NUMBER4 * NUMBER8) - (NUMBER7 * NUMBER5);
        RESTY8 = (NUMBER1 * NUMBER8) - (NUMBER7 * NUMBER2);
        REST9 = (NUMBER1 * NUMBER5) - (NUMBER4 * NUMBER2);
        REST2 = RESTY2 * -1;
        REST4 = RESTY4 * -1;
        REST6 = RESTY6 * -1;
        REST8 = RESTY8 * -1;
        formul1 = `(${NUMBER5} * ${NUMBER9}) - (${NUMBER8} * ${NUMBER6}) = ${REST1}`;
        formul2 = `(${NUMBER2} * ${NUMBER9}) - (${NUMBER8} * ${NUMBER3}) * -1 = ${REST2}`;
        formul3 = `(${NUMBER2} * ${NUMBER6}) - (${NUMBER5} * ${NUMBER3}) = ${REST3}`;
        formul4 = `(${NUMBER4} * ${NUMBER9}) - (${NUMBER7} * ${NUMBER6}) * -1 = ${REST4}`;
        formul5 = `(${NUMBER1} * ${NUMBER9}) - (${NUMBER7} * ${NUMBER3}) = ${REST5}`;
        formul6 = `(${NUMBER1} * ${NUMBER6}) - (${NUMBER4} * ${NUMBER3}) * -1 = ${REST6}`;
        formul7 = `(${NUMBER4} * ${NUMBER8}) - (${NUMBER7} * ${NUMBER5}) = ${REST7}`;
        formul8 = `(${NUMBER1} * ${NUMBER8}) - (${NUMBER7} * ${NUMBER2}) * -1 = ${REST8}`;
        formul9 = `(${NUMBER1} * ${NUMBER5}) - (${NUMBER4} * ${NUMBER2}) = ${REST9}`;
    }

    const Results = [REST1, REST2, REST3, REST4, REST5, REST6, REST7, REST8, REST9];
    for (let i = 0; i < Results.length; i++) {
        document.getElementById(`REST${i + 1}`).innerHTML = Results[i];
    }

    if (NUMBER1.value != '') {
        RESULT1 = (NUMBER1 * REST1) + (NUMBER2 * REST4) + (NUMBER3 * REST7);
        RESULT2 = (NUMBER1 * REST2) + (NUMBER2 * REST5) + (NUMBER3 * REST8);
        RESULT3 = (NUMBER1 * REST3) + (NUMBER2 * REST6) + (NUMBER3 * REST9);
        RESULT4 = (NUMBER4 * REST1) + (NUMBER5 * REST4) + (NUMBER6 * REST7);
        RESULT5 = (NUMBER4 * REST2) + (NUMBER5 * REST5) + (NUMBER6 * REST8);
        RESULT6 = (NUMBER4 * REST3) + (NUMBER5 * REST6) + (NUMBER6 * REST9);
        RESULT7 = (NUMBER7 * REST1) + (NUMBER8 * REST4) + (NUMBER9 * REST7);
        RESULT8 = (NUMBER7 * REST2) + (NUMBER8 * REST5) + (NUMBER9 * REST8);
        RESULT9 = (NUMBER7 * REST3) + (NUMBER8 * REST6) + (NUMBER9 * REST9);
    }

    if (NUMBER1.value != '') {
        sum1 = (NUMBER1 * NUMBER5 * NUMBER9) + (NUMBER2 * NUMBER6 * NUMBER7) + (NUMBER3 * NUMBER4 * NUMBER8);
        sum2 = (NUMBER3 * NUMBER5 * NUMBER7) + (NUMBER2 * NUMBER4 * NUMBER9) + (NUMBER1 * NUMBER6 * NUMBER8);
        formul10 = `(${(NUMBER1 * NUMBER5 * NUMBER9)} + ${(NUMBER2 * NUMBER6 * NUMBER7)} + ${(NUMBER3 * NUMBER4 * NUMBER8)}) - (${(NUMBER3 * NUMBER5 * NUMBER7)} + ${(NUMBER2 * NUMBER4 * NUMBER9)} + ${(NUMBER1 * NUMBER6 * NUMBER8)}) = ${(sum1 - sum2)}`;
    } else {
        formul10 = "?"
    }

    

    const RESULTS = [RESULT1, RESULT2, RESULT3, RESULT4, RESULT5, RESULT6, RESULT7, RESULT8, RESULT9];
    for (let i = 0; i < RESULTS.length; i++) {
        document.getElementById(`RESULT${i + 1}`).innerHTML = RESULTS[i];
    }

    document.getElementById("formul1").innerHTML = formul1;
    document.getElementById("formul2").innerHTML = formul2;
    document.getElementById("formul3").innerHTML = formul3;
    document.getElementById("formul4").innerHTML = formul4;
    document.getElementById("formul5").innerHTML = formul5;
    document.getElementById("formul6").innerHTML = formul6;
    document.getElementById("formul7").innerHTML = formul7;
    document.getElementById("formul8").innerHTML = formul8;
    document.getElementById("formul9").innerHTML = formul9;

    document.getElementById("formul10").innerHTML = formul10;
}