function insertion_sort(lst){
  for (var i = 1; i < lst.length; i++){
    while(i > 0 && lst[i-1] > lst[i]){
      var tmp = lst[i];
      var tmp2 = lst[i-1];
      lst[i] = tmp2;
      lst[i-1] = tmp;
      i -= 1;
    };
  };
  return lst;
};


var input = prompt("Enter a list that needs to be sorted");
function listify(input){
  output = [];
  for (var i = input.length - 1; i >= 0; i--) {
    output.push(input[i]);
  };
  return output;
};

input = listify(input);
sorted = insertion_sort(input);
alert(sorted);
