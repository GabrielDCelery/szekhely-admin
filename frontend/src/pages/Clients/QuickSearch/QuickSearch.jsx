import React, { Component } from 'react';
import { QuickSearchTable } from './QuickSearchTable';
import { QuickSearchSidebar } from './QuickSearchSidebar';
import { OneColMain } from 'components';

export class QuickSearch extends Component {
	render() {
		return (
			<React.Fragment>
				<OneColMain
					Content={QuickSearchTable}
				/>
			</React.Fragment>
		);
	}
}