# Front-end-Assignment

## Why are the errors/warning with the code?

## ERRORS

- In WrappedSingleListItem, I added an arrow function to the onClick prop to make sure it's only called when the element is clicked, rather than when the component is rendered.
- In WrappedListComponent, I fixed the useState call by removing the unnecessary function name setSelectedIndex from the left-hand side of the assignment.
- I added a null-check for items in the return statement of WrappedListComponent to prevent errors when the items prop is null or undefined.
- I added a key prop to each SingleListItem component to remove the React warning about needing a unique key for each list item.
- In the isSelected prop of each SingleListItem component, I changed it to check if the current index is equal to selectedIndex, rather than just passing in selectedIndex, which is a state setter function, not the actual state value.
- I changed the items PropTypes declaration to use PropTypes.arrayOf and PropTypes.shape to check the structure of the objects in the array. I also set the default value of items to an empty array instead of null.

## Fixing and modifying the code

1. To fix the first issue we simply have to fix the typo error as follows ->
```js
WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
};
```
2. To fix the validation issue

```js
const propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
      })
    ),
  };

  PropTypes.checkPropTypes(propTypes, { items }, 'prop', 'WrappedListComponent');
```
In this code, PropTypes.checkPropTypes is used to validate that the items prop passed to WrappedListComponent confirms to the definition specified in propTypes.
So I have used this checkPropTypes method to call them.

3. To fix this issue
Instead of 
```js
 const [setSelectedIndex, selectedIndex] = useState();
``` 

```js
 const [selectedIndex,setSelectedIndex] = useState();
``` 

4. Instead of 
```js
 onClick={onClickHandler(index)}
``` 
We have to use 

```js
 onClick={() => onClickHandler(index)}
```

since the isSelected logic is wrong,as to change color of only selected item ,we have to do is 
```js
 isSelected={selectedIndex===index}
```

5. Some css modification for better UI
```css
*{
  margin: 10px;
  padding-left:100px;
}

li{
  margin: 50px;
  padding: 5px;
  display: block;
  max-width: 200px;
}
```   


## To view the changes for the assignment live, visit https://steeleye-frontend-keshav.vercel.app/

