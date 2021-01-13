import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { urlFor } from 'lib/api';
import moment from 'moment';

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
                <Card.Text className="card-date">{moment(date).format('LL')}</Card.Text>
              </>
            )}
          </div>
        </Card.Header>
        <div className="view overlay">
          {mode === 'placeholder' ? (
            <div className="imageplaceholder" />
          ) : image ? (
            <Card.Img
              src={urlFor(image)
                .height(200)
                .crop('center') // in order to display the img in a fit to border
                .fit('clip') // in order to display the img in a fit to border
                .url()} //100 is blurry; 200-300 is top
              alt="Card image cap"
            />
          ) : (
            <div>
              <img
                width="100%"
                src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
            </div>
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
              <Card.Title className="card-main-title">
                {title.length > 40 ? title.substr(0, 40) + '...' : title}
              </Card.Title>
              <Card.Text>
                {' '}
                {subtitle.length > 40 ? subtitle.substr(0, 40) + '...' : subtitle}
              </Card.Text>
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
