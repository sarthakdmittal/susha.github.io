<html>

<head>

<title>Commission Calculator</title>

 

<script type="text/javascript">

 

function validate() {

    var amount=document.Calculator.Sales.value;

    if (amount > 6000) {

        alert("Sales Value must be between 0-6000 only. Please re-enter the value.");

    }

}

 

function compute() {

    var amount=document.Calculator.Sales.value;

     

    if (amount < 1000){

        var percent = "8"; 

    }

    else if (amount >= 1000 && amount > 2000) {

        var percent = "0.02";

    }

    else if (amount >=2000 && amount < 3000){

        var percent = "0.03";

    }

    else (amount >= 3000) {

        var percent = "0.04";

    }

     

    var total=amount*percent;

     

    return total;  

}

</script>

</head>

<body>

<form name="Calculator" id="Calculator">

 

<table border="3">

    <tr>

        <td colspan="3">

            <center>

            <strong>Commission Calculator</strong>

            </center>

        </td>

    </tr>

    <tr>

        <td>

            Sales Value: <td><input type="text" id="Sales" name="Sales" onblur="validate()" value="" /></td>

            <td><input type="submit" value="Calculate" />

        </td>

    </tr>

    <tr>

        <td>

            Commission: <td><input type="text" name="Total" id="Total" onsubmit="compute()" value="" /></td>

        </td>

    </tr>        

</table>

 

</form>

 

</body>

</html>
