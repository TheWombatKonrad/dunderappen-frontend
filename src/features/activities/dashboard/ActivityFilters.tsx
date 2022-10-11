import React, { Fragment } from 'react';
import { Header, Menu } from 'semantic-ui-react';
import Calendar from 'react-calendar';

export default function ActivityFilters() {
  return (
    <Fragment>
      <Menu vertical size='large' style={{ width: '100%', marginTop: 27.5 }}>
        <Header icon='filter' attached color='green' content='Filters' />
        <Menu.Item content='All activities' />
        <Menu.Item content="I'm going" />
        <Menu.Item content="I'm hosting" />
      </Menu>
      <Header />
      <Calendar />
    </Fragment>
  )
}