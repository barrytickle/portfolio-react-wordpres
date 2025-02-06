## Adding Blocks

To add a new block to your WordPress portfolio, follow these steps:

1. **Create a New File**: Ensure the filename starts with the prefix `acf-`. For example, `acf-new-block.jsx`.

2. **Export Default**: Each block file must include an `export default` statement. This ensures that the block is properly registered and available for use.

Example structure of a block file:

```javascript
// acf-new-block.js

const NewBlock = () => {
	// Block implementation
};

export default NewBlock;
```

3. **Register the Block**: Make sure to register the block in your WordPress setup so it appears in the block editor.

By following these steps, you can successfully add new blocks to your WordPress portfolio.
