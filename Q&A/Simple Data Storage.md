## Simple Data Storage Options

The simplest would be a text file with it all listed out.

A good option is JSON

# JSON
### JavaScript Object Notation

json files end with `*.json`

Ex: `inventory.json`

DataTypes:
 - Objects - collection of key/value pairs     | Notate with `{}`
 - Lists - like your arrays/lists in python    | Notate with `[]`
 - Strings - a string "Some text"              | Notate with qouotes `""`
 - Numbers - 4, 3, 2.3, -1.8, ...              | N/A
 - Booleans - true/false                       | N/A
null (python's `None`)

There are NO COMMENTS in JSON

`inventory.json`
```
{
  "inventory": [
      {
          "id" 3,
          "name": "Salsa",
          "price": 2.3
      },
      {
          "id": 4,
          "name": "Potatoes",
          "price": 0.99
      },
      ...
  ]
}
```

Python has easy support for parsing out JSON into data in a system.

`inventoryParser.py`

```
import json

def getInventory(filename): # Returns a list of items
  
```