/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

/*
Layout
*/
import { ContentLayout } from '../../layouts';

/*
Pages
*/
import QuestionsTablePage from '../questions-table';
import QuestionFormPage from '../question-form';

const tabs = [
  { id: 'List', link: '/admin/questions' },
  { id: 'Create new question', link: '/admin/questions/create' },
];

class QuestionsOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Questions Overview" tabs={tabs}>
        { children }
        <Route exact path="/admin/questions" component={ QuestionsTablePage }></Route>
        <Route path="/admin/questions/create" component={ QuestionFormPage }></Route>
        <Route path="/admin/questions/:id/edit" component={ QuestionFormPage }></Route>
      </ContentLayout>
    )
  }
}

export default (QuestionsOverviewPage);