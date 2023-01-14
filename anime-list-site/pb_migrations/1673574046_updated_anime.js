migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iga3jjkvscp3yfp")

  collection.name = "anime_info"

  // remove
  collection.schema.removeField("peliqysn")

  // remove
  collection.schema.removeField("9zql1rjr")

  // remove
  collection.schema.removeField("sdhlyfav")

  // remove
  collection.schema.removeField("zmbel56r")

  // remove
  collection.schema.removeField("2i6qmutn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pxvmu06k",
    "name": "anime_relation",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "pdecn93xd100we5",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iga3jjkvscp3yfp")

  collection.name = "anime"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "peliqysn",
    "name": "score",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 10
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9zql1rjr",
    "name": "ranked",
    "type": "number",
    "required": false,
    "unique": true,
    "options": {
      "min": 1,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sdhlyfav",
    "name": "popularity",
    "type": "number",
    "required": false,
    "unique": true,
    "options": {
      "min": 1,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zmbel56r",
    "name": "members",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2i6qmutn",
    "name": "favorites",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("pxvmu06k")

  return dao.saveCollection(collection)
})
