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
  // ...
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

## Options

| Key            | Type                                                      | Required | Default Value   |
|----------------|-----------------------------------------------------------|----------|-----------------|
| onPress        | (event: PopupEvent, index: number \| undefined) => void   | True     | undefined       |
| items          | string[]                                                  | True     | undefined       |
| mode           | ModeOption \| undefined                                   | False    | highlight       |
| icon           | MaterialIconsList \| undefined                            | False    | more-vert       |
| iconSize       | Number \| undefined                                       | False    | 24              |
| iconComponent  | () => ReactNode \| undefined                              | False    | undefined       |
| underlayColor  | ColorValue \| undefined                                   | False    | rgba(0,0,0,0.2) |
| containerStyle | StyleProp\<ViewStyle\> \| undefined                       | False    | undefined       |
| buttonStyle    | StyleProp\<ViewStyle\> \| undefined                       | False    | undefined       |
| iconStyle      | StyleProp\<TextStyle\> \| undefined                       | False    | undefined       |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
