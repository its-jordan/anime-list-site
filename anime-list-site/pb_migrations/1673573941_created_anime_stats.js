migrate((db) => {
  const collection = new Collection({
    "id": "pdecn93xd100we5",
    "created": "2023-01-13 01:39:01.580Z",
    "updated": "2023-01-13 01:39:01.580Z",
    "name": "anime_stats",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "drxov9w2",
        "name": "anime_relation",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "iga3jjkvscp3yfp",
          "cascadeDelete": true
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pdecn93xd100we5");

  return dao.deleteCollection(collection);
})
