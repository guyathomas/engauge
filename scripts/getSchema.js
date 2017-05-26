const fs = require('fs');
const schema = require('../src/server/schema.js');
const {graphql} = require('graphql')
const {
  buildClientSchema,
  introspectionQuery,
  printSchema,
} = require('graphql/utilities');

(async () => {
  let json = await graphql(schema, introspectionQuery);
  
  fs.writeFileSync('schema.json', JSON.stringify(json, null, 2), err => {
    if (err) throw err;
    console.log("JSON schema created");
  });

  const schemaString = printSchema(buildClientSchema(json.data));
  fs.writeFileSync('schema.graphql', schemaString, err => {
    if (err) throw err;
    console.log("Graphql schema created");
  });
})();
// });
