import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () => {
  return (
    <Row>
      <Col md="8">
        <Media className="mb-4 admin-intro">
          <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src="https://ih-public-production-student-card.s3-eu-west-1.amazonaws.com/student-profile-images/2020504330-2.jfif"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 className="font-weight-bold mb-0">Hello everyone! 👋 </h5>
            <p className="welcome-text">
              My name is Filipe Freire and I am a junior web developer. Welcome to my blog!
            </p>
          </Media.Body>
        </Media>
      </Col>
    </Row>
  );
};

export default AuthorIntro;
