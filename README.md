# react-native-simple-popup-menu

A simple popup menu for React Native android apps.

## Installation

```sh
npm install react-native-simple-popup-menu
```
or
```sh
yarn add react-native-simple-popup-menu
```

## Usage

```js
import PopupMenu from 'react-native-simple-popup-menu';

export default function MyApp() {
  const onSelectItem = (item, index) => {
    if (item === "selected_item") {
      console.log("selected item:", index);
    }
  };
  
  const options = [
    "Edit",
    "Delete"
  ];
  
  return (
    // ...
    <PopupMenu
      onPress={onSelectItem}
      items={options}
    />
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
