<style>
    nav {
        width: 100%;
        background-color: #ffc581;
        top: 0px;
        left: 0px;
        position: fixed;
    }

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style: none;
    }

    li {
        font-family: 'Viga';
        font-size: 30px;
    }

    a {
        position: relative;
        color: #ed2a00;
    }

    a:hover {
        text-decoration: none;
    }

    a::before {
        content: "";
        position: absolute;
        top: 35px;
        height: 5px;
        width: 100%;
        background-color: red;
        transform: scaleX(0);
        transition: transform 0.2s ease;
    }

    a:hover::before {
        transform: scaleX(1);
    }
</style>

<nav>
    <ul>
        <li><a href="https://dfplusplus.github.io/webpage">Home</a></li>
        <li><a href="https://dfplusplus.github.io/webpage/downloads/">All Downloads</a></li>
        <li><a href="https://dfplusplus.github.io/webpage/features/">Features</a></li>
        <li><a href="https://dfplusplus.github.io/webpage/credits/">Credits</a></li>
        <li><a href="https://github.com/dfplusplus/mod" target="_blank">Source</a></li>
    </ul>
</nav>