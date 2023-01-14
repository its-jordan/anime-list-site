migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iga3jjkvscp3yfp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "80ott0t5",
    "name": "md_data",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iga3jjkvscp3yfp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "80ott0t5",
    "name": "md_data",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
