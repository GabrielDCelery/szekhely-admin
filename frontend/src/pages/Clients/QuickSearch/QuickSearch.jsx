import React, { Component } from 'react';
import { QuickSearchTable } from './QuickSearchTable';
import { QuickSearchSidebar } from './QuickSearchSidebar';
import { TwoColMain } from 'components';

export class QuickSearch extends Component {
	render() {
		return (
			<React.Fragment>
				<TwoColMain
					Content={QuickSearchTable}
					SideBar={QuickSearchSidebar}
				/>
			</React.Fragment>
		);
	}
}