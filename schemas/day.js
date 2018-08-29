export default {

  title: "Day",

  name: "day",

  type: "document",

  fields: [
    {
      title: "Day",
      name: "day",
      type: "string",
    },
    {
      title: 'Events',
      name: 'events',
      type: 'array',
      of: [
        { type: 'reference', to: { type: 'event' } },
      ]
    }
  ],
  preview: {
    select: {
      title: 'day',
    }
  }
}