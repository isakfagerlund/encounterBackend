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
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "Location",
      name: "location",
      type: "string",
    },
    {
      title: "Date & Time",
      name: "datetime",
      type: "datetime",
      options: {
        dateFormat: 'DD-MM-YYYY',
        timeFormat: 'HH:mm',
      }
    },
  ],
  preview: {
    select: {
      title: 'name',
      description: 'datetime'
    }
  }
}