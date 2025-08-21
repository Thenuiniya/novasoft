import React from "react";
import { Table, Badge, Button, Card } from "react-bootstrap";

export default function LeadsTable({ rows }) {
  const statusVariant = {
    Completed: "success",
    "In Progress": "primary",
    Pending: "warning",
  };

  return (
    <Card>
      <Card.Header>Leads Table</Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Assignee</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>
                  <Badge bg={statusVariant[row.status]}>{row.status}</Badge>
                </td>
                <td>{row.priority}</td>
                <td>{row.assignee}</td>
                <td>{row.date}</td>
                <td>
                  <Button size="sm" variant="outline-primary" className="me-2">
                    View
                  </Button>
                  <Button size="sm" variant="outline-secondary" className="me-2">
                    Edit
                  </Button>
                  <Button size="sm" variant="outline-danger">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
