function(instance, properties, context) {
    const text = instance.data.format(properties.duration, properties.in_minutes, properties.format);
    instance.publishState("duration_format", text);
    instance.triggerEvent("formatted_duration");
}