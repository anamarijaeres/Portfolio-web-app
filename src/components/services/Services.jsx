import React, {useState} from "react";
import './services.css'
import {FiHeart} from 'react-icons/fi';
import {FaHeart} from 'react-icons/fa';
import {BsFillCircleFill} from 'react-icons/bs';
import {BsCircle} from 'react-icons/bs'
import ReactSlider from "react-slider";
import {BsShuffle} from 'react-icons/bs';
import {BiRepeat} from 'react-icons/bi';

let arr2 = new Array(3);
for (let i = 0; i < arr2.length; i++) {
    arr2[i] = false;
}

const Services = () =>{
    let [open,setOpen] = useState(false);
    let [open2,setOpen2] = useState(false);
    let [open3,setOpen3] = useState(false);
    let [show,setShow] = useState(false);


    const initialValue = [false,false,false,false,false,false,false];
    const initialValue2 = [false,false,false];
    const initialValue3 = [false,false,false,false,false,false];


    let [stateOptions, setStateValues] = useState(initialValue);
    let [stateOptions2, setStateValues2] = useState(initialValue2);
    let [stateOptions3, setStateValues3] = useState(initialValue3);


    const handleStates= (number)=>{
        let changeTo = new Array(7);
        for (let i = 0; i < changeTo.length; i++) {
            if(i===number){
                changeTo[i]= !stateOptions[i];
            }else {
                changeTo[i] = stateOptions[i];
            }
        }
        setStateValues(changeTo);
    }

    const handleStates2= (number)=>{
        let changeTo = new Array(3);
        for (let i = 0; i < changeTo.length; i++) {
            if(i===number){
                changeTo[i]= !stateOptions2[i];
            }else {
                changeTo[i] = stateOptions2[i];
            }
        }
        setStateValues2(changeTo);
    }

    const handleStates3= (number)=>{
        let changeTo = new Array(6);
        for (let i = 0; i < changeTo.length; i++) {
            if(i===number){
                changeTo[i]= !stateOptions3[i];
            }else {
                changeTo[i] = stateOptions3[i];
            }
        }
        setStateValues3(changeTo);
    }

    function myFunction2() {
        var dots2 = document.getElementById("dots2");
        var moreText2 = document.getElementById("more2");
        var btnText2 = document.getElementById("myBtn2");


        if (dots2.style.display === "none") {
            dots2.style.display = "inline";
            btnText2.innerHTML = "Read more";
            moreText2.style.display = "none";
        } else {
            dots2.style.display = "none";
            btnText2.innerHTML = "Read less";
            moreText2.style.display = "inline";
        }
    }


    const handleClick = () => {
        setOpen2(false);
        setOpen3(false);
        setOpen(!open);
    }

    const handleClick2 = () => {
        setOpen(false);
        setOpen3(false);
        setOpen2(!open2);
    }

    const handleClick3 = () => {
        setOpen(false);
        setOpen2(false);
        setOpen3(!open3);
    }

    const handleShowMe= () => {
        setShow(!show);
    }




    return(
        <section id='projects'>
            <h5>What I have learned so far</h5>
            <h2> Education </h2>

            <div className='container service__intro'>
                <h4>The first reading of somebody's CV is similar to the first listening of the new song.</h4>
                <p className='text-light'>

                    To get the full experience you have to listen to the song from the beginning to the end.
                    However, if you only want to hear/read my favourite part, fast forward to 20:22
                    <span id="dots2">...</span><span id="more2">
                     (my final year). Audio playbar represent the timeline of my studies. Usually the songs starts at 0:00, and since my studies
                    started in 2017, the beginning of my "song" starts at 20:17. Timeline has 3 major milestones that are in the audio playbar
                    marked with circles, 2020 represent the end of my bachelor degree, 2021 presents the student exchange program I participated in Madrid and 2022 present the end of my master degree.
                    Aforementioned periods are also presented chronologically with green cards below the audio playbar.
                    To reveal some of my favourite courses from the specific period, click on the circle or the card. To read the short description of
                    the course, like/heart them. </span>
                    <div onClick={myFunction2} id="myBtn2" className='readmore__button' >Read more</div>

                </p>



            </div>




            <div className='container play__bar'>
                <BsFillCircleFill onClick={()=> handleClick()} className={open===true? 'play__bar__circle active':'play__bar__circle'}/>
                <BsFillCircleFill onClick={()=> handleClick2()} className={open2===true? 'play__bar__circle2 active':'play__bar__circle2'}/>
                <BsFillCircleFill onClick={()=> handleClick3()} className={open3===true? 'play__bar__circle3 active':'play__bar__circle3'}/>
                <div className='container__skills'>


                        <div className={(open === true ) ? 'bacc' : ''}/>



                        <div className={open2 === true ? 'masteres' : ''}/>


                        <div className={open3===true ? 'masterhr': ''}> </div>



                </div>
                <div className='age__2017'>20:17</div>
                <div className='age__2020'>20:20</div>
                <div className='age__2021'>20:21</div>
                <div className='age__2022'>20:22</div>
                <BsShuffle className='shuffle__icon' />
                <BiRepeat className='repeat__icon'/>




            </div>



            <div className='container services__container'>
                <article className='service'>
                    <div className='service__head' onClick={handleClick}>
                        <h3>Bachelor of Computer Science</h3>
                        <small> University of Zagreb <br/>2017-2020</small>

                    </div>

                    <div className={open===true || open2===true ||( open3==true)? 'skills__open': 'skills__close'}>
                        <ul className='service__list' >

                            <li>
                                <FiHeart onClick={() =>handleStates(0)} className='service__list-icon' />
                                <FaHeart onClick={() =>handleStates(0)} className={stateOptions[0]===true ? 'service__list-icon': 'dont__show__me service__list-icon'} />
                                <p>Introduction to Artificial Intelligence</p>

                                <small className={stateOptions[0]===true? 'show__me': 'dont__show__me'}> BFS, DFS, A* search, backtracking, Bayesian, Markov networks, Naïve Bayes classifier, Decision trees</small>
                            </li>

                            <li>
                                <FiHeart onClick={() =>handleStates(1)} className='service__list-icon' />
                                <FaHeart onClick={() =>handleStates(1)} className={stateOptions[1]===true ? 'service__list-icon': 'dont__show__me service__list-icon'} />
                                <p>Design Patterns in Programming</p>
                                <small className={stateOptions[1]===true? 'show__me': 'dont__show__me'}>OO design, strategy, template method, observer, decorator, command, generic factories, sigleton, itertor, adapter, composite, state, proxy, bridge, prototype, visitor, MVC</small>
                            </li>
                            <li>
                                <FiHeart onClick={() =>handleStates(2)} className='service__list-icon' />
                                <FaHeart onClick={() =>handleStates(2)} className={stateOptions[2]===true ? 'service__list-icon': 'dont__show__me service__list-icon'} />
                                <p>Application Development for iOS</p>
                                <small className={stateOptions[2]===true? 'show__me': 'dont__show__me'}> XCode, Swift, MVC, delegate concept, data collections, multithreading in iOS, data persistence, application lifecycle</small>
                            </li>
                            <li>
                                <FiHeart onClick={() =>handleStates(3)} className='service__list-icon' />
                                <FaHeart onClick={() =>handleStates(3)} className={stateOptions[3]===true ? 'service__list-icon': 'dont__show__me service__list-icon'} />
                                <p>Statistical Data Analysis</p>
                                <small className={stateOptions[3]===true? 'show__me': 'dont__show__me'}>descriptive statistics, dispersion, outliers, statistical inference, sampling, Testing statistical hypotheses, type I and type II errors, test power, test result interpretation, resampling procedures, Jackknife, bootstrap, linear regression, Pearson correlation coefficient, Multiple regression, Logistic regression, Wilcoxon signed-rank test, Mann-Whitney-Wilcoxon test, Kruskal-Wallis test, Spearman correlation coefficient</small>
                            </li>
                                <li>
                                <FiHeart onClick={() =>handleStates(4)} className='service__list-icon' />
                                <FaHeart onClick={() =>handleStates(4)} className={stateOptions[4]===true ? 'service__list-icon': 'dont__show__me service__list-icon'} />
                                <p>Software engineering</p>
                                <small className={stateOptions[4]===true? 'show__me': 'dont__show__me'}> UML class diagrams, use-case modeling, system modeling, traditional models, agile methods, monolithic and distributed software architectures, Spring framework, design of test cases</small>
                            </li>

                            <li>
                                <FiHeart onClick={() =>handleStates(5)} className='service__list-icon' />
                                <FaHeart onClick={() =>handleStates(5)} className={stateOptions[5]===true ? 'service__list-icon': 'dont__show__me service__list-icon'} />
                                <p>Databases</p>
                                <small className={stateOptions[5]===true? 'show__me': 'dont__show__me'}> Relation database, SQL, select-project-join, group-by, hashed files, B-trees, Entity, Triggers, Data modeling, concurrency control, query optimization </small>
                            </li>

                            <li>
                                <FiHeart onClick={() =>handleStates(6)} className='service__list-icon' />
                                <FaHeart onClick={() =>handleStates(6)} className={stateOptions[6]===true ? 'service__list-icon': 'dont__show__me service__list-icon'} />
                                <p>Algorithms and Data Structures</p>
                                <small className={stateOptions[6]===true? 'show__me': 'dont__show__me'}> Big O notation, Recursive backtracking, Dynamic programming, sorting algorithms (selection, insertion, quicksort, heapsort, mergesort), arrays, Linked Lists, abstract data types (stacks, queues, priority queues, sets, maps), hash tables, collision, Advanced data structures (multi-way trees and graphs), Brute-force algorithms, Greedy algorithms, Branch-and-bound, Shortest-path algorithms (Dijkstra's and Floyd's algorithms); Minimum spanning tree (Prim's and Kruskal's algorithms), binary search trees, heaps</small>
                            </li>
                        </ul>
                    </div>
                </article>
                {/*end of UX/UI*/}
                <article className='service'>
                    <div className='service__head' onClick={handleClick2}>
                        <h3>Master of Data Science & <br/>Formal Methods</h3>
                        <small> Universidad Politecnica de Madrid <br/>2020-2021</small>

                    </div>

                    <div className={open2===true || open3===true ? 'skills__open': 'skills__close'}>
                        <ul className='service__list'>
                            <li>
                                <FiHeart onClick={() =>handleStates2(0)} className='service__list-icon' />
                                <FaHeart onClick={() =>handleStates2(0)} className={stateOptions2[0]===true ? 'service__list-icon': 'dont__show__me service__list-icon'} />
                                <p>Deep Learning</p>

                                <small className={stateOptions2[0]===true? 'show__me': 'dont__show__me'}> feed-forward models, loss functions, activation functions,  learning with gradient descent, deep convolutional networks, Regularization, Recurrent models</small>
                            </li>

                            <li>
                                <FiHeart onClick={() =>handleStates2(1)} className='service__list-icon' />
                                <FaHeart onClick={() =>handleStates2(1)} className={stateOptions2[1]===true ? 'service__list-icon': 'dont__show__me service__list-icon'} />
                                <p>Time Series Data Mining</p>
                                <small className={stateOptions2[1]===true? 'show__me': 'dont__show__me'}> ARIMA, VARIMA, patterns, time series size reduction, multiobjective time series segmentation, prediction</small>
                            </li>

                            <li>
                                <FiHeart onClick={() =>handleStates2(2)} className='service__list-icon' />
                                <FaHeart onClick={() =>handleStates2(2)} className={stateOptions2[2]===true ? 'service__list-icon': 'dont__show__me service__list-icon'} />
                                <p>Graph Analysis of Social Networks</p>
                                <small className={stateOptions2[2]===true? 'show__me': 'dont__show__me'}> Connectivity analysis in networks, graph analysis, Influence in social networks, Communities Detection in Social Networks, Simulation, contagious and opinions in social networks</small>
                            </li>

                        </ul>
                    </div>
                </article>
                {/*end of Web Development*/}
                <article className='service'>
                    <div className='service__head' onClick={handleClick3}>
                        <h3>Master of Computer Science</h3>
                        <small> University of Zagreb <br/>2021-2022</small>

                    </div>

                    <div className={open3===true ? 'skills__open': 'skills__close'}>
                        <ul className='service__list'>
                            <li>
                                <FiHeart onClick={() =>handleStates3(0)} className='service__list-icon' />
                                <FaHeart onClick={() =>handleStates3(0)} className={stateOptions3[0]===true ? 'service__list-icon': 'dont__show__me service__list-icon'} />
                                <p>Machine Learning</p>

                                <small className={stateOptions3[0]===true? 'show__me': 'dont__show__me'}>Loss function and error function, Overfitting and model selection, Least-squares regression,Logistic regression, Generalized linear model,Support vector machine for classification, Lazy classification (k-NN), Kernel functions, Laplace estimator,  Dirichlet-multinomial model, Bayes decision rule for classification, Naïve Bayes classifier, Multivariate Gaussian Bayes model, Gaussian mixture model for clustering, K-means algorithm, Confusion matrix-based performance measures, Resampling error estimation (cross-validation)</small>
                            </li>
                            <li>
                                <FiHeart onClick={() =>handleStates3(3)} className='service__list-icon' />
                                <FaHeart onClick={() =>handleStates3(3)} className={stateOptions3[3]===true ? 'service__list-icon': 'dont__show__me service__list-icon'} />
                                <p>Distributed Systems</p>
                                <small className={stateOptions3[3]===true? 'show__me': 'dont__show__me'}> Client-server model: Socket API, RPC, RMI, publish/subscribe, web-technologies, REST, WebSocket, Microservices, Formal models of distributed systems (synchronous and asynchronous), Process synchronisation (physical and logical time), Data replication and consistency, Cloud computing (IaaS, PaaS, SaaS), Docker, Kubernetes, Peer-to-peer (P2P) systems, Blockchain i Distributed Ledger Technology (DLT), Fault tolerance in distributed systems</small>
                            </li>
                            <li>
                                <FiHeart onClick={() =>handleStates3(1)} className='service__list-icon' />
                                <FaHeart onClick={() =>handleStates3(1)} className={stateOptions3[1]===true ? 'service__list-icon': 'dont__show__me service__list-icon'} />
                                <p>Advanced Algorithms and Data Structures</p>
                                <small className={stateOptions3[1]===true? 'show__me': 'dont__show__me'}>Balanced trees (AVL trees, red-black trees), Advanced data structures (B-trees, Fibonacci heaps), String-based data structures and algorithms (suffix arrays, suffix trees, tries), Linear programming (duality, simplex method), Dynamic programming, Greedy algorithms, Graphs (topological sort, finding strongly connected components, matching), Network flows (max flow Ford-Fulkerson algorithm, max flow min cut, maximum bipartite matching)</small>
                            </li>

                            <li>
                                <FiHeart onClick={() =>handleStates3(2)} className='service__list-icon' />
                                <FaHeart onClick={() =>handleStates3(2)} className={stateOptions3[2]===true ? 'service__list-icon': 'dont__show__me service__list-icon'} />
                                <p>Soft Computing</p>
                                <small className={stateOptions3[2]===true? 'show__me': 'dont__show__me'}>Fuzzy sets, fuzzy logic, Fuzzy logic inference (fuzzy propositions, fuzzy relations, and fuzzy implications), Perceptron (Boltzmann learning) , Multilayer perceptron (error-backpropagation learning), Self-organizing networks (Hebbian non-supervised learning), fuzzyfication and defuzzyfication, Evolutionary algorithms for SOOP</small>
                            </li>

                            <li>
                                <FiHeart onClick={() =>handleStates3(4)} className='service__list-icon' />
                                <FaHeart onClick={() =>handleStates3(4)} className={stateOptions3[4]===true ? 'service__list-icon': 'dont__show__me service__list-icon'} />
                                <p>Discrete Mathematics</p>
                                <small className={stateOptions3[4]===true? 'show__me': 'dont__show__me'}>The Euclidean Algorithm, Primes, Congruences, Functions in Number Theory, Quadratic Residues, Diophantine Equations, Semigroups and Groups, Rings and Fields, Finite Fields, Introduction to Cryptography, Data Encryption Standard, The RSA Public-Key Cryptosystem, Other Public-Key Cryptosystems</small>
                            </li>
                            <li>
                                <FiHeart onClick={() =>handleStates3(5)} className='service__list-icon' />
                                <FaHeart onClick={() =>handleStates3(5)} className={stateOptions3[5]===true ? 'service__list-icon': 'dont__show__me service__list-icon'} />
                                <p>Natural Language Processing</p>
                                <small className={stateOptions3[5]===true? 'show__me': 'dont__show__me'}>NLP, Language Modeling, Part of speech tagging, Hidden Markov Models, word embeddings, n-grams, Lexicons for Sentiment </small>
                            </li>


                        </ul>
                    </div>
                </article>
                {/*end of Content Creation*/}

            </div>

        </section>
    )
}

export default Services;