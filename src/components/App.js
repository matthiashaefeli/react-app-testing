import React from 'react';
import { Route } from 'react-router';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default function App() {
  return (
    <div>
      <Route  path="/post" component={CommentBox} />
      <Route  path="/" exact component={CommentList} />
    </div>
  )
};