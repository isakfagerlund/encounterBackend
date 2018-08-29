export default {

  title: "Event",

  name: "event",

  type: "document",

  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Time",
      name: "time",
      type: "string",
    },
    {
      title: 'Day',
      name: 'selectedDay',
      type: 'reference',
      to: [{ type: 'day' }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'selectedDay.day',
      description: 'time'
    }
  }
}