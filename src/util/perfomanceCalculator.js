export default function getCalculation(test) {
    if (test == null || test == undefined) {
        return
    }
    var speed = 0, accuracy = 0, passPercent = 0, questionAttempt = 0;
    for (var i = 0; i < test.length; i++) {
        questionAttempt += test[i].correct + test[i].wrong;
        accuracy += test[i].correct;
        speed += test[i].duration;
        passPercent += (test[i].pass ? 1 : 0);
    }

    speed = questionAttempt / speed;
    accuracy /= questionAttempt;
    passPercent /= test.length;
    return [Math.round((speed + Number.EPSILON) * 100) / 100, Math.round((accuracy * 100 + Number.EPSILON) * 100) / 100, Math.round((passPercent * 100 + Number.EPSILON) * 100) / 100, questionAttempt];
}