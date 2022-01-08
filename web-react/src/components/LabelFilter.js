import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { LabelContext } from "./LabelProvider";

export default function LabelFilter() {
    const { labels, setlabels, nodeLimit, setNodeLimit } = useContext(LabelContext)
    const handleChange = (e) => {
        const label = e.target.value
        const newLabels = labels
        newLabels[label] = e.target.checked
        setlabels({...newLabels})
    }
    const handleLimitChange = (e) => {
        setNodeLimit(e.target.value)
    }

    return (
        <>
      <Row>
        <h2>Graph Visualization using Cypher in Neo4J</h2>
      </Row>
      <Row>
        <div role="group">
          <label>
            <input type="checkbox" name="entities" value="Business" onChange={handleChange} defaultChecked/>
            Business
          </label>
          <label>
            <input type="checkbox" name="entities" value="Category" onChange={handleChange} defaultChecked/>
            Category
          </label>
          <label>
            <input type="checkbox" name="entities" value="User" onChange={handleChange} defaultChecked/>
            User
          </label>
          <label>
            <input type="checkbox" name="entities" value="Review" onChange={handleChange} defaultChecked/>
            Review
          </label>
        </div>
      </Row>
      <br></br>      
      <Row>
        <label>
            Node Limit
            <input type="number" name="nodeLimit" onChange={handleLimitChange} value={nodeLimit}/>
        </label>
            </Row>
            <h3>Results Plot</h3>
        </>
    )

}