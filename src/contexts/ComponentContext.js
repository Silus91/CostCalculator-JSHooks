import React, { Component, createContext } from "react";

export const ComponentContext = createContext();

export class ComponentContexProvider extends Component {
  state = {
    componentList: [],
  };

  addComponentToList = (newComponent) => {
    this.setState({
      componentList: [...this.state.componentList, newComponent],
    });
  };
  render() {
    return (
      <div>
        <ComponentContext.Provider
          value={{ ...this.state, addComponentToList: this.addComponentToList }}
        >
          {this.props.children}
        </ComponentContext.Provider>
      </div>
    );
  }
}

export default ComponentContexProvider;
