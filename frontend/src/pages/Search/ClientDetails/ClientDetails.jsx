import React, { Component } from 'react';
import { TwoColMain } from 'components';

function FormTabButton(props) {
	return (
		<button
			type="button"
			className={['btn', 'btn-block', 'custom-box-shadow-lifted', 'border-2', 'border-black', props.bIsActive ? 'btn-primary' : 'btn-secondary'].join(' ')}
			onClick={props.changeActiveFormTab}
		>
			{props.label}
		</button>
	)
}

export class ClientDetails extends Component {
  render() {
    return (
      <TwoColMain
        Content={
          <React.Fragment></React.Fragment>
        }
        SideBar={
          <React.Fragment>
            <div className="card border-2 border-black shadow-sm mb-3">
								<div className="card-body">
									{[
										'Contract Details',
										'Contracts',
										'Documents',
										'Mails',
										'Services',
										'Invoices'
									].map((_label, _index) => (
										<FormTabButton
											key={`form-tab-button-${_index}`}
											bIsActive={/*this.state.activePageIndex*/ null === _index}
											label={_label}
											changeActiveFormTab={() => {}}
										/>
									))}
								</div>
							</div>
          </React.Fragment>
        }
      />
    );
  }
}