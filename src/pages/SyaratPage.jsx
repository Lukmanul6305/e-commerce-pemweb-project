import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";

const SyaratPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-1 animate__animated animate__fadeInUp animate__delay-1s">
                Syarat & Ketentuan
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                odio quae deleniti eius modi voluptatum animi dolores vitae
                quaerat nemo aliquam magni officiis voluptatibus porro in
                suscipit fugit accusantium cum, odit saepe illo sunt
                consequuntur? Temporibus cupiditate debitis quidem, fugiat quos
                inventore totam sequi doloremque at quam aliquid molestiae
                officia.
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">1. lorem</h4>
            </Col>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              tenetur mollitia id quos nam quae minima excepturi eum, maiores
              porro minus ex rem architecto natus quas optio libero assumenda!
              Provident.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              asperiores unde suscipit fugit, laudantium illo nam enim dolorum
              eligendi, assumenda ipsa quae aliquid, ex magnam? Minima minus
              iusto consequuntur facere exercitationem delectus ipsa sequi
              repellat, velit praesentium illum numquam impedit!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              atque ex laudantium maiores libero? Ducimus eligendi, repellat
              nisi maiores aperiam eius quasi repellendus inventore, assumenda
              non magni. Quisquam eos fugit dolorum, nesciunt repellat libero
              soluta hic obcaecati iste ab numquam consectetur ex dolore
              corporis consequatur. Reprehenderit dolorem impedit pariatur fuga.
            </p>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">2. lorem</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium aut molestias quidem quis hic sed aspernatur quo
                minima maiores illo dolorum, ducimus quisquam, rerum ex! Vel
                culpa rerum totam, neque ut ducimus, quibusdam natus provident
                dolores molestias facere, voluptates quaerat?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt nostrum quas saepe repellendus architecto quisquam
                possimus vero fugiat rerum expedita libero in ab tempora
                necessitatibus, labore quis. Quis, ducimus natus.
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">3. lorem</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                pariatur minus asperiores nihil facere aspernatur quidem
                quibusdam! Est, minus animi autem amet eveniet officia placeat,
                at delectus repellat perferendis quasi soluta alias ipsum
                obcaecati accusantium consectetur expedita quaerat. Quidem
                distinctio voluptatibus at dolores alias autem quos error itaque
                minima repellendus!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis dolore nihil sit sunt, labore consequuntur magni
                consectetur eveniet magnam facere! Sapiente numquam quasi nobis.
                Omnis, quae sed accusantium incidunt molestias autem. Provident
                voluptatem hic est aliquid sunt perferendis maiores voluptas.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default SyaratPage;
