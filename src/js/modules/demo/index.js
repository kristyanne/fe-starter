const selector = '.js-demo';

export default function init() {
  const node = document.querySelector(selector);

  if(!node) {
    return;
  }

  console.log(node, 'Hi :)');
}
