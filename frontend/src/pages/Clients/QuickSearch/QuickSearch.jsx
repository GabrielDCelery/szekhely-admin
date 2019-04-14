import React, { Component } from 'react';
import { QuickSearchTable } from './QuickSearchTable';
import { OneColMain } from 'components';

export class QuickSearch extends Component {
	render() {
		return (
			<OneColMain Content={QuickSearchTable} />
		);
	}
}