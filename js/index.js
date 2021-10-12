import CountdownTimer from './timer.js';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 12, 2021, 21:01:00'),
});

timer.start();