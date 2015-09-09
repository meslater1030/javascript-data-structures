function merge_sort(lst){
  if(lst.length <= 1){
    return lst;
  };
  var middle = Math.floor(lst.length/2);
  var left = lst.slice(0, middle);
  var right = lst.slice(middle);
  left = merge_sort(left);
  right = merge_sort(right);
  return merge(left, right);
};

function merge(left, right){
  var result = [];
  while(left.length > 0 && right.length >0){
    if(left[0] <= right[0]){
      result.push(left[0]);
      left = left.slice(1);
    } else {
      result.push(right[0]);
      right = right.slice(1);
    };
  };
  while(left.length > 0){
    result.push(left[0]);
    left = left.slice(1);
  };
  while(right.length > 0){
    result.push(right[0]);
    right = right.slice(1);
  };
  return result;
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
sorted = merge_sort(input);
alert(sorted);
