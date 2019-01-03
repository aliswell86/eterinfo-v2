import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import WeaponListContainer from 'containers/list/WeaponListContainer';
// import WeaponWhereBoxContainer from 'containers/wherebox/WeaponWhereBoxContainer';
import WeaponWhereboxAd from 'components/wherebox/WeaponWhereboxAd';
import { Helmet } from "react-helmet";

const WeaponPage = ({history}) => {
  return (
    <PageTemplate>
      <Helmet>
        <title>이터널시티 무기정보</title>
        <meta name="description" content="착용부위별 등급별 이터널시티 무기 아이템정보. 불법무기 CL무기 목록조회" />
      </Helmet>
      {/* <WeaponWhereBoxContainer/> */}
      <WeaponWhereboxAd/>
      <ListWrapper>        
        <WeaponListContainer history={history}/>
      </ListWrapper>
    </PageTemplate>
  )
}

export default WeaponPage;