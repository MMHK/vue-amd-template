<!DOCTYPE html>
<html lang="en">

<head>
    <title>
        <%= project_name %>
    </title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1 , maximum-scale=1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="theme-color" content="#000000">
    <!-- build:css -->
    <link href="lib/normalize-css/normalize.css" rel="stylesheet">
    <link href="css/common.css" rel="stylesheet">
    <!-- endbuild -->
    <script type="text/javascript">
        var BASE_PATH = "";
        var IN_PRO = false;
        var MAIN_CONFIH = {
            API_ROOT : ""
        };
    </script>
</head>

<body>
    <div id="App">
        <router-view></router-view>
    </div>
</body>
<!-- build:js -->
<script type="text/javascript" src="lib/requirejs/require.js"></script>
<script type="text/javascript" src="config/config.js"></script>
<script type="text/javascript" src="main.js"></script>
<!-- endbuild -->

</html>