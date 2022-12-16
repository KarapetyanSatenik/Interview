# Node Interview Questions

Number of questions: Total = 77; High = 21; Medium = 27; Low = 29.

### Table of Contents

| No.      | Questions                                                                                                                                                            | Priority |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| **1**    | **Node.js**                                                                                                                                                          |          |
| 1.1      | [What is Node.js?](#what-is-nodejs)                                                                                                                                  | High     |
| 1.2      | [When to use Node.js and when not to use it?](#when-to-use-nodejs-and-when-not-to-use-it)                                                                            | Medium   |
| 1.3      | [What is package.json?](#what-is-package.json?)                                                                                                                      | Low      |
| 1.4      | [What is the difference between dependencies and devDependencies in package.json?](#what-is-the-difference-between-dependencies-and-devdependencies-in-package.json) | Low      |
| 1.5      | [What is npm?](#what-is-npm)                                                                                                                                         | Medium   |
| 1.6      | [What is the difference between Sync vs Async operations?](#what-is-the-difference-between-sync-vs-async-operations)                                                 | Medium   |
| 1.7      | [How Event Loop works?](#how-event-loop-works)                                                                                                                       | High     |
| 1.8      | [Is Node.js entirely based on a single-thread?](#is-node.js-entirely-based-on-a-single-thread)                                                                       | High     |
| 1.9      | [What is the Event Emitter class? How it is related to other classes?](#what-is-the-event-emitter-class)                                                             | Low      |
| 1.10     | [What kinds of streams does Node.js have?](#what-kinds-of-streams-does-node.js-have)                                                                                 | High     |
| 1.11     | [When Streams can be used in Node.js?](#when-streams-can-be-used-in-node.js)                                                                                         | Medium   |
| 1.12     | [What are the differences between worker thread and child_process?](#what-are-the-differences-between-worker-thread-and-child_process)                               | Low      |
| 1.13     | [What is the difference between commonJS and ES modules?](#what-is-the-difference-between-commonjs-and-es-modules)                                                   | Low      |
| 1.14     | [How to force node.js to treat your .js files as ES modules?](#how-to-force-node-js-to-treat-your-js-files-as-es-modules)                                            | Low      |
| 1.15     | [What is a Memory Leak? How to prevent it?](#what-is-a-memory-leak)                                                                                                  | Medium   |
| **2**    | **Dealing with async code**                                                                                                                                          |          |
| 2.1      | [How do you understand the Callback Pattern? What is a callback hell?](#how-do-you-understand-the-callback-pattern-what-is-a-callback-hell)                          | High     |
| 2.2      | [What is a Promise?](#what-is-a-promise)                                                                                                                             | High     |
| 2.3      | [What states does the Promise have? Can the state be changed once it was fulfilled or rejected?](#what-states-does-the-promise-have)                                 | High     |
| 2.4      | [What are the advantages of the async/await over Promises?](#what-are-the-advantages-of-the-async-await-over-promises)                                               | Medium   |
| 2.5      | [What is Promisification and when it is used?](#what-is-promisification-and-when-it-is-used)                                                                         | Low      |
| **3**    | **Express.js**                                                                                                                                                       |          |
| 3.1      | [What is Express.js and what is its use?](#what-is-express.js and what is its use)                                                                                   | Medium   |
| 3.2      | [What are the main building blocks of Express.js?](#what-are-the-main-building-blocks-of-express.js)                                                                 | Medium   |
| 3.3      | [What are the purposes for middlewares in Express.js?](#what-are-the-purposes-for-middlewares-in-express-js)                                                         | High     |
| 3.4      | [What is the use of **next** in Express.js?](#what-is-the-use-o-next-in-express-js)                                                                                  | Medium   |
| 3.5      | [How can you differ an error handling function from a request handler function?](#how-can-you-differ-an-error-handling-function-from-a-request-handler-function)     | Low      | 
| **4**    | **NestJS**                                                                                                                                                           |          |
| 4.1      | [What can be a Provider in NestJS?](#what-can-be-a-provider-in-nestjs)                                                                                               | Low      |
| 4.2      | [What are the use cases for Pipes in NestJS?](#what-are-the-use-cases-for-pipes-in-nestjs)                                                                           | Low      |
| 4.3      | [Is there a possibility to bind extra logic before/after method execution in NestJS?](#how-to-bind-extra-logic-before-after-method-execution-in-nestjs)              | Low      |
| 4.4      | [How all unhandled exceptions are processed in NestJS?](#how-all-unhandled-exceptions-are-processed-in-nestjs)                                                       | Low      |
| **5**    | **Monitoring and Logging**                                                                                                                                           |          |
| 5.1      | [What is a Health check? Why do we need it?](#what-is-a-health-check)                                                                                                | Low      |
| 5.2      | [What is a correlation ID? How it helps to debug your application?](#what-is-a-correlation-id)                                                                       | Low      |
| **6**    | **Testing**                                                                                                                                                          |          |
| 6.1      | [What is a test pyramid? How can you implement it regarding HTTP APIs?](#what-is-a-test-pyramid-how-can-you-implement-it-regarding-http-apis)                        | High     |
| 6.2      | [What is a Given-When-Then pattern?](#what-is-a-given-when-then-pattern)                                                                                             | Medium   |
| 6.3      | [What mocks and stubs are? How are they used in integration testing?](#what-mocks-and-stubs-are-how-are-they-used-in-integration-testing)                            | Medium   |
| 6.4      | [What test runner libraries do you know?](#what-test-runner-libraries-do-you-know)                                                                                   | Low      |
| 6.5      | [What is Unit-testing? What are the FIRST principles?](#what-is-unit-testing-what-are-the-first-principles)                                                          | High     |
| **7**    | **Software design**                                                                                                                                                  |          |
| 7.1      | REST API:                                                                                                                                                            |          |
| 7.1.1    | - [What are the Levels of REST API?](#what-are-the-levels-of-rest-api)                                                                                               | Low      |
| 7.1.2    | - [What constraints does the REST have?](#what-constraints-does-the-rest-have)                                                                                       | Medium   |
| 7.1.3    | - [Name the main Http methods. What is the difference between Put and Patch?](#name-the-main-http-methods)                                                           | High     |
| 7.1.4    | - [What status should be sent in a response to a create object request?](#what-status-should-be-sent-in-a-response-to-a-create-object-request)                       | Medium   |
| 7.2      | [explain the MVC model.](#explain-the-mvc-model)                                                                                                                     | High     |
| 7.3      | [What is GraphQL? What are its advantages over REST API?](#what-is-graphql)                                                                                          | Low      |
| 7.4      | [Name the key principles of OOP?](#name-the-key-principles-of-oop)                                                                                                   | High     |
| 7.5      | [What is a dependency injection?](#what-is-a-dependency-injection)                                                                                                   | Medium   |
| 7.6      | [What is a Layered Architecture? Give a few examples](#what-is-a-layered-architecture)                                                                               | Medium   |
| **8**    | Databases                                                                                                                                                            |          |
| 8.1      | _RDBMS_ (Postgres or MySQL)                                                                                                                                          |          |
| 8.1.1    | [How data is stored in RDBMS?](#how-data-is-stored-in-rdbms)                                                                                                         | High     |
| 8.1.2    | [What is a normalization concept?](#what-is-a-normalization-concept)                                                                                                 | Medium   |
| 8.1.3    | [What table relationships do you know? How to create them?](#what-table-relationships-do-you-know)                                                                   | Medium   |
| 8.1.4    | [What is the difference between DDL and DML?](#what-is-the-difference-between-ddl-and-dml)                                                                           | Medium   |
| 8.1.5    | [What data types are presented in PostgreSQL?](#what-data-types-are-presented-in-postgresql)                                                                         | Low      |
| 8.1.6    | [How tables can be joined?](#how-tables-can be joined)                                                                                                               | High     |
| 8.1.7    | [What is a sub query?](#what-is-a-sub-query)                                                                                                                         | Low      |
| 8.1.8    | [Explain Transactions and ACID](#explain-transactions-and-acid)                                                                                                      | High     |
| 8.1.9    | [What are Lock Levels in Postgres?](#what-are-lock-levels-in-postgres)                                                                                               | Low      |
| 8.1.10   | [What type of indexes do you know? When to use them?](#what-type-of-indexes-do-you-know)                                                                             | High     |
| 8.1.11   | [What is ORM? What problems does it solve?](#what-is-orm)                                                                                                            | Low      |
| 8.1.12   | TypeORM                                                                                                                                                              |          |
| 8.1.12.1 | - [What is the Query Builder?](#what-is-the-wuery-builder)                                                                                                           | Low      |
| 8.1.12.2 | - [What are Active Record and Data Mapper patterns?](#what-are-active-record-and-data-mapper-patterns)                                                               | Low      |
| 8.1.12.3 | - [What is the difference between Raw Entities and Entities?](#what-is-the-difference-between-raw-entities-and-entities)                                             | Low      |
| 8.1.12.4 | - [How to process tables with a lot of data inside with typeorm?](#how-to-process-tables-with-a-lot-of-data-inside-with-typeorm)                                     | Low      |
| 8.1.12.5 | - [How to change an already defined table structure with typeorm?](#how-to-change-an-already-defined-table-structure-with-typeorm)                                   | High     |
| 8.2      | _NoSQL DB_                                                                                                                                                           |          |
| 8.2.1    | [What is MongoDB?](#what-is-mongodb)                                                                                                                                 | High     |
| 8.2.2    | [How data is organized in MongoDB?](#how-data-is-organized-in-mongodb)                                                                                               | Medium   |
| 8.2.3    | [What does the BASE stand for?](#what-does-the-base-stand-for)                                                                                                       | Medium   |
| 8.2.4    | [How to make a relationship between Documents in MongoDB?](#how-to-make-a-relationship-between-documents-in-mongodb)                                                 | Medium   |
| 8.2.5    | [How scaling of NoSQL and SQL databases differs?](#how-scaling-of-nosql-and-sql-databases-differs)                                                                   | High     |
| **9**    | **Security**                                                                                                                                                         |          |
| 9.1      | [What is the difference among Encoding, Encryption and Hashing?](#what-is-the-difference-among-encoding-encryption-and-hashing)                                      | Medium   |
| 9.2      | [What are the use cases for Encoding, Encryption and Hashing?](#what-are-the-use-cases-for-encoding-encryption-and-hashing)                                          | Medium   |
| 9.3      | [How do you understand symmetric and asymmetric encryption?](#how-do-you-understand-symmetric-and-asymmetric-encryption)                                             | Low      |
| 9.4      | [What is the difference between private and public key?](#what-is-the-difference-between-private-and-public-key)                                                     | Low      |
| 9.5      | [What is HTTPS? How it works?](#what-is-https)                                                                                                                       | Medium   |
| 9.6      | [What is Authentication and Authorization?](#what-is-authentication-and-authorization)                                                                               | Medium   |
| 9.7      | [What is JWT? Is it safe to store sensitive information inside JWT?](#what-is-jwt)                                                                                   | High     |
| 9.8      | [What types of Authentication do you know? When to use them?](#what-types-of-authentication-do-you-know-when-to-use-them)                                            | Low      |
| **10**   | **General questions**                                                                                                                                                |          |
| 13.1     | [Name the main advantages of Microservice architecture over Monolith](#name-the-main-advantages-of-microservice-architecture-over-monolith)                          | Medium   |
| 13.2     | [How do you understand an event-driven architectures? What is a pub-sub pattern?](#how-do-you-understand-an-event-driven-architectures)                              | Medium   |
| 13.3     | [What is a 3-tier WEB Application? Are the tiers logical or physical?](#what-is-a-3-tier-web-application)                                                            | Low      |

## Node.js

1. ### What is Node.js?

    Node.js is a **runtime environment** for the JavaScript.

    It consists of **Chrome V8** engine and **libuv** library.

    - V8 takes JavaScript source code and runs it outside of the browser.
    - Libuv contains C++ code that enables low-level access to the operating system and provides functionality such as networking, writing to the file system, and concurrency).
    
   Node.js is single-threaded, based on event-driven architecture, and non-blocking based on the I/O model.

      **[⬆ Back to Top](#table-of-contents)**

2. ### When to use Node.js and when not to use it?

    When to use node.js:

    - Single-Page Applications
    - Streaming Web Applications
    - Real-time Collaboration Tools
    - Real-Time Chat Applications
    - Microservices Architecture

    When not use node.js:

    - A CPU-Heavy Applications.

    **[⬆ Back to Top](#table-of-contents)**

3. ### What is package.json?

   A package.json is a JSON file at the root of a Javascript/Node project.
   It holds metadata relevant to the project and it is used for managing the project’s dependencies, scripts, version and a whole lot more.

   **[⬆ Back to Top](#table-of-contents)**

4. ### What is the difference between dependencies and devDependencies in package.json?

    - Dependencies consist of all the packages that are used in the project. These are the libraries you need when you run your code.
    - DevDependencies consist of all the packages that are used in the project in its development phase and not in the production. These dependencies may be needed at some point during the development process, but not during execution.
    - If you want to install your package from npm registry via npm **install your-package-name**, devPependencies will be skipped

    **[⬆ Back to Top](#table-of-contents)**  

5. ### What is npm?

    Npm stands for Node Package Manager.

    It is an online repository for the publishing of open-source Node.js projects.

    Also, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management.

    **[⬆ Back to Top](#table-of-contents)**  

6. ### What is the difference between Sync vs Async operations?

   - Asynchronous functions do not block the execution of the program. They run in the background and load the result once they have finished processing. They are called non-blocking functions.
   - Synchronous functions block the execution of the program until it has finished processing.

    Generally, many node.js async methods have their sync analogs. But heavy operations which consume time for processing(e.g. querying huge data from a database) should be done asynchronously as other operations can still be executed and thus, reducing the time of execution of the program

    **[⬆ Back to Top](#table-of-contents)**

7. ### How Event Loop works?

    The event loop allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible.

    When event loop receives an I/O operation event it registers a callback for that event and offloads this operation to the system kernel. Once this operation is executed, event loop places the callback to the corresponding callback queue.

    When the call stack(V8) is empty, the callback goes through the callback queue and sends the callback to the call stack where the callback is executed.

    **[⬆ Back to Top](#table-of-contents)**

8. ### Is Node.js entirely based on a single-thread?

    - Your application code is executed on a single thread. Also, event loop works on the same single thread. But I/O operations, Opening and closing connections, setTimeouts are executed on the background on different threads, which are provided by libuv. It is called thread pool. By default, it consists of 4 threads.
    - Also, there is a functionality related to child_process, worker threads and cluster, which provides multithreading in node.js 

    **[⬆ Back to Top](#table-of-contents)**

9. ### What is the Event Emitter class? How it is related to other classes?

   EventEmitter is a class that helps us to utilize event-driven architecture in NodeJS.

    With an event emitter, a new event can be raised from a different part of an application, and a listener will listen to the raised event and have some action performed for the event.

    Many core node.js modules extends this behaviour.
   
    **[⬆ Back to Top](#table-of-contents)**

10. ### What kinds of streams does Node.js have?

    Streams are data-handling method and are used to read or write input into output sequentially.

    Instead of a program reading a file into memory all at once, streams read chunks of data piece by piece, processing its content without keeping it all in memory.

    Using of streams provides memory efficiency and time efficiency.
    There are 4 types of streams in node.js:
    - Readable.
    - Writable.
    - Duplex.
    - Transform.

    **[⬆ Back to Top](#table-of-contents)**

11. ### When Streams can be used in Node.js?

    Many of the built-in modules in Node implement the streaming interface.
    Http responses and requests, TCP sockets, fs read and write streams, crypto streams and many other implement their interface.
    Basically, if you need to handle large amount of data, you should use streams.

    **[⬆ Back to Top](#table-of-contents)**

12. ### What are the differences between worker thread and child_process?

    - child_process provides the ability to spawn new processes (child node.js processes) that have their own memory. The communication between these processes is established through IPC (inter-process communication) provided by the operating system.
    - Worker threads are threads of a process (node.js process). They use the shared memory space.
    - So the difference between worker threads and child processes is same as the difference between a thread and a process.

    **[⬆ Back to Top](#table-of-contents)**
 
13. ### What is the difference between commonJS and ES modules?

    - ES modules are the standard for JavaScript, while CommonJS is the default in Node.js. 
    - The major difference in commonjs and ES module is of synchronous and asynchronous nature: commonjs modules are synchronous, loading and parsing of ES modules is asynchronous.
    - CommonJS modules load using require(), and variables and functions export from a CommonJS module with module.exports
    - ES modules load using import, and variables and functions export from an ES Module with export

    Compare syntax:
    - CommonJS:
    ```javascript
    module.exports.add = function(a, b) {
        return a + b;
    }
    
    // then in index.js
    const { add } = require('./util')
    console.log(add(5, 5));
    ```
    - ES Modules
    ```javascript
    export function add(a, b) {
        return a + b;
    }
    
    // then in index.js
    import { add } from './util.mjs'

    console.log(add(5, 5));
    ```
    **[⬆ Back to Top](#table-of-contents)**

14. ### How to force node.js to treat your .js files as ES modules?

    By default, Node.js treats JavaScript code as CommonJS modules. You can change this behaviour in 2 ways:
    - Change a file extension from .js to .mjs.
    - Add a "type: module" field inside the nearest package.json file

    **[⬆ Back to Top](#table-of-contents)**

15. ### What is a Memory Leak? How to prevent it?

    Memory leaks can be defined as memory that is not required by an application anymore that for some reason is not returned to the operating system or the pool of free memory.

    The main cause for leaks in Javascript are unwanted references. To prevent your application from memory leaks you should avoid the next:
    - Accidental global variables.
    - Forgotten timers or callbacks.
    - Be careful with Closures.

    **[⬆ Back to Top](#table-of-contents)**

16. ### How do you understand the Callback Pattern? What is a callback hell?

       A callback is a function passed as an argument to another function. In Node.js a callback function is called at the completion of a given task. It is a base of node.js asynchronous behaviour. Basically, you should follow the **error callback convention**:
       - the callback is the last parameter;
       - the callback gets called after the function is done with all of its operations;
       - the first parameter of the callback is the error value;
       - if the function hits an error, it will call the callback with an error as a first parameter. Else it will call the callback with a null and rest parameters with data.
       
        The callback hell happens when you put one callback inside other, again and again. It typically looks like this:
       ```javascript
       fs.readdir(source, function (err, files) {
       if (err) {
        console.log('Error finding files: ' + err)
       } else {
        files.forEach(function (filename, fileIndex) {
            console.log(filename)
            gm(source + filename).size(function (err, values) {
                if (err) {
                console.log('Error identifying file size: ' + err)
                } else {
                console.log(filename + ' : ' + values)
                aspect = (values.width / values.height)
                widths.forEach(function (width, widthIndex) {
                    height = Math.round(width / aspect)
                    console.log('resizing ' + filename + 'to ' + height + 'x' + height)
                    this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
                        if (err) console.log('Error writing file: ' + err)
                    })
                    }.bind(this))
                }
            })
        })
       }
       })
       ```
       
    **[⬆ Back to Top](#table-of-contents)**

17. ### What is a Promise?

    The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

    It allows you to associate handlers with an asynchronous action's eventual success value or failure reason

    A simple example of a Promise:
    ```javascript
    const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
        }, 300);
    });
    
    myPromise
    .then(handleFulfilled)
    .catch(handleRejected);
    
    // or it can be chained
    myPromise
    .then(handleFulfilledA, handleRejectedA)
    .then(handleFulfilledB, handleRejectedB)
    .then(handleFulfilledC, handleRejectedC);
    ```

    **[⬆ Back to Top](#table-of-contents)**

18. ### What states does the Promise have? Can the state be changed once it was fulfilled or rejected?

    It can be in one of its 3 states:
    - pending - initial state, neither fulfilled nor rejected.
    - fulfilled (with a value) - meaning that the operation was completed successfully
    - rejected(with an error) - meaning that the operation failed.
    
    Once the promise state is changed to fulfilled or rejected, it cannot be changed again
    
    **[⬆ Back to Top](#table-of-contents)**

19. ### What are the advantages of the async/await over Promises?

    - Async/Await is a syntactic sugar for promises, a wrapper making the code execute more synchronously.
    - Using Async/Await makes it easier to read and understand the flow of the program as compared to promise chains.
    - You can handle an exception thrown inside async function using try{}catch(e){} block
    
    Compare two code snippets:
    ```javascript
    // Promise
    const helperPromise = function () {
        const promise = new Promise(function (resolve, reject) {
        const x = "geeksforgeeks";
        const y = "geeksforgeeks";
        if (x === y) {
            resolve("Strings are same");
        } else {
            reject("Strings are not same");
        }
        });
 
        return promise;
    };
    
    // async/await
    async function demoPromise() {
        try {
            let message = await helperPromise();
            console.log(message);
        } catch (error) {
        console.log("Error: " + error);
        }
    }
    
    demoPromise();
    ```

    **[⬆ Back to Top](#table-of-contents)**

20. ### What is Promisification and when it is used?

    Promisification is the conversion of a function that accepts a callback into a function that returns a promise.
    Many functions and libraries are callback-based, but promises are more convenient, so it makes sense to promisify them.
    
    In node.js the util.promisify() method is used to convert a method that returns responses using a callback function to return responses in a promise object
    ```javascript

    const util = require('util')
    const fs = require('fs')
    
    const readdir = util.promisify(fs.readdir)
    
    readdir('process.cwd()')
        .then(files => {
        console.log(files)
    })
        .catch(err => {
        console.log(err)
    })
    ```
    
    **[⬆ Back to Top](#table-of-contents)**

21. ### What is Express.js and what is its use?

    - Express is a node js web application framework. It is used for building web and mobile applications: single page, multipage, and hybrid web application.
    - Express is a layer built on the top of the Node js that helps manage servers and routes. Express is Unopinionated, and we can customize it.
    - Express is Unopinionated, and you can customize it.

    **[⬆ Back to Top](#table-of-contents)**

22. ### What are the main building blocks of Express.js?

    Express.js speeds up your server-side development. Its main features are:
    - Routing
    - Middlewares
    - Templating
    - Debugging

    **[⬆ Back to Top](#table-of-contents)**

23. ### What are the purposes for middlewares in Express.js?

    Express middleware are functions that execute during the lifecycle of a request to the Express server.
    Each middleware has access to the HTTP request and response for each route (or path) it’s attached to.
 
    Middleware functions can perform the following tasks: 
    - Execute any code;
    - End the request-response cycle;
    - Call the next middleware in the stack.
    
    Example of a middleware that logs the req object into the console:
    ```javascript
    const express = require('express');
    const app = express();
    
    app.use((req, res, next) => {
        console.log(req);
        next();
    });
    
    app.get('/', (req, res, next) => {
        res.send('Welcome Home');
    });
    
    app.listen(3000);
    ```
    **[⬆ Back to Top](#table-of-contents)**

24. ### What is the use of **next** in Express.js?

    **next** is used for “chaining” of middleware. With **next** you can pass the HTTP request on to another middleware function.

    **[⬆ Back to Top](#table-of-contents)**

25. ### How can you differ an error handling function from a request handler function?

    Because of the **error callback convention** the first parameter of the error handling function is the error value. So signature of these functions differs with their parameters:
    - function errorHandler (err, req, res, next) {}
    - function simpleRequestHandler (req, res, next) {}

    **[⬆ Back to Top](#table-of-contents)**

26. ### What can be a Provider in NestJS?

    The main idea is that a Provider can be injected as a dependency.
    Many of the basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on.
    Example of a Service as a Provider:
    ```javascript
    @Injectable()
    class CatsService {
        // service logic
    }
    
    @Controller('cats')
    class CatsController {
        // injecting a Provider
        constructor(private catsService: CatsService) {}
        // controller logic
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

27. ### What are the use cases for Pipes in NestJS?

    Pipes are used to transform input data to the desired form and to validate data.
    A pipe is interposed just before a method is invoked.

    Example of binding a Nest builtin ParseIntPipe at the method parameter level:
    ```javascript
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
    }
    ```
    
    **[⬆ Back to Top](#table-of-contents)**

28. ### Is there a possibility to bind extra logic before/after method execution in NestJS?

    You can do it using Nest **Interceptors**.
    Interceptor wraps the request/response stream.
    Inside the Interceptor you have access to the ExecutionContext and CallHandler(handle() method).
    So you may implement custom logic both before and after the execution of the final route handler.
    **[⬆ Back to Top](#table-of-contents)**

29. ### How all unhandled exceptions are processed in NestJS?

    There is a built-in **exceptions layer** which is responsible for processing all unhandled exceptions that were not handled by your code.
    
    This layer is a **global exception filter**. When it catches an exception it sends an appropriate user-friendly response.
    
    **[⬆ Back to Top](#table-of-contents)**

30. ### What is a Health check? Why do we need it?

    Health Check endpoint helps us to detect that a running service instance is unable to handle requests.

    How it works: 
    - A service has an health check API endpoint (e.g. HTTP /health) that returns the health of the service.
    - A health check client - a monitoring service, service registry or load balancer - periodically invokes the endpoint to check the health of the service instance

    **[⬆ Back to Top](#table-of-contents)**

31. ### What is a correlation ID? How it helps to debug your application?

    A correlation ID is a unique ID that is assigned to every transaction in our application.

    CorrelationID helps us when we have to visualize and understand what has happened with this transaction across different microservices.

    So, when a transaction becomes distributed across multiple services, we can follow that transaction across different services using the logging information.
    The correlation ID is basically passed from service to service.
    All services that process that specific transaction receive the correlation ID and pass it to the next service and so on so that they can log any events associated with that transaction to our centralized logs.

    **[⬆ Back to Top](#table-of-contents)**

32. ### What is a test pyramid? How can you implement it regarding HTTP APIs?

    The Test Pyramid is a concept that helps you to organize testing of your application. It consists of 3 layers, from bottom to top:
    - Unit tests;
    - Integration tests;
    - End-to-End tests;

    **[⬆ Back to Top](#table-of-contents)**

33. ### What is a Given-When-Then pattern?

    Given-When-Then is a style of representing tests. The essential idea is to break down your test into three sections:
    - The given part describes the state of your app before you begin the behavior you're specifying in this test;
    - The when section is that behavior that you're specifying;
    - The then section describes the changes you expect due to the specified behavior.

    **[⬆ Back to Top](#table-of-contents)**

34. ### What mocks and stubs are? How are they used in integration testing?

    With mocks and stubs you can substitute your real working code with a dummy piece of code.
    It is a common use case during the integration testing to substitute real calls to the database, http calls, etc. with these kinds of fake methods.

    The difference between them is that you don't care what happens to the **stubbed** method, but you care how your **mocked** method was called in your test.

    **[⬆ Back to Top](#table-of-contents)**

35. ### What test runner libraries do you know

    **Jest** and **Mocha** are the most popular test runners for node.js applications.
    - **Jest** itself provides the whole testing functionality, such as test running, making assertions, faking methods(mocks, stubs, spies)
    - **Mocha** is a standalone test runner. You can add here assertions libraries, such as **chai**, and faking methods libraries, such as **sinon**

    **[⬆ Back to Top](#table-of-contents)**

36. ### What is Unit-testing? What are the FIRST principles?

    Unit testing - is an **isolated** testing of the smallest piece of your code(such as function or method). **Isolated** is crucial here: in unit tests you are not dealing with real http calls or database. You are also not testing their integrations.
    
    FIRST is an acronym that describes the qualities of a good unit test, and it stands for:
    - Fast
    - Independent
    - Repeatable
    - Self-validating
    - Timely

    **[⬆ Back to Top](#table-of-contents)**

37. ### What are the Levels of REST API?

    There is a Maturity Model that tells about the maturity level of REST API(the higher the level the more mature is REST API). It consists of 4 levels:
    - 0: The Swamp of POX - at this level your API cannot be described as REST at all.
    - 1: Resource BASED ADDRESS/URI - your API address to the REST Resource BASED principles
    - 2: Utilize Potential of HTTP - HTTP headers, status codes are used appropriately
    - 3: Use Hypermedia or HATEOAS - The basic idea is to send additional information inside the endpoint to provide it to the client. So client does not need to know the next endpoint he is interested in because he gets this information from your endpoint.

    **[⬆ Back to Top](#table-of-contents)**

38. ### What constraints does the REST have?

    The six architectural constraints of REST APIs:
    - Client-server architecture;
    - Statelessness - an API handles calls independently of each other. The server does not store information about client.
    - Uniform Interface - use http protocol to communicate with each other
    - Layered system - each layer does its function and then sends the data to the next one. Connected layers communicate with each other, but not with every component of the program.
    - Cacheability - The concept is simple: the client has the option to locally store certain pieces of data for a predetermined period of time. When they make a request for that data, instead of the server sending it again, they use the stored version
    - Code on Demand

    **[⬆ Back to Top](#table-of-contents)**

39. ### Name the main Http methods. What is the difference between Put and Patch?

    GET, POST, PUT, DELETE, PATCH
    The difference between PUT and PATCH is that with PUT a client updates and substitutes **the whole** resource, but with PATCH it just updates the resource **partially**

    **[⬆ Back to Top](#table-of-contents)**

40. ### What status should be sent in a response to a create object request?

    201, created

    **[⬆ Back to Top](#table-of-contents)**

41. ### explain the MVC model

    MVC Pattern stands for Model-View-Controller Pattern. The main goal of MVC is to split large applications into specific sections that have their own individual purpose.
    - The **Model** determines how a database is structured, defining a section of the application that interacts with the database;
    - The **View** is where end users interact within the application;
    - the **Controller** interacts with the model and serves the response and functionality to the view.

    **[⬆ Back to Top](#table-of-contents)**

42. ### What is GraphQL? What are its advantages over REST API?

    GraphQL is a query language for APIs and a runtime for fulfilling those queries.
    With GraphQL clients asks for exactly what they need and retrieves many resources in a single request.
    
    Its advantages over REST API:
    - It is **faster**. Because it facilitates clients to cut down their request queries by choosing only the specific fields they want.
    - We can integrate multiple systems behind GraphQL's API.
    - No Over- and Underfetching.
    **[⬆ Back to Top](#table-of-contents)**

43. ### Name the key principles of OOP

    - ABSTRACTION - it helps you to use functionality without needing to worry about the internals of this functionality;
    - ENCAPSULATION - It is a group of properties and members under a single class or Object. You can use this principle to encapsulate a set of objects into different classes;
    - INHERITANCE - it allows you to reuse code without having to rewrite it in a program. You inherit codes from another class and reuse it in a new class;
    - POLYMORPHISM - It is the ability of one function to perform in different ways(method Overloading, Overriding).

    **[⬆ Back to Top](#table-of-contents)**

44. ### What is a dependency injection? 

    It is a design pattern in which an object or function receives other objects or functions that it depends on.
    The pattern ensures that an object or function which wants to use a given service should not have to know how to construct those services
    This pattern involves 3 types of classes:
    - Client Class: The client class (dependent class) is a class which depends on the service class
    - Service Class: The service class (dependency) is a class that provides service to the client class.
    - Injector Class: The injector class injects the service class object into the client class.
    
    Pseudo code:
    ```javascript
    interface Warrior {
        fight(): string;
    }

    interface Weapon {
        hit(): string;
    }

    @injectable()
    class Weapon implements Weapon {
        public hit() {
            return "cut!";
        }
    }

    @injectable()
    class Ninja implements Warrior {
        private _katana: Weapon;

        public constructor(
            // dependency injection
            @inject(TYPES.Weapon) katana: Weapon,
        ) {
            this._katana = katana;
        }

        public fight() { return this._katana.hit(); };
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

45. ### What is a Layered Architecture? Give a few examples
    
    The basic idea of this pattern is that modules or components with similar functionalities are organized into horizontal layers.
    The number of layers are not strict. TPC/IP, OSI are examples of layered architecture
    
     Applying to your node.js application you can divide your app into the next three layers:
    - Router Layer - contains the app programming interface (API) routes of the app.
    - Service Layer - handles the business logic of the app.
    - Data Access Layer - has access to the database to create, delete, or edit data. 

    **[⬆ Back to Top](#table-of-contents)**

46. ### How data is stored in RDBMS?

    Tables are used in relational databases to store data. 
    Each table is organized into a column, and each column stores one type of data (integer, real number, character strings, date, etc.).
    Rows are used to store data for a single “instance” of a table. An index on a table is defined to improve access time to a data table.

    **[⬆ Back to Top](#table-of-contents)**

47. ### What is a normalization concept?

    Normalization is a database design technique that reduces data redundancy.
    Normalization rules divides larger tables into smaller tables and links them using relationships.
    The purpose of Normalisation in SQL is to eliminate redundant (repetitive) data and ensure data is stored logically.
    
    There are 6 forms of normalization, but in most practical applications, normalization achieves its best in 3rd Normal Form.
    
    - 1 form - each table cell should contain a single value, each record needs to be unique.
    - 2 form - 1 form + Single Column Primary Key that does not functionally dependant on any subset of candidate key relation
    - 3 form - 2 form + Has no transitive functional dependencies. A transitive functional dependency is when changing a non-key column, might cause any of the other non-key columns to change

  **[⬆ Back to Top](#table-of-contents)**

48. ### What table relationships do you know? How to create them?

    There are 3 type of relationships:
    - One-to-One - a record in one table can correspond to only one record in another table (the FK in one table corresponds to the PR of another table. The FK is **UNIQUE**)
    - One-to-Many - a record in one table corresponds to zero, one, or many records in another table. (the FK in one table corresponds to the PR of another table) 
    - Many-to-Many - multiple records in a table are linked to multiple records in another table. It is achieved by creating a third table, known as a join table, and create one-to-many relationships between it and your two starting tables. (2 tables with PKs, 1 join table with 2 foreign keys of these 2 tables)

    **[⬆ Back to Top](#table-of-contents)**

49. ### What is the difference between DDL and DML?

    DDL and DML both are part of SQL language:
    - DDL is Data Definition Language which is used to define data structures( For example: create table, alter table)
    - DML is Data Manipulation Language which is used to manipulate data itself(For example: insert, update, delete) 
    
    **[⬆ Back to Top](#table-of-contents)**

50. ### What data types are presented in PostgreSQL?

    - Boolean
    - Character Types (  char, varchar, and text)
    - Numeric Types (  integer and floating-point number)
    - Temporal Types (  date, time, timestamp, and interval)
    - UUID ( for storing UUID (Universally Unique Identifiers) )
    - Array ( for storing array strings, numbers, etc.)
    - JSON ( JSON and JSONB)
    - hstore ( stores key-value pair)
    - Special Types (  network address and geometric data)

    **[⬆ Back to Top](#table-of-contents)**

51. ### How tables can be joined?

    Here are the different types of the JOINs in SQL:

    - (INNER) JOIN: Returns records that have matching values in both tables
    - LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table
    - RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table
    - FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table

    **[⬆ Back to Top](#table-of-contents)**

52. ### What is a sub query?

    - A subquery is a SQL query nested inside a larger query.
    - A subquery is also called an inner query or inner select, while the statement containing a subquery is also called an outer query or outer select.
    - The inner query executes first before its parent query so that the results of an inner query can be passed to the outer query
    
    An example of query with a subQuery:

    ```
    SELECT a.studentid, a.name, b.total_marks
    FROM student a, marks b
    WHERE a.studentid = b.studentid AND b.total_marks >
       (SELECT total_marks
        FROM marks
        WHERE studentid =  'V002');
    ```    

    **[⬆ Back to Top](#table-of-contents)**

53. ### Explain Transactions and ACID

    A transaction is a unit of work that is performed against a database. It bundles multiple steps into a single, all-or-nothing operation.
    The intermediate states between the steps are not visible to other concurrent transactions, and if some failure occurs that prevents the transaction from completing, then none of the steps affect the database at all

    ACID is an acronym which refers to the four key properties of a transaction:
    - Atomicity − ensures that all operations within the work unit are completed successfully. Otherwise, the transaction is aborted at the point of failure and all the previous operations are rolled back to their former state.
    - Consistency − ensures that the database properly changes states upon a successfully committed transaction.
    - Isolation − enables transactions to operate independently of and transparent to each other.
    - Durability − ensures that the result or effect of a committed transaction persists in case of a system failure.

    **[⬆ Back to Top](#table-of-contents)**

54. ### What are Lock Levels in Postgres?

    Lock modes allows to control transactions concurrent access to data in tables.

    The difference between one lock mode and another is the set of lock modes with which each conflicts.
    
    Different SQL commands acquire different lock modes.

    The main lock levels are Table-Level_Locks and Row-Level Locks.

    In Table-Level_Locks:
    - Two transactions cannot hold locks of conflicting modes on the same table at the same time.
    - Non-conflicting lock modes can be held concurrently by many transactions.

    In Row-Level_Locks:
    - two transactions can never hold conflicting locks on the same row
    - a transaction can hold conflicting locks on the same row, even in different subtransactions;

    **[⬆ Back to Top](#table-of-contents)**

55. ### What type of indexes do you know? When to use them?
    
    Indexes allow to speed up the execution of your SQL queries, but they take the free disc space.
    The main indexes in PostresQL are:
    - B-Tree - default index. Can be used for more operations and column types.
    - GIN - used with array-type data and full text-search.
    - Hash - for equality operations (one simple equality operation = ). Larger than b-tree.
    - BRIN - used for data blocks (min to max value), linear sort.
    
    **[⬆ Back to Top](#table-of-contents)**

56. ### What is ORM? What problems does it solve?

    Object-Relational Mapping (ORM) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm.
    An ORM library is a library written in your language that encapsulates the code needed to manipulate the data, so you don't use SQL anymore.
    ORM saves a lot of time because a lot of operations is done automatically by ORM.

    **[⬆ Back to Top](#table-of-contents)**

57. ### What is the Query Builder?

    Typeorm Query builder is used to build complex SQL queries.
    You can create Query builder using Connection, Entity manager or Repository class. 

    Here is an example of using a Query Builder:
    ```javascript
    const user = await getRepository(User)
     .createQueryBuilder("user")
     .where("user.id = :id", { id: 1 })
     .getOne();
    ```

    **[⬆ Back to Top](#table-of-contents)**

58. ### What are Active Record and Data Mapper patterns?

    Using the Active Record you define all your query methods inside the model itself, and you save, remove, and load objects using model methods.
    ```javascript
    // example how to save AR entity
    const user = new User()
    user.firstName = "Timber"
    await user.save()
    ```

    Using the Data Mapper you define all your query methods in separate classes called "repositories", and you save, remove, and load objects using repositories
    ```javascript
    const userRepository = dataSource.getRepository(User)

    // example how to save DM entity
    const user = new User()
    user.firstName = "Timber"
    await userRepository.save(user)
    ```

    **[⬆ Back to Top](#table-of-contents)**

59. ### What is the difference between Raw Entities and Entities?

    These are two types of results you can get using select query builder:
    - Entities - when you need to select real entities from your database, for example, users.
    - Raw results - when you need to select specific data, like the sum of all user photos. Such data is not a entity, it's called raw data. To get raw data, you use getRawOne and getRawMany

    **[⬆ Back to Top](#table-of-contents)**

60. ### How to process tables with a lot of data inside with typeorm?

    You can use QueryBuilder **.stream()** method which returns you a stream.
    Streaming returns you raw data.

    **[⬆ Back to Top](#table-of-contents)**

61. ### How to change an already defined table structure with typeorm?

    You can do it with typeorm **migrations**.
    A migration is just a single file with sql queries to update a database schema and apply new changes to an existing database.
    For example, you need to rename **title** to **name**:
    - Create a new migration with a SQL query, that updates the table structure, for example: ```ALTER TABLE "post" ALTER COLUMN "title" RENAME TO "name";```
    - Run this migration.

    **[⬆ Back to Top](#table-of-contents)**

62. ### What is MongoDB?

    MongoDB is a free, distributed, document database.
    
    **[⬆ Back to Top](#table-of-contents)**

63. ### How data is organized in MongoDB?

    MongoDB stores data in flexible, JSON-like **documents**, meaning fields can vary from document to document and data structure can be changed over time.

    A document is composed of field and value pairs.

    The values of fields may include other documents, arrays, and arrays of documents.

    Documents are stored in **Collections**.

    By default, a collection does not require its documents to have the same schema; i.e. the documents in a single collection do not need to have the same set of fields and the data type for a field can differ across documents within a collection.

    **[⬆ Back to Top](#table-of-contents)**

64. ### What does the BASE stand for?

    BASE is a database model. NoSQL databases are modelled according to BASE principles which stands for:
    - Basically Available - availability of data is ensured by spreading and replicating it across the nodes of the database cluster.
    - Soft State - due to the lack of immediate consistency, data values may change over time.
    - Eventually Consistent - does not enforce immediate consistency of data.

  **[⬆ Back to Top](#table-of-contents)**

65. ### How to make a relationship between Documents in MongoDB?

    There are no relationships between documents in MongoDB.
    MongoDB Relationships are the representation of how the multiple documents are logically connected to each other in MongoDB.
    The **Embedded** and **Referenced** methods are two ways to create such relationships:
    - the Embedded method - the documents are embedded within one another in this model;
    - the Referenced method - We keep the documents separate in this model, but one document contains the references to the others
    
    **[⬆ Back to Top](#table-of-contents)**

66. ### How scaling of NoSQL and SQL databases differs?

    SQL databases are vertically scalable (more CPU, RAM, or SSD), while NoSQL databases are horizontally scalable(more servers)

    **[⬆ Back to Top](#table-of-contents)**

67. ### What is the difference among Encoding, Encryption and Hashing?

    Encoding:
    - data is transformed from one form to another
    - The main aim of encoding is to transform data into a form that is readable by most of the systems or that can be used by any external process.
    
    Encryption:
    - transforms data into another format in such a way that only specific individual(s) can reverse the transformation

    Hashing:
    - takes arbitrary input and produce a fixed-length string.
    - The same input will always produce the same output.
    - It should not be possible to go from the output to the input

    **[⬆ Back to Top](#table-of-contents)**

68. ### What are the use cases for Encoding, Encryption and Hashing?

    Encoding:
    - Transforms data so that it can be properly (and safely) consumed by a different type of system( ASCII, Unicode, Morse code etc.)
    
    Encryption:
    - Security - access to Databases, web applications traffic, cloud storage encryption etc (for example: ssh, https) 
    
    Hashing:
    - password storing
    - ensuring data integrity
    - lookup tables
    
    **[⬆ Back to Top](#table-of-contents)**

69. ### How do you understand symmetric and asymmetric encryption?

    - **Symmetric** encryption uses **a single key** that needs to be shared between 2 sides of communication who need to receive the message.
    - **Asymmetric** encryption uses **a pair of public key and a private key** to encrypt and decrypt messages when communicating.

    **[⬆ Back to Top](#table-of-contents)**

70. ### What is the difference between private and public key?

    They are both used during the communication that uses asymmetric encryption/decryption:
    - The Server holds the client's **public key**.
    - The client holds its **private key** secured. The client decrypts data sent by the server and send it back to verify that he is who he is.

    **[⬆ Back to Top](#table-of-contents)**

71. ### What is HTTPS? How it works?

    HTTPS is the secure version of HTTP, which is the primary protocol used to send data between a web browser and a website.
    
    HTTPS is **encrypted** in order to increase security of **data transfer**.

    HTTPS uses Transport Layer Security (TLS) security protocol.
    
    HTTPS simplified work:
    
    - Client and Server use **asymmetric encryption** during their handshake to create **session keys** (Here the server SSL certificate is verified)
    - All further communication between server and client is done using **symmetric encryption** with session keys created at previous step

    **[⬆ Back to Top](#table-of-contents)**

72. ### What is Authentication and Authorization?

    - **Authentication** is a process of verifying the identity of the user.
    It verifies that someone or something is who they say they are.
    - **Authorization** is the security process that determines what actions a user is allowed to do in our system.
    It is a process of granting the rights to the user.

    **[⬆ Back to Top](#table-of-contents)**

73. ### What is JWT? Is it safe to store sensitive information inside JWT?

    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.
    JWT is used as a secure way to **authenticate** users and share information.

    Basically, JWT is a token that consists of three parts, separated by dots: **header**, **payload** and **signature**.

    The signature ensures that the token **hasn’t been altered**

    It is not safe to store sensitive information inside the token's payload since it can be easily stolen

    **[⬆ Back to Top](#table-of-contents)**

74. ### What types of Authentication do you know? When to use them?

    - Password authentication;
    - Two-factor authentication - password + additional confirmation from another device;
    - Token authentication;
    - Biometric authentication;
    - Transaction authentication - compares the user’s characteristics with what it knows about the user, looking for discrepancies.
    - Computer recognition authentication - verifies that a user is who they claim to be by checking that they are on a particular device
    - CAPTCHAs - are designed to neutralize **automated programs** breaking into your system.
    - Single sign-on - enables a user to only enter their credentials **once** to gain access to multiple applications.

    **[⬆ Back to Top](#table-of-contents)**

75. ### Name the main advantages of Microservice architecture over Monolith

    - Independent components - all the services can be deployed and updated independently. A bug in one microservice does not influence the entire application.
    - Better scalability;
    - Easier understanding - because of the smaller and simpler components;
    - Flexibility in choosing the technology.

    **[⬆ Back to Top](#table-of-contents)**

76. ### How do you understand an event-driven architectures? What is a pub-sub pattern?

    - An **event-driven architecture** uses events to trigger and communicate between decoupled services.
    An event is a change in state
    In event-driven architectures each service publishes an **event** whenever it update its data.
    Other service **subscribe** to events. When an event is received, a service updates its data.

    - **Pub-sub** is a patterns that helps to implement event-driven architecture.
    In Pub-sub **Publisher** and **Subscriber** communicates using **Event Channel** so that there is no direct connection between Publisher and Subscriber.
    The Publisher pushes events to the Event Channel, and the Subscriber subscribes to that Event Channel.

    **[⬆ Back to Top](#table-of-contents)**

77. ### What is a 3-tier WEB Application? Are the tiers logical or physical?

    A 3-tier application architecture is a modular client-server architecture that consists of a **presentation tier**, an **application tier** and a **data tier**.
    - The data tier stores information;
    - The application tier handles logic;
    - The presentation tier is a graphical user interface that communicates with the other two tiers.
    
    The three tiers **are logical, not physical**, and may or may not run on the same physical server.

    **[⬆ Back to Top](#table-of-contents)**
