migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pdecn93xd100we5");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "pdecn93xd100we5",
    "created": "2023-01-13 01:39:01.580Z",
    "updated": "2023-01-13 02:19:53.172Z",
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
