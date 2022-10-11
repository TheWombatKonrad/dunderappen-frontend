import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';

export default function NotFound() {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name='search' />
        Nothing found, please try again or refresh the page.
      </Header>
      <Segment.Inline>
        <Button as={Link} to={`/activities`}>
          Return to activities
        </Button>
      </Segment.Inline>
    </Segment>
  )
}