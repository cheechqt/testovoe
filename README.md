### Задача 2

[demo link](https://cheechqt.github.io/testovoe)

### Задача 1

```

function countBrackets(str) { 
  const result = [0, 0];
  const stack = [];
  for (let char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      continue;
    }

    if (!stack.length) {
      result[1] += 1;
    }

    let stackLastItem;
    switch (char) {
      case ")":
        stackLastItem = stack.pop();
        if (stackLastItem === "(") {
          result[0] += 2;
        } else {
          result[1] += 2;
        }
        break;
      case "}":
        stackLastItem = stack.pop();
        if (stackLastItem === "{") {
          result[0] += 2;
        } else {
          result[1] += 2;
        }
        break;
      case "]":
        stackLastItem = stack.pop();
        if (stackLastItem === "[") {
          result[0] += 2;
        } else {
          result[1] += 2;
        }
        break;
    }
  }
  return `правильных ${result[0]} \/ неправильных ${result[1]}`;
}

```
