let lunches = [];

function addLunchToEnd(arr1, str1){
  arr1.push(str1);
  console.log(`${str1} added to the end of the lunch menu.`);
  return arr1;
}

function addLunchToStart(arr1, str1){
  arr1.unshift(str1);
  console.log(`${str1} added to the start of the lunch menu.`);
  return arr1;
}

function removeLastLunch(arr1){
  if (arr1.length == 0){
    console.log("No lunches to remove.");
  } else {
  let removedItem = arr1.pop();
  console.log(`${removedItem} removed from the end of the lunch menu.`);
  }
  return arr1;
}

function removeFirstLunch(arr1){
  if (arr1.length == 0){
    console.log("No lunches to remove.");
  } else {
  let removedItem = arr1.shift();
  console.log(`${removedItem} removed from the start of the lunch menu.`);
  }
  return arr1;
}

function getRandomLunch(arr1){
  if (arr1.length == 0){
    console.log("No lunches available.");
  } else {
  const randomItem = arr1[Math.floor(Math.random() * arr1.length)];
  console.log(`Randomly selected lunch: ${randomItem}`);
  }
  return arr1;
}

function showLunchMenu(arr1){
  if (arr1.length == 0){
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr1.join(", ")}`);
  }
}
