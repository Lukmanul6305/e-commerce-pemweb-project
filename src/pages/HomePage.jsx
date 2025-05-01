import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets-web/img/header.png";
const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100">
        <Container>
          <Row>
            <Col md={6}>
              <h1>
                Temukan <br /> <span>Bakat Kreatifmu</span> <br />
                Bersama Kami
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                ullam facere asperiores laborum provident porro.
              </p>
              <button>Lihat Kelas</button>
              <button>Lihat Promo</button>
            </Col>
            <Col md={6}>
              <img src={HeroImage} alt="header-img" className="img-fluid" />
            </Col>
          </Row>
        </Container>

        {/* <Container>
          <Row>
            <Col>
              <h1>
                Temukan <br /> <span>Bakat Kreatifmu</span> <br />
                Bersama Kami
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                ullam facere asperiores laborum provident porro.
              </p>
              <button>Lihat Kelas</button>
              <button>Lihat Promo</button>
            </Col>
            <col>
              <img src={HeroImage} alt="header-img" />
            </col>
          </Row>
        </Container> */}
      </header>
      <div className="kelas w-100 min-vh-100"></div>
    </div>
  );
};

export default HomePage;
