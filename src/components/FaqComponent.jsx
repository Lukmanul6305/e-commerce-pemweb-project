import { useState } from 'react';
import { Container, Row, Col, Card, Collapse } from 'react-bootstrap';
import '../css/main.css';

function FaqComponent() {
  const dataFaq = [
    { tanya: 'Apa itu layanan kami?', jawab: 'Layanan kami menyediakan berbagai fitur keren.' },
    { tanya: 'Bagaimana cara mendaftar?', jawab: 'Kamu bisa daftar lewat website kami.' },
    { tanya: 'Apakah gratis?', jawab: 'Ada yang gratis, ada juga yang berbayar.' },
    { tanya: 'Cara menghubungi kami?', jawab: 'Hubungi lewat email atau kontak di website.' },
    { tanya: 'Apakah data aman?', jawab: 'Kami menjaga data kamu dengan aman.' },
    { tanya: 'Bisa dibatalkan?', jawab: 'Ya, bisa dibatalkan kapan saja.' }
  ];

  const [terbuka, setTerbuka] = useState(null);

  const bukaJawaban = (index) => {
    setTerbuka(terbuka === index ? null : index);
  };

  return (
    <div className="faq-page h-100 d-flex align-items-center">
      <Container className="py-5">
        <h1 className="text-center fw-bold faq-title mb-5">
          Pertanyaan yang sering ditanyakan
        </h1>
        <Row className="justify-content-center g-3S">
          {dataFaq.map((item, i) => (
            <Col md={6} className="mb-4" key={i}>
              <Card
                onClick={() => bukaJawaban(i)}
                className="faq-card shadow-sm"
                style={{ cursor: 'pointer' }}
              >
                <Card.Body>
                  <Card.Title className="fw-semibold">{item.tanya}</Card.Title>
                  <Collapse in={terbuka === i}>
                    <div className={`answer ${terbuka === i ? "show" : "hide"}`}>
                      {item.jawab}
                    </div>
                  </Collapse>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default FaqComponent;

