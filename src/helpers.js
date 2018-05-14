module.exports.convertTime = function (time) {
    let date = new Date(Date.now());
    date.setTime(time);

    let hours = date.getHours();

    let minutes = date.getMinutes();

    let seconds = date.getSeconds();

    let formatedDate = `${hours}:${minutes}:${seconds}`;

    return formatedDate;
}
