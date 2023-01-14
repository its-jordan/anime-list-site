migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iga3jjkvscp3yfp")

  // remove
  collection.schema.removeField("20rrja8v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bsaymseo",
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
    "id": "xajcz5zz",
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
    "id": "pr7itz3e",
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
    "id": "qt0drwbq",
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
    "id": "dhaaqdkh",
    "name": "favorites",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // remove
  collection.schema.removeField("bsaymseo")

  // remove
  collection.schema.removeField("xajcz5zz")

  // remove
  collection.schema.removeField("pr7itz3e")

  // remove
  collection.schema.removeField("qt0drwbq")

  // remove
  collection.schema.removeField("dhaaqdkh")

  return dao.saveCollection(collection)
})
