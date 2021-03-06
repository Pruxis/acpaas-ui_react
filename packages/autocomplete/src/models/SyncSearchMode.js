import type {ISearchMode, Item} from "../types";

export class SyncSearchMode implements ISearchMode {
  component;

  constructor(component) {
    this.component = component;
  }

  search(value: string): Promise<Array<Item>> {
    let items = this.component.props.items;
    const selection = this.component.selectionMode.getSelection();
    items = items.filter(item => !selection.find(s => s.value === item.value))
    if (!value) {
      return Promise.resolve(items);
    }

    let matches = items.filter(item => item.label.toLowerCase().includes(value.toLowerCase()));
    return Promise.resolve(matches);
  }

  reset(): void {
    let items = this.component.props.items;
    const selection = this.component.state.selection || [];
    items = items.filter(item => !selection.find(s => s.value === item.value))
    this.component.setState({
      results: items
    })
  }
}
