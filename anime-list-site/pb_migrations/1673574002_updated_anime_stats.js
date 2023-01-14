migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pdecn93xd100we5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lyy8i4yq",
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
    "id": "wzdjape6",
    "name": "ranked",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lm61sykb",
    "name": "popularity",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sfoxnmiy",
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
    "id": "x6eiyvzl",
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
  const collection = dao.findCollectionByNameOrId("pdecn93xd100we5")

  // remove
  collection.schema.removeField("lyy8i4yq")

  // remove
  collection.schema.removeField("wzdjape6")

  // remove
  collection.schema.removeField("lm61sykb")

  // remove
  collection.schema.removeField("sfoxnmiy")

  // remove
  collection.schema.removeField("x6eiyvzl")

  return dao.saveCollection(collection)
})
