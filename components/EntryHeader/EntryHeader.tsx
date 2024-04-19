import className from 'classnames/bind';
import styles from './EntryHeader.module.scss';
import React from 'react';
import { FeaturedImage } from '../FeaturedImage';
import { Container } from '../Container';
import { PostInfo } from '../PostInfo';
import { Heading } from '../Heading';

let cx = className.bind(styles);

export default function EntryHeader({ title, image, date, author, className }) {
  const hasText = title || date || author;

  return (
    <div className={cx(['component', className])}>
      {image && (
        <FeaturedImage
          image={image}
          width={image?.mediaDetails?.width}
          height={image?.mediaDetails?.height}
          className={cx('image')}
          priority
          layout={'fill'}
        />
      )}

      {hasText && (
        <div className={cx('text', { 'has-image': image })}>
          <Container 
            className ={''}
          >
            {!!title && <Heading className={cx('title')}>{title}</Heading>}
            <PostInfo
              className={cx('byline')}
              author={author}
              date={date}
            />
          </Container>
        </div>
      )}
    </div>
  );
}
