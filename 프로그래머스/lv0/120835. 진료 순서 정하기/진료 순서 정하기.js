function solution(emergency) {
    var sortedEmergency = [...emergency].sort((a, b) => b - a);
    return emergency.map((val) => sortedEmergency.indexOf(val) + 1);
}