export function getData() {
  fetch('training.json').then(function (response) {
    console.log("Hello Damn");
    console.log(response)
  });
}