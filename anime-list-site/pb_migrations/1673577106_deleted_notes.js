migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nvw61ii59yvqlfl");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "nvw61ii59yvqlfl",
    "created": "2023-01-13 02:24:26.527Z",
    "updated": "2023-01-13 02:24:26.527Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ulm7owdw",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lgdtcvfa",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
