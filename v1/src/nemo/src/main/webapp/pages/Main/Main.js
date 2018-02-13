Application.$controller("MainPageController", ["$scope", 'DialogService', function($scope, DialogService) {
    "use strict";

    $scope.json_result = "";
    $scope.json_result_wf = "";
    //End point where NEMO can download a given file.
    $scope.download_url = 'http://localhost:8082/graphservice/download/';


    $scope.items_in_list = 0;
    $scope.wf_items = [];

    //List of processes available. Note: currently the front end expose all the list every time a user need to add a new process. 
    //The list has to be updated based on the previous selecton. A process input data need to be compatible with output data from the preceding process. 
    $scope.process_items = ["Start", "Select Network Data", "Execute Network Query", "Select Query Data", "Statistical Data Analysis", "Save Variable", "Plot Data", "End"];
    $scope.process_default = "Start";


    //Handle event when a user clicks on graph record under "my tab". 
    $scope.grid2Rowclick = function($event, $data) {


        var nvalues = "";
        for (var k in $data.node_attributes) nvalues = nvalues.concat(captilizeFirst(k).concat(" (", captilizeFirst($data.node_attributes[k]), ")"), ", ");

        var evalues = " ";
        for (var k2 in $data.edge_attributes) evalues = evalues.concat(captilizeFirst(k2).concat(" (", captilizeFirst($data.edge_attributes[k2]), ")"), ", ");



        var jsonVar = {
            name: rcaptilizeFirst($data.name),
            directed: captilizeFirst($data.directed),
            description: captilizeFirst($data.description),
            nodes: $data.numberOfNodes,
            edges: $data.numberOfEdges,
            node_att: nvalues,
            edge_att: evalues
        };

        // Set the variable data
        $scope.Variables.graphName.setData(jsonVar)
        $scope.Variables.gotoGraphDetails.navigate();
    };


    //Helper functions 
    function captilizeFirst(p) {
        return p.charAt(0).toUpperCase() + p.slice(1);
    }

    function rcaptilizeFirst(p) {
        return p.charAt(0).toLowerCase() + p.slice(1);
    }


    //Handle event when a user clicks on graph record under "all tab".
    $scope.grid4Rowclick = function($event, $data) {



        var nvalues = "";
        for (var k in $data.node_attributes) nvalues = nvalues.concat(captilizeFirst(k).concat(" (", captilizeFirst($data.node_attributes[k]), ")"), ", ");

        var evalues = " ";
        for (var k2 in $data.edge_attributes) evalues = evalues.concat(captilizeFirst(k2).concat(" (", captilizeFirst($data.edge_attributes[k2]), ")"), ", ");



        var jsonVar = {
            name: rcaptilizeFirst($data.name),
            directed: captilizeFirst($data.directed),
            description: captilizeFirst($data.description),
            nodes: $data.numberOfNodes,
            edges: $data.numberOfEdges,
            node_att: nvalues,
            edge_att: evalues
        };

        // Set the variable data
        $scope.Variables.graphName.setData(jsonVar)
        $scope.Variables.gotoGraphDetails.navigate();






    };

    $scope.tree2Select = function($event, $isolateScope, $item, $path) {
        $scope.tree2 = $item;
    };

    //Event handler when a user clicks on "Run" button to execute a query.
    $scope.button8Click = function($event, $isolateScope) {

        var content = $scope.Widgets.query_text.datavalue;

        var view;

        var format;

        if ($scope.Widgets.seed_mode.datavalue == 'no') {

            view = 'property';

        } else {

            view = 'seed';
        }

        if ($scope.Widgets.result_format.datavalue == 'XML') {

            format = 'True';

        } else {

            format = 'False';
        }

        var details;
        if ($scope.Widgets.details.datavalue == 'Only IDs') {

            details = 'False';

        } else {

            details = 'True';
        }

        //alert(details);

        var qdata = {
            content: content,
            graph: $scope.Variables.graphName.getData().name,
            validate: 'False',
            view: view,
            nruns: '2',
            memo: 'False',
            details: details,
            session: '1',
            csvf: format
        };



        //Call the query service  
        $scope.Variables.GraphqueryInvoke.setInput(qdata);

        $scope.Variables.GraphqueryInvoke.update();

    };


    //Code to handle the response of the query service.   
    $scope.GraphqueryInvokeonBeforeUpdate = function(variable, data) {




        if ($scope.Widgets.query_text.datavalue.includes('node')) {
            if ($scope.Widgets.result_format.datavalue == 'JSON') {
                //alert(JSON.stringify(data));
                $scope.json_result = JSON.stringify(data.result);
                $scope.Widgets.progress1.datavalue = parseFloat(data.result.node_sets[0].coverage);
            } else {
                $scope.json_result = JSON.stringify(data.result);
                $scope.Widgets.progress1.datavalue = parseFloat($(data.result).find("coverage").text());

            }
        } else {
            $scope.json_result = JSON.stringify(data.result.edge_sets[0]);
            $scope.Widgets.progress1.datavalue = parseFloat(data.result.edge_sets[0].coverage);
        }
    };


    //Event handler to executing a user-defined workflow.
    $scope.executewfInvokeonBeforeUpdate = function(variable, data) {
        $scope.Widgets.spinner2.caption = "Loading Data...";
        var wfdata = $scope.Variables.wf_task.getData();
        var app_path = "resources/images/plots/";
        if (wfdata[wfdata.length - 2].Name == "Plot Data") {
            var pp = app_path + data.datavalue + ".png";
            var urlp = {
                "url": pp
            };

            $scope.Variables.plot_url.setData(urlp);
            $scope.Widgets.textarea4.show = false;
            $scope.Widgets.plot_result.show = true;
            $scope.Widgets.button16.show = true;
            $scope.Widgets.button17.show = true;
            $scope.Widgets.button17_1.show = true;


        } else {

            $scope.json_result_wf = data.datavalue;
            $scope.Widgets.textarea4.show = true;
            $scope.Widgets.plot_result.show = false;
            $scope.Widgets.button16.show = false;
            $scope.Widgets.button17.show = false;
            $scope.Widgets.button17_1.show = false;
        }

        $scope.Widgets.spinner2.show = false;


    };

    //Reset the workflow to initial state. When user clicks on the workflow reset button.
    $scope.button9Click = function($event, $isolateScope) {
        $scope.Variables.wf_task.setData([]);
        $scope.json_result_wf = "";
        $scope.Widgets.textarea4.show = true;
        $scope.Widgets.plot_result.show = false;
        $scope.Widgets.button16.show = false;
        $scope.Widgets.button17.show = false;
        $scope.Widgets.button17_1.show = false;
    };

    //Handle the "run" workflow button.
    $scope.button14_1Click = function($event, $isolateScope) {
        $scope.Widgets.spinner2.caption = "Preparing Workflow...";
        $scope.Widgets.spinner2.show = true;

        var wfdata = $scope.Variables.wf_task.getData();


        var wfd = "";

        var wfp = "";

        for (var i in wfdata) {

            if (wfdata[i].Input !== "") {
                wfd = wfd.concat(wfdata[i].Input).concat("|");
            }

            if (wfdata[i].Name == "Execute Network Query") {
                wfp = wfp.concat("execute_query").concat(",");
            } else if (wfdata[i].Name == "Select Network Data") {
                wfp = wfp.concat("network_data").concat(",");
            } else if (wfdata[i].Name == "Select Query Data") {
                wfp = wfp.concat("query_data").concat(",");
            } else if (wfdata[i].Name == "Sum") {
                wfp = wfp.concat("sum_data").concat(",");
            } else if (wfdata[i].Name == "Average") {
                wfp = wfp.concat("average_data").concat(",");
            } else if (wfdata[i].Name == "Standard Deviation") {
                wfp = wfp.concat("std_data").concat(",");
            } else if (wfdata[i].Name == "Variance") {
                wfp = wfp.concat("var_data").concat(",");
            } else if (wfdata[i].Name == "Median") {
                wfp = wfp.concat("median_data").concat(",");
            } else if (wfdata[i].Name == "Product") {
                wfp = wfp.concat("product_data").concat(",");
            } else if (wfdata[i].Name == "Min") {
                wfp = wfp.concat("min_data").concat(",");
            } else if (wfdata[i].Name == "Max") {
                wfp = wfp.concat("max_data").concat(",");
            } else if (wfdata[i].Name == "Start") {
                wfp = wfp.concat("start").concat(",");
            } else if (wfdata[i].Name == "End") {
                wfp = wfp.concat("end").concat(",");
            } else if (wfdata[i].Name == "Count") {
                wfp = wfp.concat("count_data").concat(",");
            } else if (wfdata[i].Name == "Plot Data") {
                wfp = wfp.concat("plot_data").concat(",");
            } else if (wfdata[i].Name == "Save Variable") {
                wfp = wfp.concat("save_data").concat(",");
            }

        }

        wfd = wfd.substring(0, wfd.length - 1);
        wfp = wfp.substring(0, wfp.length - 1);






        var qdata2 = {
            wf: wfp,
            input: wfd

        };



        $scope.Widgets.spinner2.caption = "Executing Workflow...";
        $scope.Variables.executewfInvoke.setInput(qdata2);

        $scope.Variables.executewfInvoke.update();
    };


    //Handle the download pdf button
    $scope.button16Click = function($event, $isolateScope) {
        var id = $scope.Variables.plot_url.getData().url;
        id = id.slice(0, -3);
        id = id.replace("resources/images/plots/", "");
        var dlink = download_url + id + 'pdf';
        window.location.assign(dlink);
    };


    //Handle the download png button
    $scope.button17Click = function($event, $isolateScope) {
        var id = $scope.Variables.plot_url.getData().url;
        id = id.slice(0, -3);
        id = id.replace("resources/images/plots/", "");
        var dlink = download_url + id + 'png';
        window.location.assign(dlink);
    };

    //Handle the download data button
    $scope.button17_1Click = function($event, $isolateScope) {
        var id = $scope.Variables.plot_url.getData().url;
        id = id.slice(0, -3);
        id = id.replace("resources/images/plots/", "");
        var dlink = download_url + id + 'dat';
        window.location.assign(dlink);
    };



}]);

Application.$controller("grid2Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("grid4Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("grid3Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialog1Controller", ["$scope", 'DialogService',
    function($scope, DialogService) {
        "use strict";
        $scope.ctrlScope = $scope;




        //Handle the event when a user select a process in the workflow builder.
        $scope.select6Change = function($event, $isolateScope) {

            if ($scope.Widgets.process_type.datavalue == 'Execute Network Query') {

                $scope.Widgets.query_execute_input.show = true;
                $scope.Widgets.network_attribute_input.show = false;
                $scope.Widgets.query_attribute_input.show = false;
                $scope.Widgets.stat_operation_input.show = false;
                $scope.Widgets.plot_operation.show = false;
                $scope.Widgets.save_variable.show = false;

            } else if ($scope.Widgets.process_type.datavalue == 'Select Network Data') {
                $scope.Widgets.query_execute_input.show = false;
                $scope.Widgets.network_attribute_input.show = true;
                $scope.Widgets.query_attribute_input.show = false;
                $scope.Widgets.stat_operation_input.show = false;
                $scope.Widgets.plot_operation.show = false;
                $scope.Widgets.save_variable.show = false;

            } else if ($scope.Widgets.process_type.datavalue == 'Select Query Data') {
                $scope.Widgets.query_attribute_input.show = true;
                $scope.Widgets.query_execute_input.show = false;
                $scope.Widgets.network_attribute_input.show = false;
                $scope.Widgets.stat_operation_input.show = false;
                $scope.Widgets.plot_operation.show = false;
                $scope.Widgets.save_variable.show = false;

            } else if ($scope.Widgets.process_type.datavalue == 'Statistical Data Analysis') {
                $scope.Widgets.query_attribute_input.show = false;
                $scope.Widgets.query_execute_input.show = false;
                $scope.Widgets.network_attribute_input.show = false;
                $scope.Widgets.stat_operation_input.show = true;
                $scope.Widgets.plot_operation.show = false;
                $scope.Widgets.save_variable.show = false;
            } else if ($scope.Widgets.process_type.datavalue == 'Save Variable') {
                $scope.Widgets.query_attribute_input.show = false;
                $scope.Widgets.query_execute_input.show = false;
                $scope.Widgets.network_attribute_input.show = false;
                $scope.Widgets.stat_operation_input.show = false;
                $scope.Widgets.plot_operation.show = false;
                $scope.Widgets.save_variable.show = true;
            } else if ($scope.Widgets.process_type.datavalue == 'Plot Data') {
                $scope.Widgets.query_attribute_input.show = false;
                $scope.Widgets.query_execute_input.show = false;
                $scope.Widgets.network_attribute_input.show = false;
                $scope.Widgets.stat_operation_input.show = false;
                $scope.Widgets.plot_operation.show = true;
                $scope.Widgets.save_variable.show = false;

            } else if (($scope.Widgets.process_type.datavalue == 'End') || ($scope.Widgets.process_type.datavalue == 'Start')) {

                $scope.Widgets.query_attribute_input.show = false;
                $scope.Widgets.query_execute_input.show = false;
                $scope.Widgets.network_attribute_input.show = false;
                $scope.Widgets.stat_operation_input.show = false;
                $scope.Widgets.plot_operation.show = false;
                $scope.Widgets.save_variable.show = false;
            }



        };

        //Get node or edge attributes of a network. Send request to graph service.
        $scope.select8Change = function($event, $isolateScope) {
            var idata = {

                network: rcaptilizeFirst($scope.Widgets.network_name.datavalue),
                target: $scope.Widgets.target_type.datavalue,
            };


            scope.Variables.GetattributeInvoke.setInput(idata);

            $scope.Variables.GetattributeInvoke.update();

        };


        //Handle the event when the user clicks on "add process" button.
        $scope.button13_1Click = function($event, $isolateScope) {
            var temp = [];
            var nn = $scope.Widgets.network_name.caption;
            var pt = $scope.Widgets.process_type.datavalue;
            var wfdata = $scope.Variables.wf_task.getData();

            if ($scope.Widgets.process_type.datavalue == 'Execute Network Query') {

                var qi = $scope.Widgets.query_input.datavalue;
                var tt = $scope.Widgets.target_type_q.datavalue;


                var x = qi.concat(",").concat(nn).concat(",").concat(tt);

                var rowData = {
                    "Name": pt,
                    "Description": "Executes a network query using NQS service",
                    "Input": x,
                    "Output": "NQS JSON Response"
                };

                temp.push(rowData);

                $scope.wf_items = $scope.Variables.wf_task.getData().concat(temp);

                $scope.Variables.wf_task.setData($scope.wf_items); /*Changes the dataSet*/



                DialogService.hideDialog('dialog1');




            } else if ($scope.Widgets.process_type.datavalue == 'Select Network Data') {

                var an = $scope.Widgets.attribute_name.datavalue;
                var tty = $scope.Widgets.target_type_q.datavalue;
                var cond = $scope.Widgets.text14.datavalue;
                //alert(cond);
                var x2 = ""
                if (cond === undefined) {
                    x2 = an.concat(",").concat(nn).concat(",").concat(tty).concat(",").concat("no condition");
                } else {
                    x2 = an.concat(",").concat(nn).concat(",").concat(tty).concat(",").concat(cond);
                }

                var rowData2 = {
                    "Name": pt,
                    "Description": "Extracts " + an + " attribute data from network",
                    "Input": x2,
                    "Output": an + " data for each " + tty
                };

                temp.push(rowData2);

                $scope.wf_items = $scope.Variables.wf_task.getData().concat(temp);

                $scope.Variables.wf_task.setData($scope.wf_items); /*Changes the dataSet*/



                DialogService.hideDialog('dialog1');




            } else if ($scope.Widgets.process_type.datavalue == 'Select Query Data') {

                var an2 = $scope.Widgets.attribute_name2.datavalue;


                var x3 = an2

                var rowData3 = {
                    "Name": pt,
                    "Description": "Extracts " + an2 + " attribute data from query results",
                    "Input": x3,
                    "Output": an2 + " data"
                };

                temp.push(rowData3);

                $scope.wf_items = $scope.Variables.wf_task.getData().concat(temp);

                $scope.Variables.wf_task.setData($scope.wf_items); /*Changes the dataSet*/



                DialogService.hideDialog('dialog1');



            } else if ($scope.Widgets.process_type.datavalue == 'Statistical Data Analysis') {

                var sop = $scope.Widgets.stat_op_type.datavalue;

                var rowData4 = {
                    "Name": sop,
                    "Description": "Calculates " + sop + " of input data",
                    "Input": "",
                    "Output": sop + " of data"
                };

                temp.push(rowData4);

                $scope.wf_items = $scope.Variables.wf_task.getData().concat(temp);

                $scope.Variables.wf_task.setData($scope.wf_items); /*Changes the dataSet*/



                DialogService.hideDialog('dialog1');

            } else if ($scope.Widgets.process_type.datavalue == 'Save Variable') {
                var vn = $scope.Widgets.vname.datavalue;
                var rowData8 = {
                    "Name": pt,
                    "Description": "Saves variable " + vn + " for later use",
                    "Input": vn,
                    "Output": ""
                };

                temp.push(rowData8);

                $scope.wf_items = $scope.Variables.wf_task.getData().concat(temp);

                $scope.Variables.wf_task.setData($scope.wf_items); /*Changes the dataSet*/



                DialogService.hideDialog('dialog1');

            } else if ($scope.Widgets.process_type.datavalue == 'Plot Data') {
                var pty = $scope.Widgets.plot_type.datavalue;

                var yl = $scope.Widgets.xlabel.datavalue;
                var xl = $scope.Widgets.ylabel.datavalue;
                var xf = $scope.Widgets.xfont.datavalue;
                var tf = $scope.Widgets.tfont.datavalue;
                var mt = $scope.Widgets.mtype.datavalue;
                var mc = $scope.Widgets.mcolor.datavalue;
                var ms = $scope.Widgets.msize.datavalue;
                var pti = $scope.Widgets.ptitle.datavalue;
                var ptc = "";
                var pinput = "";
                var nbn = $scope.Widgets.nbin.datavalue;
                var var_name = $scope.Widgets.v_name.datavalue;
                var bar_color = $scope.Widgets.text16.datavalue;
                var ls = $scope.Widgets.lstyle.datavalue;
                var lw = $scope.Widgets.lwidth.datavalue;

                if (pty == "Clustering Coefficient Distribution") {

                    ptc = '2';

                    pinput = ptc.concat(",").concat(xl).concat(",").concat(yl).concat(",").concat(xf).concat(",").concat(tf).concat(",").concat(mc).concat(",").concat(mt).concat(",").concat(ms).concat(",").concat(pti).concat(",").concat(nbn).concat(',').concat(ls).concat(',').concat(lw);
                } else if (pty == "Degree Distribution") {
                    ptc = '1';
                    pinput = ptc.concat(",").concat(xl).concat(",").concat(yl).concat(",").concat(xf).concat(",").concat(tf).concat(",").concat(mc).concat(",").concat(mt).concat(",").concat(ms).concat(",").concat(pti).concat(',').concat(ls).concat(',').concat(lw);

                } else if (pty == "Variable(s) Value") {
                    ptc = '3';
                    pinput = ptc.concat(",").concat(var_name).concat(",").concat(bar_color).concat(",").concat(xl).concat(",").concat(yl).concat(",").concat(xf).concat(",").concat(tf).concat(",").concat(pti);


                } else if (pty == "K-core Distribution") {
                    ptc = '4';
                }



                var rowData7 = {
                    "Name": "Plot Data",
                    "Description": "Plot Network Data",
                    "Input": pinput,
                    "Output": pty + " Plot"

                }


                temp.push(rowData7);

                $scope.wf_items = $scope.Variables.wf_task.getData().concat(temp);

                $scope.Variables.wf_task.setData($scope.wf_items); /*Changes the dataSet*/



                DialogService.hideDialog('dialog1');

            } else if ($scope.Widgets.process_type.datavalue == 'Start') {

                var rowData5 = {
                    "Name": "Start",
                    "Description": "Prepare workflow input data and start execution",
                    "Input": "",
                    "Output": ""
                };

                temp.push(rowData5);

                $scope.wf_items = $scope.Variables.wf_task.getData().concat(temp);

                $scope.Variables.wf_task.setData($scope.wf_items); /*Changes the dataSet*/



                DialogService.hideDialog('dialog1');




            } else if ($scope.Widgets.process_type.datavalue == 'End') {

                var rowData6 = {
                    "Name": "End",
                    "Description": "Marks end of workflow execution",
                    "Input": "",
                    "Output": ""
                };

                temp.push(rowData6);

                $scope.wf_items = $scope.Variables.wf_task.getData().concat(temp);

                $scope.Variables.wf_task.setData($scope.wf_items); /*Changes the dataSet*/



                DialogService.hideDialog('dialog1');
            }


        };


        //Handle the event when a user changes the plot type.
        $scope.plot_typeChange = function($event, $isolateScope) {
            if ($scope.Widgets.plot_type.datavalue == 'Clustering Coefficient Distribution') {

                $scope.Widgets.num_bins.show = true;
                $scope.Widgets.composite35.show = true;
                $scope.Widgets.composite35_1.show = true;
                $scope.Widgets.composite36.show = true;
                $scope.Widgets.vnames.show = false;
                $scope.Widgets.bcolors.show = false;
                $scope.Widgets.l_width.show = true;
                $scope.Widgets.l_style.show = true;
            } else if ($scope.Widgets.plot_type.datavalue == 'Variable(s) Value') {
                $scope.Widgets.num_bins.show = false;
                $scope.Widgets.composite35.show = false;
                $scope.Widgets.composite35_1.show = false;
                $scope.Widgets.composite36.show = false;
                $scope.Widgets.vnames.show = true;
                $scope.Widgets.bcolors.show = true;
                $scope.Widgets.l_width.show = false;
                $scope.Widgets.l_style.show = false;

            } else {
                $scope.Widgets.composite35.show = true;
                $scope.Widgets.composite35_1.show = true;
                $scope.Widgets.composite36.show = true;
                $scope.Widgets.num_bins.show = false;
                $scope.Widgets.vnames.show = false;
                $scope.Widgets.bcolors.show = false;
                $scope.Widgets.l_width.show = true;
                $scope.Widgets.l_style.show = true;
            }
        };

    }
]);

Application.$controller("iframedialog1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);