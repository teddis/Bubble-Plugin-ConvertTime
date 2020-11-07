function(instance, context) {
  instance.data.format = function (duration, inMins, formatType) {
    formatType = formatType.trim();
    const dur = moment.duration(duration, inMins ? "m" : "s");
    const sign = Math.sign(dur);
    let text = "";
    if (formatType.startsWith("Countdown")) {
      const fmt = "%02u:%02u" + (formatType.endsWith("S") ? ":%02u" : "");
      text = (sign < 0 ? "-" : "") + sprintf(fmt,
        Math.abs(dur.hours()), Math.abs(dur.minutes()), Math.abs(dur.seconds()));
    } else if (formatType.startsWith("Duration")) {
      const showSecs = formatType.endsWith("S");
      const days = Math.abs(dur.days());
      const hours = Math.abs(dur.hours());
      const mins = Math.abs(dur.minutes());
      const secs = Math.abs(dur.seconds());
      const list = [];
      if (days) list.push(`${days}d`);
      if (hours) list.push(`${hours}h`);
      if (mins) list.push(`${mins}m`);
      if (showSecs && secs) list.push(`${secs}s`);
      text = list.join(" ") || "0m"
    }
    return text;
  }
}