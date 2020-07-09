let worker = [];
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const innerMessage = document.getElementById('message');

const startWorker = () => {
  if (typeof (Worker) !== "undefined") {
    worker.push(new Worker('demo_worker.js'));
    for (let a = 0; a < worker.length; a++) {
      const p = document.createElement('p');
      p.setAttribute('id', a);
      document.body.appendChild(p);
      worker[a].addEventListener('message', (event) => {
        document.getElementById(a).innerText = event.data;
      })
    }
  }
}

const stopWorker = () => {
  if (typeof (Worker) !== undefined) {
    for (let a = 0; a < worker.length; a++) {
      worker[a].terminate();
    }
    worker = [];
  }
}

startButton.addEventListener('click', () => {
  startWorker();
})

stopButton.addEventListener('click', () => {
  stopWorker();
  console.log('stop')
})