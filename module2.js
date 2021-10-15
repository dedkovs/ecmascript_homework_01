const helloWorldButton = document.getElementById('helloWorldButton');
const moduleLoadingStatus = document.getElementById('moduleLoadingStatus');

const helloWorldAsync = async () => {
  moduleLoadingStatus.innerHTML = 'loading module...';
  try {
    const module1 = await import('http://localhost:8080/module1.js');
    if (module1) {
      moduleLoadingStatus.innerHTML = '';
      module1.default();
    } else throw 'the module did not load';
  } catch (err) {
    moduleLoadingStatus.innerHTML = err;
  }
};

helloWorldButton.addEventListener('click', helloWorldAsync);
