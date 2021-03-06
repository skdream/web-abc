# 跨tab通信

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>cross tabs communication</title>
    <style>
        body {
            width: 980px;
            margin: 0 auto;
        }

        a {
            font-size: 16px;
            color: rgb(83, 97, 221);
        }

        a:hover {
            color: rgb(102, 114, 224);
            text-decoration: underline;
        }

        .link {
            position: absolute;
            right: 0;
            bottom: 80px;
        }

        main {
            position: relative;
        }

        main::after {
            content: '';
            display: block;
            height: 0;
            font-size: 0;
            line-height: 0;
            clear: both;
        }

        h1 {
            line-height: 30px;
            font-size: 30px;
            border-left: 4px solid rgb(83, 97, 221);
            padding-left: 15px;
            margin: 25px 0 5px 0;
        }

        h2 {
            margin: 0 0 20px 0;
            font-size: 18px;
            font-weight: 100;
            color: #999;
        }

        section {
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 5px;
            width: 480px;
            float: left;
            margin: 0 20px 10px 0;
            padding: 0 20px;
        }

        section:hover {
            border: 1px solid rgb(83, 97, 221);
        }

        section p {
            height: 20px;
            font-size: 12px;
            color: #333;
        }

        section:nth-child(2n) {
            margin-right: 0;
        }

        section h2 {
            margin: 10px 0 0;
            font-size: 18px;
            color: #333;
            font-weight: 400;
        }

        section h3 {
            margin: 0 0 10px 0;
            font-size: 14px;
            color: #999;
            font-weight: 100;
        }

        section input {
            box-sizing: border-box;
            width: 300px;
            margin-right: 20px;
            border-radius: 3px;
            color: #333;
            line-height: 25px;
            font-size: 12px;
            padding: 0 15px;
            outline: none;
            box-shadow: none;
            border: 1px solid #f1f1f1;
        }

        section input::placeholder {
            color: #999;
        }

        section button {
            line-height: 25px;
            background: rgb(83, 97, 221);
            color: #fff;
            border-radius: 3px;
            cursor: pointer;
            width: 100px;
        }

        section.disabled {
            opacity: .6;
        }

        section.disabled:hover {
            border-color: #ddd;
            cursor: not-allowed;
        }

        section.disabled button {
            background: #999;
        }

        section.disabled button:hover {
            background: #999;
            cursor: not-allowed;
        }

        section.disabled input:hover {
            cursor: not-allowed;
        }

        section button:hover {
            background: rgb(102, 114, 224);
        }

        section button:focus {
            outline: none;
        }

        section p {
            margin: 6px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .iframe {
            padding-top: 20px;
        }

        .iframe h3 {
            margin: 10px 0 0 0;
        }

        iframe {
            border: 1px dashed #f21421;
            width: 100%;
            height: 350px;
        }
        footer {
            padding-top: 20px;
            text-align: center;
        }
        footer a {
            color: #bbb;
            font-weight: 100;
            text-decoration: underline;
            cursor: pointer;
        }
    </style>
    <title>index</title>
</head>
<body>
    <h1 id="js-header"></h1>
    <h2>This page shows the ways to share or sync messages between tabs which have the same origin.</h2>
    <script>
        let title = '';
        if (/new/.test(document.location.search)) {
            let num = parseInt(window.localStorage.getItem('count'), 10) + 1;
            title = 'No.' + num + ' - A New Tab (Cross Tabs Communication)';
            window.localStorage.setItem('count', num);
            document.getElementById('js-header').setAttribute('data-tab', num);
            document.title = title;
        }
        else {
            title = 'Cross Tabs Communication';
            window.localStorage.setItem('count', 1);
            document.getElementById('js-header').setAttribute('data-tab', 1);
        }
        document.getElementById('js-header').textContent = title;
    </script>
    <main>
        <section id="broadcast-channel">
            <h2>Broadcast Channel</h2>
            <h3>&nbsp;</h3>
            <input placeholder="Input Message" />
            <button type="button">Send Message</button>
            <p></p>
        </section>
        <section id="service-worker">
            <h2>Service Worker</h2>
            <h3>&nbsp;</h3>
            <input placeholder="Input Message" />
            <button type="button">Send Message</button>
            <p></p>
        </section>
        <section id="local-storage">
            <h2>Local Storage </h2>
            <h3>localStorage</h3>
            <input placeholder="Input Message" />
            <button type="button">Send Message</button>
            <p></p>
        </section>
        <section id="shared-worker">
            <h2>Shared Worker</h2>
            <h3>&nbsp;</h3>
            <input placeholder="Input Message" />
            <button type="button">Send Message</button>
            <p></p>
        </section>
        <section class="disabled" id="storage2">
            <h2>Other Storages</h2>
            <h3>Indexed DB / cookie</h3>
            <input placeholder="Input Message" disabled />
            <button type="button" disabled>Send Message</button>
            <p></p>
        </section>
        <section id="post-message">
            <h2>open & opener</h2>
            <h3>window.open / window.opener (Cross-document Messaging)</h3>
            <input placeholder="Input Message" />
            <button type="button">Send Message</button>
            <p></p>
        </section>
        <section class="disabled" id="websocket">
            <h2>Server Push</h2>
            <h3>WebSocket / SSE / Long Polling</h3>
            <input placeholder="Input Message" disabled />
            <button type="button" disabled>No Example</button>
            <p></p>
        </section>
        <a class="link" id="js-link" href="javascript:void(0);" target="_blank">Open a new tab (same origin) >></a>
    </main>
    <footer>
        <a href="https://www.alienzhou.com/2019/04/01/cross-tab-communication-in-frontend/">Article in Chinese</a>
    </footer>
    <script src="./util.db.js"></script>
    <script src="./script/broadcast.channel.js"></script>
    <script src="./script/service.worker.js"></script>
    <script src="./script/local.storage.js"></script>
    <script src="./script/shared.worker.js"></script>
    <script src="./script/indexed.db.js"></script>
    <script src="./script/window.open.js"></script>
</body>

</html>
```
