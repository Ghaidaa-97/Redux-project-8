
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>Sign In | Bootstrap Based Admin Template - Material Design</title>
    <!-- Favicon-->
    <link rel="icon" href="dashbord/../../favicon.ico" type="image/x-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin,cyrillic-ext" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css">

    <!-- Bootstrap Core Css -->
    <link href="{{asset('dashbord/plugins/bootstrap/css/bootstrap.css')}}" rel="stylesheet">

    <!-- Waves Effect Css -->
    <link href="{{asset('dashbord/plugins/node-waves/waves.css')}}" rel="stylesheet" />

    <!-- Animation Css -->
    <link href="{{asset('dashbord/plugins/animate-css/animate.css')}}" rel="stylesheet" />

    <!-- Morris Chart Css-->
    <link href="{{asset('dashbord/plugins/morrisjs/morris.css')}}" rel="stylesheet" />

    <!-- Custom Css -->
    <link href="{{asset('dashbord/css/style.css')}}" rel="stylesheet">

    <!-- AdminBSB Themes. You can choose a theme from css/themes instead of get all themes -->
    <link href="{{asset('dashbord/css/themes/all-themes.css')}}" rel="stylesheet" />
</head>

<body class="login-page">
    <div class="login-box m-t-15">
        <div class="logo">
            <a >Admin<b>Boleto</b></a>

        </div>
        <div class="card">
            <div class="head" style="
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;">
            ">
                <h2>Sign In</h2>
                <p> <b>Please enter your email and password to login</b></p>
            </div>
            <div class="body">
                @if($errors->any())
                <div class="alert alert-danger " role="alert">
                    <h6 class="alert-heading text-align">{{$errors->first()}}</h6>
                </div>
                @endif

                <form id="sign_in" action="{{route('admin.login_save')}}" method="POST">
                    @csrf

                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">person</i>
                        </span>
                        <div class="form-line">
                            <input type="email" class="form-control" name="email" placeholder="E-mail" required autofocus>
                        </div>
                    </div>
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">lock</i>
                        </span>
                        <div class="form-line">
                            <input type="password" class="form-control" name="password" placeholder="Password" required>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-xs-4">
                            <button class="btn btn-block bg-pink waves-effect" type="submit">SIGN IN</button>
                        </div>
                    </div>
                    <div class="row m-t-15 m-b--20">

                    </div>
                </form>
            </div>
        </div>
    </div>
<!-- Jquery Core Js -->
<script src="{{asset('dashbord/plugins/jquery/jquery.min.js')}}"></script>

<!-- Bootstrap Core Js -->
<script src="{{asset('dashbord/plugins/bootstrap/js/bootstrap.js')}}"></script>

<!-- Select Plugin Js -->
<script src="{{asset('dashbord/plugins/bootstrap-select/js/bootstrap-select.js')}}"></script>

<!-- Slimscroll Plugin Js -->
<script src="{{asset('dashbord/plugins/jquery-slimscroll/jquery.slimscroll.js')}}"></script>

<!-- Waves Effect Plugin Js -->
<script src="{{asset('dashbord/plugins/node-waves/waves.js')}}"></script>

<!-- Jquery CountTo Plugin Js -->
<script src="{{asset('dashbord/plugins/jquery-countto/jquery.countTo.js')}}"></script>

<!-- Morris Plugin Js -->
<script src="{{asset('dashbord/plugins/raphael/raphael.min.js')}}"></script>
<script src="{{asset('dashbord/plugins/morrisjs/morris.js')}}"></script>

<!-- ChartJs -->
<script src="{{asset('dashbord/plugins/chartjs/Chart.bundle.js')}}"></script>

<!-- Flot Charts Plugin Js -->
<script src="{{asset('dashbord/plugins/flot-charts/jquery.flot.js')}}"></script>
<script src="{{asset('dashbord/plugins/flot-charts/jquery.flot.resize.js')}}"></script>
<script src="{{asset('dashbord/plugins/flot-charts/jquery.flot.pie.js')}}"></script>
<script src="{{asset('dashbord/plugins/flot-charts/jquery.flot.categories.js')}}"></script>
<script src="{{asset('dashbord/plugins/flot-charts/jquery.flot.time.js')}}"></script>

<!-- Sparkline Chart Plugin Js -->
<script src="{{asset('dashbord/plugins/jquery-sparkline/jquery.sparkline.js')}}"></script>

<!-- Custom Js -->
<script src="{{asset('dashbord/js/admin.js')}}"></script>
<script src="{{asset('dashbord/js/pages/index.js')}}"></script>

<!-- Demo Js -->
<script src="{{asset('dashbord/js/demo.js')}}"></script>
</body>

</html>
