import {defineField, defineType} from 'sanity'

export default defineType({
  name: "place",
  title: "Place",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "blogs",
      title: "Blogs",
      type: "array",
      of:[{ type: "reference", to:{ type:"post" } }]
    }),
    defineField({
      name: "itineraries",
      title: "Itineraries",
      type: "array",
      of:[{ type: "reference", to:{ type:"itinerary" } }]
    }),
  ],
})
