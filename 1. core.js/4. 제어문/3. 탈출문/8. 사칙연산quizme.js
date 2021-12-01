

alert('~~~~~재밌는 사칙연산 게임~~~~~\n즐겁게 문제를 푸시다가 지겨우면 0이라고 치세요!');
var level = +prompt(`난이도를 설정합니다!\n[1.상 (1 ~ 100) | 2.중 (1 ~ 50) | 3.하 (1 ~ 20)]`);

// var numA = Math.floor(Math.random() * 20) + 1;
// var numB = Math.floor(Math.random() * 20) + 1;
var answerNum = 0;
var falseNum = 0;

var qNum = 1;

if (level === 1) {
    var numA = Math.floor(Math.random() * 100) + 1;
    var numB = Math.floor(Math.random() * 100) + 1;
    while (true) {
        var userAnswer = +prompt(`Q${qNum}.  ${numA} + ${numB} = ??`);
        if (userAnswer === numA + numB) {
            alert('정답입니다!');
            qNum++;
            answerNum++;
        } else if (userAnswer === 0) {
            alert(`게임을 종료합니다!\n--------\n정답횟수 : ${answerNum}회 , 틀린횟수 : ${falseNum}회`);
            break;
        } else if (userAnswer !== numA + numB) {
            alert('틀렸습니다~');
            qNum++;
            falseNum++;
        }   var numA = Math.floor(Math.random() * 100) + 1;
            var numB = Math.floor(Math.random() * 100) + 1;
    }
} else if (level === 2) {
    var numA = Math.floor(Math.random() * 50) + 1;
    var numB = Math.floor(Math.random() * 50) + 1;
    while (true) {
        var userAnswer = +prompt(`Q${qNum}.  ${numA} + ${numB} = ??`);
        if (userAnswer === numA + numB) {
            alert('정답입니다!');
            qNum++;
            answerNum++;
        } else if (userAnswer === 0) {
            alert(`게임을 종료합니다!\n--------\n정답횟수 : ${answerNum}회 , 틀린횟수 : ${falseNum}회`);
            break;
        } else if (userAnswer !== numA + numB) {
            alert('틀렸습니다~');
            qNum++;
            falseNum++;
        }   var numA = Math.floor(Math.random() * 50) + 1;
            var numB = Math.floor(Math.random() * 50) + 1;
    }
} else if (level === 3) {
    var numA = Math.floor(Math.random() * 20) + 1;
    var numB = Math.floor(Math.random() * 20) + 1;
    while (true) {
        var userAnswer = +prompt(`Q${qNum}.  ${numA} + ${numB} = ??`);
        if (userAnswer === numA + numB) {
            alert('정답입니다!');
            qNum++;
            answerNum++;
        } else if (userAnswer === 0) {
            alert(`게임을 종료합니다!\n--------\n정답횟수 : ${answerNum}회 , 틀린횟수 : ${falseNum}회`);
            break;
        } else if (userAnswer !== numA + numB) {
            alert('틀렸습니다~');
            qNum++;
            falseNum++;
        }   var numA = Math.floor(Math.random() * 20) + 1;
            var numB = Math.floor(Math.random() * 20) + 1;
    }
}