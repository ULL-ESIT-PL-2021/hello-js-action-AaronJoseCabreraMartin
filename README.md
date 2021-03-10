# Hello world javascript action
## **Author**: _Aarón José Cabrera Martín_

This action prints _"Hello" + the name of a person to greet_ to the log or by default case _"Hello World"_

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. By default: `"World"`.

## Outputs

### `time`

The actual time we greeted you.

## Example usage

```yml
uses: actions/hello-js-action-AaronJoseCabreraMartin@v1
with:
  who-to-greet: 'Aaron'
```
