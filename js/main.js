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

