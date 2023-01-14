migrate((db) => {
  const collection = new Collection({
    "id": "iga3jjkvscp3yfp",
    "created": "2023-01-13 01:37:41.484Z",
    "updated": "2023-01-13 01:37:41.484Z",
    "name": "anime",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "e93bfnjo",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "y2sqcu84",
        "name": "english_title",
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
        "id": "qwqjq8we",
        "name": "type",
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
        "id": "ylt45qko",
        "name": "episodes",
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
        "id": "ddmn66f9",
        "name": "status",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "airing",
            "finished airing",
            "not yet aired"
          ]
        }
      },
      {
        "system": false,
        "id": "flnepe5w",
        "name": "aired_from",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "drebioxa",
        "name": "aired_to",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "66yrrvmz",
        "name": "premiered",
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
        "id": "vo8hthbb",
        "name": "licensors",
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
        "id": "opmlo2ir",
        "name": "studios",
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
        "id": "wtp60slr",
        "name": "source",
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
        "id": "fr2dlaqt",
        "name": "genres",
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
        "id": "uvjjcdgw",
        "name": "themes",
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
        "id": "qdcipwnc",
        "name": "duration",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "kregwa6x",
        "name": "rating",
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
        "id": "xwwllkmg",
        "name": "broadcast",
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
        "id": "peliqysn",
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
        "id": "9zql1rjr",
        "name": "ranked",
        "type": "number",
        "required": false,
        "unique": true,
        "options": {
          "min": 1,
          "max": null
        }
      },
      {
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
      },
      {
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
      },
      {
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
  const collection = dao.findCollectionByNameOrId("iga3jjkvscp3yfp");

  return dao.deleteCollection(collection);
})
