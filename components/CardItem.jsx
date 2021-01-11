import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { urlFor } from 'lib/api';

const CardItem = ({ title, subtitle, date, image, author, link, mode = 'normal' }) => {
  return (
    <Card className={`fj-card ${mode}`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img
            src={author?.avatar || 'https://via.placeholder.com/150'}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div>
            {mode === 'placeholder' ? (
              <>
                <Card.Title className="font-weight-bold mb-1">placeholder title</Card.Title>
                <Card.Text className="card-date">placeholder date</Card.Text>
              </>
            ) : (
              <>
                <Card.Title className="font-weight-bold mb-1">
                  {author?.name || 'An Amazing Author'}
                </Card.Title>
                <Card.Text className="card-date">{date}</Card.Text>
              </>
            )}
          </div>
        </Card.Header>
        <div className="view overlay">
          {mode === 'placeholder' ? (
            <div className="imageplaceholder" />
          ) : (
            <Card.Img
              src={urlFor(image)
                .height(200)
                .crop('center') // in order to display the img in a fit to border
                .fit('clip') // in order to display the img in a fit to border
                .url()} //100 is blurry; 200-300 is top
              alt="Card image cap"
            />
          )}
        </div>
        <Card.Body>
          {mode === 'placeholder' ? (
            <>
              <Card.Title className="card-main-title">placeholder Title</Card.Title>
              <Card.Text>placeholder Subtitle</Card.Text>
            </>
          ) : (
            <>
              <Card.Title className="card-main-title">{title}</Card.Title>
              <Card.Text>{subtitle}</Card.Text>
            </>
          )}
        </Card.Body>
      </div>
      {link && (
        <Link {...link}>
          <a className="card-button">Read More</a>
        </Link>
      )}
    </Card>
  );
};

export default CardItem;
