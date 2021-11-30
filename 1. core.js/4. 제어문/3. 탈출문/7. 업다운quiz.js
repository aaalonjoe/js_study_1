

// 업다운 퀴즈

var random = Math.floor(Math.random() * 50) + 2; 
var opportunity = 4;

for (var n = 1; n < 6; n++) {
    while (true) {
        var num = +prompt('1 ~ 50 사이의 무작위 숫자를 맞춰보세요!!!');
        if (num < random) {
            alert(`UP!!! \n기회가 ${opportunity}번 남았습니다.`); opportunity--; break;
        } else if (num > random) {
            alert(`DOWN!!! \n기회가 ${opportunity}번 남았습니다.`); opportunity--; break;
        } else {
            alert('딩 동 댕 ~~~~ !!'); break;
        } 
    }
}

// while (true) {
//     var num = +prompt('1 ~ 50 사이의 무작위 숫자를 맞춰보세요!!!');
//     if (num < random) {
//         alert(`UP!!! \n기회가 3번 남았습니다.`); break;
//     } else if (num > random) {
//         alert(`DOWN!!! \n기회가 3번 남았습니다.`); break;
//     } else {
//         alert('딩 동 댕 ~~~~ !!'); break;
//     } 
// }

// while (true) {
//     var num = +prompt('1 ~ 50 사이의 무작위 숫자를 맞춰보세요!!!');
//     if (num < random) {
//         alert(`UP!!! \n기회가 2번 남았습니다.`); break;
//     } else if (num > random) {
//         alert(`DOWN!!! \n기회가 2번 남았습니다.`); break;
//     } else {
//         alert('딩 동 댕 ~~~~ !!'); break;
//     } 
// }

// while (true) {
//     var num = +prompt('1 ~ 50 사이의 무작위 숫자를 맞춰보세요!!!');
//     if (num < random) {
//         alert(`UP!!! \n기회가 1번 남았습니다.`); break;
//     } else if (num > random) {
//         alert(`DOWN!!! \n기회가 1번 남았습니다.`); break;
//     } else {
//         alert('딩 동 댕 ~~~~ !!'); break;
//     } 
// }

// while (true) {
//     var num = +prompt('1 ~ 50 사이의 무작위 숫자를 맞춰보세요!!!');
//     if (num < random) {
//         alert(`UP!!! \n기회가 0번 남았습니다.\n기회를 모두 소진했습니다. GAME OVER!!`); break;
//     } else if (num > random) {
//         alert(`DOWN!!! \n기회가 0번 남았습니다.\n기회를 모두 소진했습니다. GAME OVER!!`); break;
//     } else {
//         alert('딩 동 댕 ~~~~ !!'); break;
//     } 
// }