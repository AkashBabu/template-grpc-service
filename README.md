# template-grpc-service
Template for Nodejs GRPC Service

## Sample Usage
```js
import { RPC_Hi } from 'template-grpc-service'
const result = await RPC_Hi({ msg: 'Hey Bot!' });
```

## Installation
> npm i lib -S

## ES-Lint
> npm run lint

## Babel
> npm run build  

This command removes dist/ folder and builds it from the contents in src/ folder

## Mocha & Chai (Testing)
> npm run test

## Coverage Report
> npm run coverage

## Benchmark
> npm run benchmark

## Contributions
This is open-source, which makes it obvious for any PRs, but I would request you to add necessary test-cases for the same 
