(async () => {
    const neo4j = require("neo4j-driver");
  
    // be sure to change these connection details for your Neo4j instance
    const uri = "neo4j+s://57e076a1.databases.neo4j.io";
    const user = "neo4j";
    const password = "5Fd2gDVGIjr5p5dCcIgLEuqaUmqXOsjm87GPng-sHl0";
  
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session();
  
    try {
      const readQuery = `MATCH (n)
                         RETURN COUNT(n) AS num`;
      const readResult = await session.readTransaction((tx) => tx.run(readQuery));
      readResult.records.forEach((record) => {
        console.log(`Found ${record.get("num")} nodes in the database`);
      });
    } catch (error) {
      console.error("Something went wrong: ", error);
    } finally {
      await session.close();
    }
  
    await driver.close();
  })();