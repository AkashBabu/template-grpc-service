# template-grpc-service
Template for Nodejs GRPC Service

## Sample Usage
```js
import { RPC_Hi } from 'template-grpc-service'
const result = await RPC_Hi({ msg: 'Hey Bot!' });
```


## ES-Lint
> npm run lint

## Babel
> npm run build  

This command removes dist/ folder and builds it from the contents in src/ folder

## Mocha & Chai (Testing)
> npm run test

## Coverage Report
> npm run coverage
