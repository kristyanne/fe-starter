const selector = '.js-demo';

export default function init() {
    const node = document.querySelector(selector);

    if(!node) {
        console.log('Nothing to do here. Bye.');
        return;
    }

    console.log(node, 'Demo has loaded!');
}
