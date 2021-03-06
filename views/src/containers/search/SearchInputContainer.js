import React, { Component } from 'react';
import SearchInput from 'components/search/SearchInput';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import * as weaponActions from 'store/modules/weapon';

class SearchInputContainer extends Component {

  getWeaponList = async() => {
    const {WeaponActions, weaponWhere} = this.props;
    try {
      await WeaponActions.getWeaponList(weaponWhere);
    } catch(e) {
      console.log(e);
    }
  }

  componentDidMount() {
    const {weapons} = this.props;
    if(!weapons.length > 0) this.getWeaponList();
  }

  searchGo = (e) => {
    const {history} = this.props;
    if(e.key === 'Enter') {
      history.push('/wp');
    }
  }

  handleChange = (e) => {
    const {WeaponActions} = this.props;
    const {value} = e.target;
    WeaponActions.getWeaponSearchList(value);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    const {searchGo, handleChange} = this;
    const {loading, weaponSearchList} = this.props;

    return (
      <SearchInput loading={loading} searchGo={searchGo} searchChange={handleChange} weaponSearchList={weaponSearchList}/>
    );
  }
}

export default connect(
  (state) => ({
    weapons: state.weapon.toJS().weapons,
    weaponSearchList: state.weapon.toJS().weaponSearchList,
    loading: state.pender.pending['weapon/GET_WEAPON_LIST'],
    logged: state.base.get('logged')
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch)
  })
)(withRouter(SearchInputContainer));