This is the tic-tac-toe example from React's Codepen.  I modified it to work outside of codeben by adding my own package.json and hacking the react and react-dom scripts into index.html for now instead of webpacking them.  It is served with http-server although I'm not sure that is installed correctly--I used the jitsu method (jitsu install http-server) which makes a subdirectory in the project called 'http-server' that has its own package.json and everything, which looks odd but it works fine for now.  

I used the copy-files module to create a basic dist script and put the needed files in the http-server public directory after babel builds them.  I don't like how the directory location is relative to the dist.js script and I'm probably doing something wrong there, too.

It's all very basic and needs refinement, but it works for now.

Lastly, I enhanced the code to handle the case of a draw between the players which the original code made no provision for.