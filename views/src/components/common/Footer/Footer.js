import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div>&copy; <a href='/api/auth/gapageview' style={{color:'#212529'}}>2018-2019</a>ETERINFO. Data based on</div>
      <div><a rel="noopener noreferrer" target="_blank" href="http://eternalcity.mgame.com/">이터널시티.</a></div>
      <div>alliswell8610@gmail.com</div>
    </footer>
  );
};

export default Footer;