import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold">LUFION Academy</h3>
            <p className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus adipisci illum est sapiente. Itaque optio maiores
              asperiores aspernatur quas expedita!
            </p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 885-7865-9936</p>
              </Link>
            </div>
            <div className="email">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">lufionacademy@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
