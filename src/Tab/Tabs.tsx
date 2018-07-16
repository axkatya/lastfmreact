import { Component } from "react";
import * as React from 'react';

import Tab from './Tab';

interface State {
  activeTab: string;
}

interface Props {
  children: any[];
}
class Tabs extends Component<Props, State> {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.id
    };

    this.onClickTabItem = this.onClickTabItem.bind(this);
  }

  onClickTabItem(tab: string) {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
			onClickTabItem,
      props: {
				children,
			},
      state: {
				activeTab,
			}
		} = this;

    return (
      <div>
        <ol className="tab-list">
          {children.map((child: Tab) => {
            const { id } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={id}
                id={id}
                onClick={this.onClickTabItem}
              />
            );
          })}
        </ol>
        <div>
          {children.map((child) => {
            if (child.props.id !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;