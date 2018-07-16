import { Component } from "react";
import * as React from 'react';

interface Props {
  id: string;
  activeTab: string;
  onClick(id: any): void;
}

class Tab extends Component<Props> {
  props: Props;

  constructor(props: Props) {
		super(props);
		
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		const { id, onClick } = this.props;
		onClick(id);
	}

	render() {
		const {
			onClick,
			props: {
				activeTab,
				id,
			},
		} = this;

		let className = 'tab-list-item';

		if (activeTab === id) {
			className += ' tab-list-active';
		}

		return (
			<li
				className={className}
				onClick={this.onClick}
			>
				{id}
			</li>
		);
	}
}

export default Tab;