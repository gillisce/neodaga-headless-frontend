import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Container } from '../Container';
import { NavigationMenu } from '../NavigationMenu';

let cx = classNames.bind(styles);

export default function Footer({ title, menuItems }) {
  const year = new Date().getFullYear();

  return (
    <footer className={cx('component')}>
      <Container
        className={'component'}>
        <NavigationMenu menuItems={menuItems} className={undefined} />
        <p className={cx('copyright')}>{`${title} © ${year}. Powered by WordPress.`}</p>
      </Container>
    </footer>
  );
}
