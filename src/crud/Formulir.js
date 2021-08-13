/* eslint-disable no-undef */
import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
const Formulir = ({
  nama,
  deskripsi,
  harga,
  handleChange,
  handleSubmit,
  id,
}) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>{id ? "Ubah Data" : "Tambah Makanan"}</h4>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukan Nama Makanan"
                name="nama"
                value={nama}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="deskripsi">
              <Form.Label>Deskripsi Makanan</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Masukan deskripsi makanan"
                name="deskripsi"
                value={deskripsi}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                placeholder="harga"
                name="harga"
                value={harga}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button as="input" type="submit" value="Submit" />
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
