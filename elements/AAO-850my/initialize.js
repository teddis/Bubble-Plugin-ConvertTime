function(instance, context) {
	instance.data.format = function (duration, inMins, formatType) {
    formatType = formatType.trim();
    const dur = moment.duration(duration, inMins ? "m" : "s");
    const sign = Math.sign(dur);
    let text = "";
    if (formatType === "Countdown") {
      text = (sign < 0 ? "-" : "") + sprintf("%02u:%02u:%02u",
        Math.abs(dur.hours()), Math.abs(dur.minutes()), Math.abs(dur.seconds()));
    } else if (formatType === "Duration") {
      const hours = dur.hours();
      const mins = dur.minutes();
      if (hours) text += `${hours}h`;
      if (hours && mins) text += " ";
      if (mins) text += `${mins}m`;
      if (!mins && !hours) text = "0m";
    }
    return text;
  }
}