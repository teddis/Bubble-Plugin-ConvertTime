function(instance, properties, context) {
    if (properties.localDate === null)
        return
    if (properties.dstZone === null)
        return
    try {
        var format = "dddd, MMMM D YYYY, h:mm:ss a";
        var localDate = moment(properties.localDate).format(format);
        var dstDate = moment.tz(localDate, format, properties.dstZone);
        instance.publishState("dstDate", dstDate.toDate())
    } catch (err) {
        console.log(err);  
    }
}