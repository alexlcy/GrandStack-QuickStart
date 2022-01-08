import BusinessResults from "./BusinessResults";
import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_BUSINESS_QUERY = gql`
query BusinessesByCategory ($selectedCategory: String!){
  Business (filter: {categories: {name_contains: $selectedCategory}}) {
    businessId
    name
    address
    categories {
      name
    }
  }
}
`;

export default function SearchContainer() {

    const [selectedCategory, setSelectedCategory] = useState("");
    const { loading, error, data } = useQuery(GET_BUSINESS_QUERY, {
      variables: {selectedCategory},
    });
  
    if (error) return <p>Error</p>
    if (loading) return <p>Loading...</p>

    return (
        <div>
            <h2>GraphQL Search using Sample Data in  Neo4J</h2>
            <form>
                <label>
                Select Business Category: 
                <select
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Library">Library</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Car Wash">Car Wash</option>
                </select>
                </label>
            </form>
            <BusinessResults
                businesses={data.Business}
            />
        </div>
    )

}