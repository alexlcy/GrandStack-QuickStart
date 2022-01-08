const { ApolloServer } = require("apollo-server");
const  neo4j  = require("neo4j-driver");
const { makeAugmentedSchema } = require("neo4j-graphql-js")

require("dotenv").config();

const typeDefs = `
  type Business {
    businessId:ID!
    averageStars: Float! @cypher(statement:"MATCH (this)<-[:REVIEWS]- (r:Review) RETURN avg(r.stars)")
    name:String!
    recommended(first: Int = 1): [Business] @cypher(statement: """
      MATCH (this)<-[:REVIEWS]-(:Review)<-[:WROTE]-(:User)-[:WROTE]-
     >(:Review)-[:REVIEWS]->(rec:Business)
      WITH rec, COUNT(*) AS score
      RETURN rec ORDER BY score DESC LIMIT $first
    """)

    city:String!
    STATE:String!
    address:String!
    location:Point!
    reviews: [Review] @relation(name: "REVIEWS", direction: IN)
    categories: [Category] @relation(name: "IN_CATEGORY", direction: OUT)
  }

  type User {
    userID:ID!
    name:String!
    reviews: [Review] @relation(name: "WROTE", direction:OUT)
  }

  type Review {
    reviewId: ID!
    stars: Float!
    date: Date!
    text: String
    user: User @relation(name:"WROTE", direction: IN)
    business: Business @relation(name: "REVIEWS", direction: OUT)
  }
  type Category {
    name: String!
    businesses: [Business] @relation(name: "IN_CATEGORY", direction: IN)
  } 

`;

const schema = makeAugmentedSchema({ typeDefs });

const uri = "neo4j+s://57e076a1.databases.neo4j.io";
const user = "neo4j";
const password = "5Fd2gDVGIjr5p5dCcIgLEuqaUmqXOsjm87GPng-sHl0";

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

const server = new ApolloServer({
  schema: schema,
  context: { driver }
});

server.listen().then(({ url }) => {
  console.log(`GraphQL server ready on ${url}`);
});