db=db.getSiblingDB("Vinyls");

db.createCollection("Album");
db.createCollection("Record Label");

db.createCollection("Artist", {
   validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["ArtistID", "ArtistName", "ArtistYear"],
  properties: {
      ArtistID: {
         bsonType: "int",
          description: "must be an int and is required"
      },
      ArtistName: {
         bsonType: "string",
          description: "must be a string and is required"
      },
      ArtistYear: {
         bsonType: "int",
          description: "must be an int and is required"
      },
  }
}
}
})
