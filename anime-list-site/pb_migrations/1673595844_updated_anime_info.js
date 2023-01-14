migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iga3jjkvscp3yfp")

  // remove
  collection.schema.removeField("f2sfmmey")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iga3jjkvscp3yfp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f2sfmmey",
    "name": "genre",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
