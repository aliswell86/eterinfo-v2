import React from 'react';
import styles from './SearchInput.scss';
import classNames from 'classnames/bind';
import { Input } from 'antd';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);
const Search = Input.Search;

const SearchObject = ({item_nm, img_src, id}) => {
  return (
    <Link to={`item/wp/${id}`}>
      <div className={cx('search-sub-list-object')}>
        <div className="search-img"><img src={img_src} alt={item_nm}/></div>
        <div className="search-sub-text">{item_nm}</div>
      </div>
    </Link>
  )
}

const SearchInput = ({loading, searchGo, searchChange, weaponSearchList}) => { 
  const list = weaponSearchList.map((weaponSearch) => {
    const {item_nm, img_src, _id} = weaponSearch;
    return (
      <SearchObject
        item_nm={item_nm}
        img_src={img_src}
        key={_id}
        id={_id}/>
    )
  });
  
  return (
    <div className={cx('search-input')}>
      <Search        
        name='searchInput'
        placeholder='무기이름...'
        // onSearch={value => searchGo(value)}
        style={{ width: 360 }}
        onChange={searchChange}
        autoComplete="off"
        autoFocus
      />
      <div className={cx('search-sub-list')}>
        {list}
      </div>
    </div>
  );
};

export default SearchInput;