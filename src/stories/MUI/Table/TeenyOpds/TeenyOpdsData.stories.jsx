import React from 'react';

import { TeenyOpdsData, } from './TeenyOpdsData';


export default {
  title: 'MUI/Table/TeenyOPDS',
  component: TeenyOpdsData,
};

const Template = (args) => <TeenyOpdsData {...args} />


export const Default = Template.bind({});

const rows = [
  createData('Luigi\'s Diary', '12345678X', 'Luigi', '/green/shirt/diary', 'luigi.org', 'luigi.org/green/shirt/diary'),
  createData('Blood of Elves', '876564321X', 'Andrzej Sapkowski', '/an/example', 'andrzejsapkowski.org', 'andrzejsapkowski.org/an/example'),
  createData('The Witcher', 'MAThlwEACAAJ', 'Luigi', '/book/url', 'thewitcher.com', 'thewitcher.com/some/kinda/tuff/guy'),
  createData('Rocket Man', 'JJTh123ACGHa', 'Elton John', '/rocket/man', 'elton.john', '/rocket/man/adventures'),
  createData('Spider Man', 'GGfehiu4ACGhF', 'Peter Parker', '/spider/man', 'peterparker.com', '/spider/man/amazing'),
];

function createData(title, id, authorName, authorUri, rootUrl, url) {
  return { title, id, authorName, authorUri, rootUrl, url };
}

Default.args = {
  rows,
};