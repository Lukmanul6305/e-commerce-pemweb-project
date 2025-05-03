import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { kelasTerbaru } from "../data/index";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">
                Belajar Skill Digital <br /> yang Dibutuhkan Dunia Kerja
                Sekarang
              </h1>
              <p className="mb-4">
                Mulai dari dasar hingga mahir. Pelajari desain, coding,
                pemasaran digital, dan lebih banyak lagi—semua dalam satu
                platform, kapan saja, di mana saja
              </p>
              <button className="btn btn-dark btn-lg rounded-1 me-2 mb-xs-0 mb-2">
                Lihat Kelas
              </button>
              <button className="btn btn-outline-dark btn-lg rounded-1 mb-xs-0 mb-2">
                Lihat Promo
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero-img" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Kelas Terbaru</h1>
              <p className="text-center mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                deleniti.
              </p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return (
                <Col key={kelas.id}>
                  <img src={kelas.image} alt="unplash.com" />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
