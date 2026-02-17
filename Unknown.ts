let value: unknown = 'Nabil';
value = 10;
value = true;
value = [1, 2, 3];

if (typeof value === 'string'){
    
    console.log(value.toUpperCase()); //  Check  if the value is a string before calling toUppercase() method. Because this is an (Unknown).
}
