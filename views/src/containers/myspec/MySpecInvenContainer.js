import React, { Component } from 'react';
import MySpecInven from 'components/myspec/MySpecInven';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as myspecActions from 'store/modules/myspec';
import * as weaponActions from 'store/modules/weapon';

class MySpecInvenContainer extends Component {

  handleChangeNum = (e) => {
    const {MySpecActions, itemInfo, dpsSim} = this.props;
    const {dmg, cri, stype1, size} = itemInfo;
    const {name, value} = e.target;

    if(dpsSim.huntStartBool) {
      alert("사냥중입니다.. 사냥중단후 옵션을 수정해야 합니다.");
      return false;
    }
    
    if(Number(value) > -1 && Number(value) < 1001) {
      MySpecActions.setMyStat({name, value});
    }
    
    MySpecActions.getInvenDmage({dmg, cri, stype1, size});
  }

  handleChangeCheck = (e) => {
    const {MySpecActions, itemInfo, dpsSim} = this.props;
    const {dmg, cri, stype1, size} = itemInfo;
    const {name, value} = e.target;

    if(dpsSim.huntStartBool) {
      alert("사냥중입니다.. 사냥중단후 옵션을 수정해야 합니다.");
      return false;
    }

    MySpecActions.setMyStat({name, value});

    // if(name === 'isParasite') {
    //   MySpecActions.setMyStat({name, checked});
    // }else{
    //   MySpecActions.setMyStat({name, value});
    // }

    MySpecActions.getInvenDmage({dmg, cri, stype1, size});
  }

  handleClick = (e) => {
    e.target.select();
  }

  componentDidMount() {
    const {MySpecActions} = this.props;
    //스킬, 탄창, 몬스터 타입 초기화
    MySpecActions.typeInitial();
  }

  render() {
    const {handleChangeNum, handleChangeCheck, handleClick} = this;
    const {myStat, itemInfo, mySkill} = this.props;
    const {item_dtl_dv, stype1} = itemInfo;
    const skillList = mySkill.filter(skill => skill.weaponType === item_dtl_dv);
    
    return (
      <MySpecInven
        myStatInsert={handleChangeNum}
        myStat={myStat}
        setParaDoping={handleChangeCheck}
        inputClick={handleClick}
        skillList={skillList}
        stype1={stype1}/>
    );
  }
}

export default connect(
  (state) => ({
    myStat: state.myspec.toJS().myStat,
    mySkill: state.myspec.toJS().mySkill,
    itemInfo: state.weapon.toJS().weaponView.itemInfo,
    dpsSim: state.myspec.toJS().dpsSim
  }),
  (dispatch) => ({
    MySpecActions: bindActionCreators(myspecActions, dispatch),
    WeaponActions: bindActionCreators(weaponActions, dispatch)
  })
)(MySpecInvenContainer);