# react-native-simple-popup-menu

A simple popup menu for React Native android apps.

<img alt="Example" src="example/example.gif" width="250">

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
| mode           | ModeOption                                                | False    | highlight       |
| icon           | MaterialIconsList                                         | False    | more-vert       |
| iconSize       | Number                                                    | False    | 24              |
| iconComponent  | () => ReactNode                                           | False    | undefined       |
| underlayColor  | ColorValue                                                | False    | rgba(0,0,0,0.2) |
| containerStyle | StyleProp\<ViewStyle\>                                    | False    | undefined       |
| buttonStyle    | StyleProp\<ViewStyle\>                                    | False    | undefined       |
| iconStyle      | StyleProp\<TextStyle\>                                    | False    | undefined       |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
