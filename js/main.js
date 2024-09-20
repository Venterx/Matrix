function func() {
    var result;
    var result2;
    var result3;
    var result4;
    var result5;
    var result6;
    var result7;
    var result8;
    var result9;

    var num1 = Number(document.getElementById("num1").value);
    var num1_ = Number(document.getElementById("num1_").value);
    var num2 = Number(document.getElementById("num2").value);
    var num2_ = Number(document.getElementById("num2_").value);
    var num3 = Number(document.getElementById("num3").value);
    var num3_ = Number(document.getElementById("num4_").value);
    var num4 = Number(document.getElementById("num4").value);
    var num4_ = Number(document.getElementById("num4_").value);
    var num5 = Number(document.getElementById("num5").value);
    var num5_ = Number(document.getElementById("num5_").value);
    var num6 = Number(document.getElementById("num6").value);
    var num6_ = Number(document.getElementById("num6_").value);
    var num7 = Number(document.getElementById("num7").value);
    var num7_ = Number(document.getElementById("num7_").value);
    var num8 = Number(document.getElementById("num8").value);
    var num8_ = Number(document.getElementById("num8_").value);
    var num9 = Number(document.getElementById("num9").value);
    var num9_ = Number(document.getElementById("num9_").value);

    if (act == '+') {
        result = num1 + num1_;
    } else if (act == '-') {
        result = num1 - num1_;
    }

    if (act == '+') {
        result2 = num2 + num2_;
    } else if (act == '-') {
        result2 = num2 - num2_;
    }

    if (act == '+') {
        result3 = num3 + num3_;
    } else if (act == '-') {
        result3 = num3 - num3_;
    }

    if (act == '+') {
        result4 = num4 + num4_;
    } else if (act == '-') {
        result4 = num4 - num4_;
    }

    if (act == '+') {
        result5 = num5 + num5_;
    } else if (act == '-') {
        result5 = num5 - num5_;
    }

    if (act == '+') {
        result6 = num6 + num6_;
    } else if (act == '-') {
        result6 = num6 - num6_;
    }

    if (act == '+') {
        result7 = num7 + num7_;
    } else if (act == '-') {
        result7 = num7 - num7_;
    }

    if (act == '+') {
        result8 = num8 + num8_;
    } else if (act == '-') {
        result8 = num8 - num8_;
    }

    if (act == '+') {
        result9 = num9 + num9_;
    } else if (act == '-') {
        result9 = num9 - num9_;
    }

    document.getElementById("result").innerHTML = result;
    document.getElementById("result2").innerHTML = result2;
    document.getElementById("result3").innerHTML = result3;
    document.getElementById("result4").innerHTML = result4;
    document.getElementById("result5").innerHTML = result5;
    document.getElementById("result6").innerHTML = result6;
    document.getElementById("result7").innerHTML = result7;
    document.getElementById("result8").innerHTML = result8;
    document.getElementById("result9").innerHTML = result9;
}