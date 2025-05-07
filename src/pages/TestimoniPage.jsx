import { Container, Row, Col } from "react-bootstrap";
import {testimoni} from "../data/index";
import FaqComponent from "../components/FaqComponent";


const TestimoniPage = () => {
  return (
  <div className="testimoni-page">
  <div className="testimoni">
    <Container>
      <Row>
        <Col>
        <h1 className="text-center fw-bold">Semua Testimoni</h1>
        <p className="text-center"> Lorem ipsum dolor sit amet consectetur, adipising elit.</p>
        </Col>
      </Row>
      <Row className="row-cols-lg-3 row-cols-1">
      {testimoni.map((data) => {
                return (
                  <Col key={data.id} className="mb-5">
                    <p className="desc shadow-sm">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </Col>
                );
              })}
        </Row>
      </Container>
    </div>

    <FaqComponent/>
    </div>
  );
};

export default TestimoniPage;
