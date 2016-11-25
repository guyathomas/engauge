<!DOCTYPE html>
<!-- saved from url=(0039)https://webgazer.cs.brown.edu/#download -->
<html lang="en" class="gr__webgazer_cs_brown_edu"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <meta name="description" content="">
        <meta name="author" content="">
        <!--<link rel="icon" href="../../favicon.ico">-->

        <title>WebGazer.js: Democratizing Webcam Eye Tracking on the Browser</title>

        <!-- Bootstrap core CSS -->
        <link href="./webgazer.js_files/bootstrap.min.css" rel="stylesheet">

        <link rel="stylesheet" href="./webgazer.js_files/default.css">
        <script src="./webgazer.js_files/highlight.pack.js"></script>
        <script>hljs.initHighlightingOnLoad();</script>

<style type="text/css">
body {
    position: relative;
    min-height: 2000px;
    padding-top: 50px;
}

.padright {
    padding-top: 0px;
    margin-bottom: 22px;
}
.pad {
    padding-top: 10px;
    margin-bottom: 20px;
}

.jumbotron p {
    font-size: 16px;
}

p > code.hljs { display: inline; }

        </style>

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>


    <body data-spy="scroll" data-target="#navbar" data-gr-c-s-loaded="true">

        <!-- Fixed navbar -->
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="https://webgazer.cs.brown.edu/#">WebGazer.js</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav nav-tabs" role="tablist">
                        <li class=""><a href="https://webgazer.cs.brown.edu/#home">Home</a></li>
                        <li><a href="https://webgazer.cs.brown.edu/#video">About</a></li>
                        <li><a href="https://webgazer.cs.brown.edu/#usage">Usage</a></li>
                        <li><a href="https://webgazer.cs.brown.edu/#support">Support</a></li>
                        <li class="active"><a href="https://webgazer.cs.brown.edu/#download">Download</a></li>
                        <li><a href="https://webgazer.cs.brown.edu/documentation">Documentation</a></li>
                        <li><a href="https://webgazer.cs.brown.edu/#examples">Examples</a></li>
                        <li><a href="https://webgazer.cs.brown.edu/#publication">Publication</a></li>
                        <li><a href="https://webgazer.cs.brown.edu/#press">Press</a></li>
                        <li><a href="https://webgazer.cs.brown.edu/#contact">Contact</a></li>
                    </ul>
                </div><!--/.nav-collapse
                -->
            </div>
        </nav>

        <div id="home" class="container pad" style="padding-top: 0px">
            <a href="https://github.com/brownhci/WebGazer"><img style="position: absolute; top: 30; right: 0; border: 0;" src="./webgazer.js_files/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"></a>
            <!-- Main
            component for a primary marketing message or call
            to action -->
            <div class="jumbotron">
                <h1 class="text-center" style="margin-bottom:20px"> WebGazer.js </h1>
                <h2 class="text-center" style="margin-bottom:0px"> Democratizing Webcam Eye Tracking on the Browser</h2>
            </div>
            <hr class="featurette-divider">
            <div id="description" class="container pad">
                <p class="text-justify">
                    WebGazer.js is an eye tracking library that uses common webcams to infer the eye-gaze locations of web visitors on a page in real time. The eye tracking model it contains self-calibrates by watching web visitors interact with the web page and trains a mapping between the features of the eye and positions on the screen. WebGazer.js is written entirely in JavaScript and with only a few lines of code can be integrated in any website that wishes to better understand
                    their visitors and transform their user experience. WebGazer.js runs entirely in the client browser, so no video data needs to be sent to a server. WebGazer.js runs only if the user consents in giving access to their webcam. 
                </p>
            </div>

            <hr class="featurette-divider">

            <div id="video" class="container pad">

                <div class="row">
                    <div class="col-sm-7">
                        <div class="embed-responsive embed-responsive-16by9" align="center">
                            <iframe width="560" height="315" src="./webgazer.js_files/NRLlRh2apA8.html" frameborder="0" allowfullscreen=""></iframe> 
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div>
                            <p class="text-left padright" style="font-size:20px">Real time gaze prediction on most major browsers</p>
                            <p class="text-left padright" style="font-size:20px">No special hardware - WebGazer.js uses common webcams</p>
                            <p class="text-left padright" style="font-size:20px">Self-calibration from clicks and cursor movements</p>
                            <p class="text-left padright" style="font-size:20px">Easy to integrate with a few lines of JavaScript</p>
                            <p class="text-left padright" style="font-size:20px">Swappable components for eye detection</p>
                            <p class="text-left padright" style="font-size:20px">Multiple gaze prediction models</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <hr class="featurette-divider">

        <div id="usage" class="container pad">
            <h2 class="text-center">Usage</h2>
            <div class="row">
                <div class="col-lg-12">
                    To use WebGazer.js you need to add the webgazer.js file as a script in your website:
                    <pre><code class="html hljs xml"> /* WebGazer.js library */ 
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"webgazer.js"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/javascript"</span> &gt;</span><span class="undefined"></span></code></pre>
                    <p> 
                        <i>Be aware that when you do local development and you might need to run locally a simple http server that supports the https protocol. </i>
                    </p>
                    <p>
                        Once the script is included, the <code class="javascript">webgazer</code> object is introduced into the global namespace. <code class="javascript">webgazer</code> has methods for controlling the operation of WebGazer.js allowing us to start and stop it, add callbacks, or change out modules. The two most important methods on <code class="javascript">webgazer</code> are <code class="javascript">webgazer.begin()</code> and <code class="javascript">webgazer.setGazeListener()</code>. <code class="javascript">webgazer.begin()</code> starts the data collection that enables the predictions, so it's important to call this early on. Once <code class="javascript">webgazer.begin()</code> has been called, WebGazer.js is ready to start giving predictions. <code class="javascript">webgazer.setGazeListener()</code> is a convenient way to access these predictions. This method invokes a callback you provide every few milliseconds to provide the current gaze location of a user. If you don't need constant access to this data stream, you may alternatively call <code class="javascript">webgazer.getCurrentPrediction()</code> which will give you a prediction at the moment when it is called.
                    </p>

                    <pre><code class="javascript hljs">
webgazer.setGazeListener(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">data, elapsedTime</span>) </span>{
    <span class="hljs-keyword">if</span> (data == <span class="hljs-literal">null</span>) {
        <span class="hljs-keyword">return</span>;
    }
    <span class="hljs-keyword">var</span> xprediction = data.x; <span class="hljs-comment">//these x coordinates are relative to the viewport </span>
    <span class="hljs-keyword">var</span> yprediction = data.y; <span class="hljs-comment">//these y coordinates are relative to the viewport</span>
    <span class="hljs-built_in">console</span>.log(elapsedTime); <span class="hljs-comment">//elapsed time is based on time since begin was called</span>
}).begin();
                    </code></pre>
                    <p> Here is the alternate method of getting predictions where you can request a gaze prediction as needed. </p>
                    <pre><code class="javascript hljs">
<span class="hljs-keyword">var</span> prediction = webgazer.getCurrentPrediction();
<span class="hljs-keyword">if</span> (prediction) {
    <span class="hljs-keyword">var</span> x = prediction.x;
    <span class="hljs-keyword">var</span> y = prediction.y;
}
                    </code></pre>
                </div>
            </div>
            <h3 class="text">Advanced Usage</h3>
            <p>There are several features that WebGazer.js enables beyond the example shown so far.</p><p>
            </p><div class="row">
                <div class="col-lg-12">
                    <h4>Saving Data Between Sessions</h4>
                    <p>WebGazer.js can save and restore the training data between browser sessions by storing data to localstorage. This occurs automatically when <code class="javascript">end()</code> is called. If you want each user session to be independent make sure that you do not call the <code class="javascript">end()</code> function. </p>
                    <pre><code class="javascript hljs">webgazer.end()</code></pre>
                </div>
            </div>
            <div>
                <h4>Changing in Use Regression and Tracker Modules</h4>
                <p>At the heart of WebGazer.js are the tracker and regression modules. The tracker module controls how eyes are detected and the regression module determines how the regression model is learned and how predictions are made based on the eye patches extracted from the tracker module. These modules can be swapped in and out at any time. We hope that this will make it easy to extend and adapt WebGazer.js and welcome any developers that want to contribute.</p>

                <p>WebGazer.js requires the bounding box that includes the pixels from the webcam video feed that correspond to the detected eyes of the user. Currently we include three external libraries that implement different Computer Vision algorithms to detect the face and eyes.</p>
                <div class="row">
                    <div class="col-lg-12">
                        <pre><code class="javascript hljs">webgazer.setTracker(<span class="hljs-string">"clmtrackr"</span>); <span class="hljs-comment">//set a tracker module</span></code></pre>
                        <pre><code class="javascript hljs">webgazer.addTrackerModule(<span class="hljs-string">"newTracker"</span>, NewTrackerConstructor); <span class="hljs-comment">//add a new tracker module</span></code></pre>
                        <p>Here are all the external tracker modules that come by default with WebGazer.js. Let us know if you want to introduce your own facial feature detection library. </p>
                        <ul>
                            <li><a href="https://github.com/auduno/clmtrackr">clmtrackr</a></li>
                            <li><a href="https://github.com/mtschirs/js-objectdetect">js_objectdetect</a></li>
                            <li><a href="https://trackingjs.com/">tracking.js</a></li>
                        </ul>
                    </div>
                </div> 
                <div class="row">
                    <div class="col-lg-12">
                        <pre><code class="javascript hljs">webgazer.setRegression(<span class="hljs-string">"ridge"</span>); <span class="hljs-comment">//set a regression module</span></code></pre>
                        <pre><code class="javascript hljs">webgazer.addRegressionModule(<span class="hljs-string">"newReg"</span>, NewRegConstructor); <span class="hljs-comment">//add a new regression module</span></code></pre>
                        <p>Here are all the regression modules that come by default with WebGazer.js. Let us know if you would like introduce different modules - just keep in mind that they should be able to produce predictions very fast.</p>
                        <ul>
                            <li>ridge - a simple ridge regression model mapping pixels from the detected eyes to locations on the screen.</li>
                            <li>weightedRidge - a weight ridge regression model with newest user interactions contribution more to the model.</li>
                            <li>threadedRidge - a faster implementation of ridge regression that uses threads.</li>
                            <li>linear - a basic simple linear regression that maps </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <h4>Pause and Resume</h4>
                    <p>It may be necessary to pause the data collection and predictions of WebGazer.js for performance reasons.</p>
                    <pre><code class="javascript hljs">
webgazer.pause(); <span class="hljs-comment">//WebGazer.js is now paused, no data will be collected and the gaze callback will not be executed</span>
webgazer.resume(); <span class="hljs-comment">//data collection resumes, gaze callback will be called again</span>
                    </code></pre>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <h4>Util and Params</h4>
                    <p>We provide some useful functions and objects in <code class="javascript">webgazer.util</code>. The webgazer.params object also contains some useful parameters to tweak to control video fidelity (trades off speed and accuracy) and sample rate for mouse movements.</p>
                    <pre><code class="javascript hljs">
webgazer.util.bound(prediction);
prediction.x; <span class="hljs-comment">//now always in the bounds of the viewport</span>
prediction.y; <span class="hljs-comment">//now always in the bounds of the viewport</span>
                    </code></pre>
                </div>
            </div>
        </div>


        <hr class="featurette-divider">
        <div id="support" class="container pad">
            <h2 class="text-center">Support</h2>
            <p class="text-left" pad="">
                WebGazer.js uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia">getUserMedia/Stream API</a> to get access to the webcam. These browsers are currently supported, as seen <a href="http://caniuse.com/#feat=stream">here</a>.
            </p>

            <div class="row">
                <div class="col-lg-3">
                    <center>
                        <img src="./webgazer.js_files/chrome.png" alt="Google Chrome" width="100" height="100">
                    </center>
                    <h4 class="text-center">Google Chrome 47+</h4>
                </div>
                <div class="col-lg-3">
                    <center>
                        <img src="./webgazer.js_files/edge.png" alt="Microsoft Edge" width="100" height="100">
                    </center>
                    <h4 class="text-center">Microsoft Edge 13+</h4>
                </div>
                <div class="col-lg-3">
                    <center>
                        <img src="./webgazer.js_files/firefox.png" alt="Mozilla Firefox" width="100" height="100">
                    </center>
                    <h4 class="text-center">Mozilla Firefox 44+</h4>
                </div>                
                <div class="col-lg-3">
                    <center>
                        <img src="./webgazer.js_files/opera.png" alt="Opera" width="100" height="100">
                    </center>
                    <h4 class="text-center">Opera 36+</h4>
                </div>
            </div>
        </div>


        <hr class="featurette-divider">
        <div id="download" class="container pad">
            <h2 class="text-center">Download Instructions</h2>
            <div class="row">
                <div class="col-lg-6">
                    <h3 class="pad">Download</h3>
                    <form method="get" action="https://webgazer.cs.brown.edu/webgazer.js">
                        <button class="btn btn-primary btn-lg" type="submit"><span class="glyphicon glyphicon-cloud-download" aria-hidden="true"></span> Download WebGazer.js</button>
                    </form>
                </div>
                <div class="col-lg-6">
                    <h3 class="pad">Create from Source</h3>
                    The GitHub repository can be found <a href="https://github.com/brownhci/WebGazer.git">here</a>.
                    <pre><code class="bash hljs">git <span class="hljs-built_in">clone</span> https://github.com/brownhci/WebGazer.git
<span class="hljs-built_in">cd</span> build
./build_library</code></pre>
                </div>
            </div>
        </div>


        <hr class="featurette-divider">
        <div id="examples" class="container pad">
            <h2 class="text-center pad">Examples</h2>
            <div class="row">              
                <div class="col-lg-6">
                    <img src="./webgazer.js_files/empty.png" alt="Empty Webpage Demo" width="300" height="250">
                    <h4 class="pad">WebGazer.js on an Empty Webpage</h4>
                    <p>See how easy it is to integrate WebGazer.js on any webpage. Just with a few clicks you will get real-time predictions.  The only thing you need to do is click on a few locations within the screen while looking at the cursor. Both clicks and cursor movements make the predictions more accurate. The video and the visualized gaze prediction are only shown in debugging mode.
                        </p><form method="get" action="https://webgazer.cs.brown.edu/demo.html">
                        <button class="btn btn-primary" type="submit">Try Live!</button>
                    </form>
                    <p></p>
                </div>
                <div class="col-lg-6">
                    <img src="./webgazer.js_files/collision.png" alt="Collision demo" width="300" height="250">
                    <h4 class="pad">Ball Collision Game</h4>
                    <p>Move the orange ball with your eyes and create collisions with the blue balls. Train WebGazer.js by clicking in various locations within the screen, while looking at your cursor.                     
                        </p><form method="get" action="https://webgazer.cs.brown.edu/collision.html">
                        <button class="btn btn-primary" type="submit">Try Live!</button>
                    </form>
                    <p></p>
                </div>  
            </div>
        </div>


        <hr class="featurette-divider">
        <div id="publication" class="container pad">
            <h2 class="text-center">Publication</h2>
            <p>If you use WebGazer.js please cite the following paper:</p>
            <code>
                @inproceedings{papoutsaki2016webgazer,<br>
                author     = {Alexandra Papoutsaki and Patsorn Sangkloy and James Laskey and Nediyana Daskalova and Jeff Huang and James Hays},<br>
                title      = {WebGazer: Scalable Webcam Eye Tracking Using User Interactions},<br>
                booktitle  = {Proceedings of the 25th International Joint Conference on Artificial Intelligence (IJCAI)},<br>
                pages      = {3839--3845},<br>
                year       = {2016},<br>
                organization={AAAI}<br>
                }
            </code>
        </div>

        <hr class="featurette-divider">
        <div id="press" class="container pad">
            <h2 class="text-center">Press</h2>
            <div class="row">
                <div class="col-lg-6">
                    <p>A few websites that featured WebGazer.js:</p>
                    <ul>
                        <li><a href="http://www.cio.com.au/article/601028/web-developers-meet-webgazer-software-turns-webcams-into-eye-trackers/">CIO</a></li>
                        <li><a href="http://www.healthaim.com/exclusive-scientist-alexandra-papoutsaki-on-revolutionary-eye-tracking-technology-webgazer-js-for-using-computers-without-lifting-a-finger/58039">HEALTHAIM</a></li>
                        <li><a href="http://www.i-programmer.info/news/146-uiux/9786-webgazerjs-an-in-browser-eye-tracking-library.html">I Programmer</a></li>
                        <li><a href="https://news.brown.edu/articles/2016/06/eyetracker">News from Brown</a></li>
                        <li><a href="http://www.pcworld.com/article/3078712/application-development/web-developers-meet-webgazer-software-that-turns-webcams-into-eye-trackers.html">PCWorld</a></li>
                        <li><a href="http://news.softpedia.com/news/webgazer-uses-javascript-and-your-webcam-to-track-eye-movements-505666.shtml">Softpedia</a></li>
                        <li><a href="https://techxplore.com/news/2016-06-software-webcams-eye-trackers.html">TechXplore</a></li>
                        <li><a href="http://www.theregister.co.uk/2016/06/02/brown_boffins_brew_eyetracking_javascript/">The Register</a></li>
                        <li><a href="http://zeenews.india.com/news/science/webgazer-js-turns-users-webcams-into-eye-trackers_1891045.html">Z NEWS</a></li>
                    </ul>
                </div>
                <div class="col-lg-6">
                <p>Online discussions in:</p>
                <ul>
                    <li><a href="https://news.ycombinator.com/item?id=11770273">Hacker News</a></li>
                    <li><a href="https://www.reddit.com/r/programming/comments/4kyeww/webgazerjs_eye_tracking_library_using_the_webcam/">Reddit Programming</a></li>
                    <li><a href="https://twitter.com/search?f=tweets&amp;vertical=default&amp;q=webgazer">Twitter</a></li>
                </ul></div>

        </div>

        <hr class="featurette-divider">
        <div id="contact" class="container pad">
            <h2 class="text-center pad">Who We Are</h2>
            <div class="row">
                <!-- bootstrap has 12 columns, so each person gets part of that 12 cols -->
                
                <div class="col-lg-3">
                    <img class="img-circle center-block" src="./webgazer.js_files/alexpap-hs.jpg__90x120_q85_subsampling-2.jpg" alt="Alexandra Papoutsaki" height="140">
                    <h4 class="text-center"><a href="http://cs.brown.edu/~alexpap">Alexandra Papoutsaki</a></h4>
                    <p>PhD Candidate in Computer Science at Brown University.</p>
                </div>
                <div class="col-lg-3">
                    <img class="img-circle center-block" src="./webgazer.js_files/jim.jpg" alt="James Laskey" height="140">
                    <h4 class="text-center">James Laskey</h4>
                    <p>Software Enginner at Google. Graduated from Brown in 2016.</p>
                </div>
                <div class="col-lg-3">
                    <img class="img-circle center-block" src="./webgazer.js_files/aaron.jpg" alt="Aaron Gokaslan" height="140">
                    <h4 class="text-center">Aaron Gokaslan</h4>
                    <p>Undergraduate student at Brown University.</p>
                </div>                
                <div class="col-lg-3">
                    <img class="img-circle center-block" src="./webgazer.js_files/jeff-hs.jpg__90x120_q85_subsampling-2.jpg" alt="Jeff Huang" height="140">
                    <h4 class="text-center"><a href="http://jeffhuang.com/">Jeff Huang</a></h4>
                    <p>Assistant Professor of Computer Science at Brown University.</p>
                </div>
            </div>
            <div class="pad">
                <h3>Other Collaborators</h3>
                <ul style="margin-top: 20px">
                    <li><a href="https://cs.brown.edu/~ptunnell/">Preston Tunnell Wilson</a> - PhD student at Brown University</li>
                    <li><a href="http://www.cc.gatech.edu/~psangklo/">Patsorn Sangkloy</a> - PhD student at Georgia Institute of Technology</li>
                    <li><a href="http://cs.brown.edu/~nediyana">Nediyana Daskalova</a> - PhD student at Brown University</li>
                    <li><a href="http://www.cc.gatech.edu/~hays/">James Hays</a> - Associate Professor at Georgia Institute of Technology</li>
                </ul>
            </div>            
        </div>
        <hr class="featurette-divider">
        <div id="license" class="container pad">
            <h2 class="text-center">License</h2>
            <p class="text-center">Copyright (C) 2016 <a href="http://hci.cs.brown.edu/">Brown HCI Group</a><br>
            Licensed under <a href="http://www.gnu.org/licenses/gpl-3.0.en.html">GPLv3</a>.
            </p>

        <script src="./webgazer.js_files/jquery.min.js"></script>
        <script src="./webgazer.js_files/bootstrap.min.js"></script>
    


</div></div></body></html>