import className from 'classnames/bind';
import styles from './ContentWrapper.module.scss';
import React from 'react';

let cx = className.bind(styles);

export default function ContentWrapper({ content, children, className }) {
  return (
    <article className={cx(['component', className])}>
      <div dangerouslySetInnerHTML={{ __html: content ?? '' }} />
      {children}
    </article>
  );
}
