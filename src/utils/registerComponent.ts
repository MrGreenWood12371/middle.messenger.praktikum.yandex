import Block from "./Block";
import * as Handlebars from "handlebars/runtime";

export function registerComponent(name: string, Component: typeof Block) {
  console.log(Handlebars.registerHelper);

  Handlebars.registerHelper(name, ({ data, hash }: any) => {
    const component = new Component(hash);

    if (!data.root.children) {
      data.root.children = {};
    }

    data.root.children[component.id] = component;
    console.log('aaaa', component);

    return `<div data-id='${component.id}'></div>`;
  });
}
