import json
import os

# This should be imported, but for the sake of demonstration:
class Item:
    def __init__(self,id,name,price):
        self.id = id
        self.name = name
        self.price = price

    def __str__(self):
        return f'Item [id={self.id}, name={self.name}, price={self.price}]'
    def __repr__(self):
        return f'Item [id={self.id}, name={self.name}, price={self.price}]'

def getInventory(filename): # Returns a list of items
    """
    Given a filename of a JSON file, this function will open the file,
    decode the enclosed JSON, and convert it all to a list of items.

    The function then returns that list of items.

    Arguments:
    ----------

    filename (string):
        The name of the json file you want parsed.
        Ex: "inventory.json"
    """
    myInventoryFile = open(filename) # File Pointer
    contents = json.load(myInventoryFile)
    # print("The contents as python object", contents)
    ret = []
    inventory = contents['inventory']
    # print("The inventory list", inventory)
    for i in inventory:
        # print("Printing element", i)
        # i looks like {'id': 3, 'name': 'Salsa', 'price': 2.3}
        theItem = Item(i['id'], i['name'], i['price'])
        ret.append(theItem)
        # print("Appended", theItem)
    return ret


flag = True

while flag:
    fname = input("Please Enter A Filename\n> ")
    if fname == 'exit':
        flag = False
    else:
        if os.path.isfile(fname):
            response = getInventory(fname)
            print("Function finished")
            print(response)
        else:
            print("Invalid File. Please Try again.")