

//옆으로 긴 직사각형을 그립니다. 한변(1) 7, 한변(2) 3

var width = +prompt('한 변(1)');
var height = +prompt('한 변(2)');

// 가로 세로 보정
if (width < height) {
    var t = width;
    width = height;
    height = t;
}

var result = '';

for (var m = 1; m <= height; m++) {
    for (var n = 1; n <= width; n++) {
        result += '*  ';
    }
    result += '\n';
}
alert(result);
