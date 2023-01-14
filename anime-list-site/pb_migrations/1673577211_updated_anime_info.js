migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iga3jjkvscp3yfp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "20rrja8v",
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

  // remove
  collection.schema.removeField("20rrja8v")

  return dao.saveCollection(collection)
})
