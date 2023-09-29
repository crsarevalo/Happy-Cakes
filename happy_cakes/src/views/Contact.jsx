import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Contact.css";

function ContactForm() {
  return (
    <>
      <Form>
        <h2>Cuentanos, ¿en qué te podemos ayudar?</h2>
        <Form.Group className="mb-3">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="nombre@ejemplo.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
      </Form>
      <Button className="boton" variant="danger" type="submit">
        Enviar
      </Button>
    </>
  );
}

export default ContactForm;
